import { supabase } from './supabase';

export interface TriviaSetFromDB {
  id: number;
  title: string;
  description?: string;
  category?: string;
  difficulty?: string;
  tags?: string;
  question_data: unknown; // This is the jsonb field with the actual questions
  status?: string;
  published_at?: string;
  scheduled_for?: string;
  created_at: string;
  updated_at: string;
  slug?: string;
  theme?: string;
  question_count?: number;
  visibility?: string;
}

// Fetch a specific trivia set by ID
export async function getTriviaSetById(
  id: number
): Promise<TriviaSetFromDB | null> {
  if (!supabase) {
    console.warn('Supabase not configured');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('trivia_sets')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching trivia set:', error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Failed to fetch trivia set:', err);
    return null;
  }
}

// Fetch all trivia sets (for debugging)
export async function getAllTriviaSets(): Promise<TriviaSetFromDB[]> {
  if (!supabase) {
    console.warn('Supabase not configured');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('trivia_sets')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching trivia sets:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Failed to fetch trivia sets:', err);
    return [];
  }
}
