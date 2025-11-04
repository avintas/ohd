import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if environment variables are available
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Test connection function
export async function testSupabaseConnection() {
  if (!supabase) {
    return {
      success: false,
      error:
        'Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local',
    };
  }

  try {
    const { data, error } = await supabase
      .from('content_processed')
      .select('id, title, content_type')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return { success: false, error: error.message };
    }

    console.log('Supabase connection successful:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Supabase connection failed:', err);
    return { success: false, error: 'Connection failed' };
  }
}

// Content types interface based on your schema
export interface ContentProcessed {
  id: string;
  title: string;
  content_type: string;
  markdown_content: string;
  status: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// Fetch content by type
export async function getContentByType(
  contentType: string
): Promise<ContentProcessed[]> {
  if (!supabase) {
    console.warn('Supabase not configured');
    return [];
  }

  const { data, error } = await supabase
    .from('content_processed')
    .select('*')
    .eq('content_type', contentType)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching content:', error);
    return [];
  }

  return data || [];
}

// Fetch specific content by ID
export async function getContentById(
  id: string
): Promise<ContentProcessed | null> {
  if (!supabase) {
    console.warn('Supabase not configured');
    return null;
  }

  const { data, error } = await supabase
    .from('content_processed')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching content by ID:', error);
    return null;
  }

  return data;
}
