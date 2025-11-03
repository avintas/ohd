import type {
  TangoApiResponse,
  TangoSingleResponse,
  Stat,
  Wisdom,
  Motivational,
  Greeting,
} from './tango-types';

const TANGO_CMS_URL = process.env.TANGO_CMS_URL!;

// Generic fetch function for array responses
async function fetchFromTango<T>(
  endpoint: string
): Promise<TangoApiResponse<T>> {
  try {
    const response = await fetch(`${TANGO_CMS_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js will cache this automatically
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: TangoApiResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from Tango CMS (${endpoint}):`, error);
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Generic fetch function for single item responses (random endpoints)
async function fetchSingleFromTango<T>(
  endpoint: string
): Promise<TangoSingleResponse<T>> {
  try {
    const response = await fetch(`${TANGO_CMS_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: TangoSingleResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from Tango CMS (${endpoint}):`, error);
    return {
      success: false,
      data: {} as T,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Typed fetch functions for each content type
export async function fetchStats(
  limit: number = 5
): Promise<TangoApiResponse<Stat>> {
  return fetchFromTango<Stat>(`/api/public/stats?limit=${limit}`);
}

export async function fetchWisdom(
  limit: number = 5
): Promise<TangoApiResponse<Wisdom>> {
  return fetchFromTango<Wisdom>(`/api/public/wisdom?limit=${limit}`);
}

export async function fetchMotivational(
  limit: number = 1
): Promise<TangoApiResponse<Motivational>> {
  return fetchFromTango<Motivational>(
    `/api/public/motivational?limit=${limit}`
  );
}

export async function fetchRandomMotivational(): Promise<
  TangoSingleResponse<Motivational>
> {
  return fetchSingleFromTango<Motivational>('/api/public/motivational/random');
}

export async function fetchGreeting(
  limit: number = 1
): Promise<TangoApiResponse<Greeting>> {
  return fetchFromTango<Greeting>(`/api/public/greetings?limit=${limit}`);
}

export async function fetchRandomGreeting(): Promise<
  TangoSingleResponse<Greeting>
> {
  return fetchSingleFromTango<Greeting>('/api/public/greetings/random');
}
