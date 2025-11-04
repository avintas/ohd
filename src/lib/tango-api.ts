import type {
  TangoApiResponse,
  Stat,
  Wisdom,
  Motivational,
  Greeting,
  TriviaQuestion,
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

export async function fetchGreeting(
  limit: number = 1
): Promise<TangoApiResponse<Greeting>> {
  return fetchFromTango<Greeting>(`/api/public/greetings?limit=${limit}`);
}

export async function fetchTriviaQuestions(
  limit: number = 1
): Promise<TangoApiResponse<TriviaQuestion>> {
  // Note: This endpoint returns counts only (aggregates from trivia_multiple_choice,
  // trivia_true_false, trivia_who_am_i tables). The count property contains the total
  // number of published trivia questions. For fetching individual questions, use:
  // /api/public/multiple-choice-trivia, /api/public/true-false-trivia, /api/public/who-am-i-trivia
  return fetchFromTango<TriviaQuestion>(
    `/api/public/trivia-questions?limit=${limit}`
  );
}

// Helper function to get all content counts
export async function getContentCounts() {
  const [
    greetingsResult,
    wisdomResult,
    statsResult,
    motivationalResult,
    triviaResult,
  ] = await Promise.all([
    fetchGreeting(1), // Fetch 1 item to get the total count
    fetchWisdom(1),
    fetchStats(1),
    fetchMotivational(1),
    fetchTriviaQuestions(1),
  ]);

  return {
    hugsCount: greetingsResult.success ? greetingsResult.count || 0 : 0,
    wisdomCount: wisdomResult.success ? wisdomResult.count || 0 : 0,
    statsCount: statsResult.success ? statsResult.count || 0 : 0,
    motivationalCount: motivationalResult.success
      ? motivationalResult.count || 0
      : 0,
    triviaCount: triviaResult.success ? triviaResult.count || 0 : 0,
  };
}
