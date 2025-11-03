import type { TangoApiResponse, Wisdom } from '@/lib/tango-types';
import { NextResponse } from 'next/server';

const TANGO_CMS_URL = process.env.TANGO_CMS_URL!;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    // Fetch directly from Tango CMS with no caching for fresh results
    const response = await fetch(
      `${TANGO_CMS_URL}/api/public/wisdom?limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Disable Next.js caching for this dynamic content
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: TangoApiResponse<Wisdom> = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { error: data.error || 'Failed to fetch wisdom' },
        { status: 500 }
      );
    }

    // Return response with no-cache headers to prevent browser caching
    return NextResponse.json(data, {
      headers: {
        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (error) {
    console.error('Error in wisdom API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
