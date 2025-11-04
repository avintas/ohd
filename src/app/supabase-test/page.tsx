'use client';

import { supabase } from '@/lib/supabase';
import { useState, useEffect } from 'react';

// Simplified version of the ContentItem from HeroSection
interface ContentItem {
  id: number;
  content_text: string;
  content_type: string;
}

interface ConnectionResult {
  success: boolean;
  error?: string;
  data?: { id: number }[];
}

interface CollectionItem {
  id: number;
  name: string;
  active: boolean;
  content_items: ContentItem[];
}

export default function SupabaseTest() {
  const [connectionResult, setConnectionResult] =
    useState<ConnectionResult | null>(null);
  const [heroCollections, setHeroCollections] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function runTests() {
      setLoading(true);

      const [connectionRes, collectionsRes] = await Promise.all([
        testConnection(),
        fetchHeroCollections(),
      ]);

      setConnectionResult(connectionRes);
      if (collectionsRes) {
        setHeroCollections(collectionsRes);
      }

      setLoading(false);
    }

    runTests();
  }, []);

  async function testConnection(): Promise<ConnectionResult> {
    if (!supabase) {
      return {
        success: false,
        error: 'Supabase client not configured in src/lib/supabase.ts',
      };
    }
    try {
      const { data, error } = await supabase
        .from('hero_collections')
        .select('id')
        .limit(1);

      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true, data: data || [] };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Connection failed';
      return { success: false, error: errorMessage };
    }
  }

  async function fetchHeroCollections(): Promise<CollectionItem[] | null> {
    if (!supabase) return null;
    try {
      const { data, error } = await supabase
        .from('hero_collections')
        .select('id, name, active, content_items')
        .limit(10);

      if (error) {
        console.error('Error fetching hero collections:', error.message);
        return [];
      }
      return data;
    } catch (err) {
      console.error('Error fetching collections:', err);
      return [];
    }
  }

  return (
    <main className="container mx-auto p-4 md:p-8 bg-[#0a0e1a] text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-black text-white flex items-center gap-3">
          <span className="text-green-400 text-3xl">🧪</span> Supabase
          Connection Test
        </h1>
      </header>

      <div className="bg-[#161a25] p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-[#4cc9f0] mb-4">
          Connection Status
        </h2>
        {loading ? (
          <p>Running tests...</p>
        ) : connectionResult?.success ? (
          <p className="text-green-400">
            ✅ Connection successful! Found table
            &apos;public.hero_collections&apos;.
          </p>
        ) : (
          <p className="text-red-400">
            ❌ Connection failed: {connectionResult?.error || 'Unknown error'}
          </p>
        )}
      </div>

      <div className="bg-[#161a25] p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-[#4cc9f0] mb-4">
          Hero Collections ({heroCollections.length} items found)
        </h2>
        {loading && <p>Loading...</p>}
        {!loading && heroCollections.length === 0 && (
          <p className="text-gray-400">
            No hero collections found (or RLS is blocking reads).
          </p>
        )}
        {!loading && heroCollections.length > 0 && (
          <ul className="list-disc list-inside text-sm">
            {heroCollections.map((c) => (
              <li key={c.id}>
                {c.name} ({c.active ? 'active' : 'inactive'},{' '}
                {c.content_items?.length ?? 0} items)
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
