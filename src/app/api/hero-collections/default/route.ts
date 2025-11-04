import { NextResponse } from 'next/server';

// Simple fallback payload in case Tanger CMS is unavailable
const FALLBACK_CONTENT = {
  collection_id: 0,
  collection_name: 'Hockey Essentials',
  description: 'Fallback content shown when Tanger CMS is unavailable',
  content: [
    {
      id: 1,
      content_text: 'Hockey teaches us that every shift matters',
      content_type: 'motivational',
      theme: 'dedication',
      attribution: null,
    },
    {
      id: 2,
      content_text: 'Did you know the first hockey puck was made of wood?',
      content_type: 'statistics',
      theme: 'history',
      attribution: null,
    },
    {
      id: 3,
      content_text: 'Every player deserves encouragement on the ice',
      content_type: 'greeting',
      theme: 'support',
      attribution: null,
    },
    {
      id: 4,
      content_text: 'Champions learn from every game they play',
      content_type: 'wisdom',
      theme: 'growth',
      attribution: null,
    },
    {
      id: 5,
      content_text: "Hard work beats talent when talent doesn't work hard",
      content_type: 'motivational',
      theme: 'effort',
      attribution: null,
    },
    {
      id: 6,
      content_text: 'The Stanley Cup weighs 34.5 pounds',
      content_type: 'statistics',
      theme: 'facts',
      attribution: null,
    },
    {
      id: 7,
      content_text: 'Your hockey journey is unique and valuable',
      content_type: 'greeting',
      theme: 'encouragement',
      attribution: null,
    },
  ],
  count: 7,
  total_available: 0,
};

/**
 * API Route: /api/hero-collections/default
 *
 * Architecture: OnlyHockey ONLY uses Tanger CMS API routes.
 * We do NOT query the database directly - Tanger CMS is the API layer.
 *
 * Flow:
 * 1. Primary: Call Tanger CMS API endpoint
 * 2. Fallback: Return hardcoded content if Tanger CMS is unavailable
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const exclude = url.searchParams.get('exclude');

  const cmsBase = process.env.NEXT_PUBLIC_CMS_URL;
  if (!cmsBase) {
    // No Tanger CMS configured → return fallback
    console.warn(
      '⚠️ NEXT_PUBLIC_CMS_URL not configured - using fallback content'
    );
    const res = NextResponse.json(FALLBACK_CONTENT, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    res.headers.set('X-Hero-Proxy', 'fallback:no-cms-url');
    return res;
  }

  // Build Tanger CMS API URL with exclude parameter if provided
  const upstream = `${cmsBase.replace(/\/$/, '')}/api/hero-collections/default${
    exclude ? `?exclude=${exclude}` : ''
  }`;

  try {
    const res = await fetch(upstream, {
      method: 'GET',
      // Important: avoid caching stale responses during development
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Pass-through status and body when successful
    if (res.ok) {
      const body = await res.text();
      const out = new NextResponse(body, {
        status: res.status,
        headers: {
          'Content-Type': 'application/json',
          // Short caching on edge/CDN; tweak as desired
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      });
      out.headers.set('X-Hero-Proxy', 'tanger-cms');
      out.headers.set('X-Hero-Upstream-Status', String(res.status));
      return out;
    }

    // Tanger CMS error – log and return fallback to keep UI functional
    console.error(`⚠️ Tanger CMS API error ${res.status}: ${res.statusText}`);
    const fb = NextResponse.json(FALLBACK_CONTENT, {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    });
    fb.headers.set('X-Hero-Proxy', `fallback:tanger-cms-error-${res.status}`);
    return fb;
  } catch (err) {
    // Network/unknown error
    console.error('❌ Tanger CMS API fetch failed:', err);
    const fb = NextResponse.json(FALLBACK_CONTENT, {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    });
    fb.headers.set('X-Hero-Proxy', 'fallback:network-error');
    return fb;
  }
}
