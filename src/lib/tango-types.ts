// Base response types from Tango CMS API
export interface TangoApiResponse<T> {
  success: boolean;
  data: T[];
  count?: number;
  error?: string;
}

// Content type interfaces
export interface Stat {
  id: string;
  stat_text: string;
  stat_value: string;
  stat_category: string;
  year?: string;
  theme?: string;
  category?: string;
  attribution?: string;
}

export interface Wisdom {
  id: string;
  title: string;
  musing: string;
  from_the_box?: string;
  theme?: string;
  category?: string;
  attribution?: string;
}

export interface Motivational {
  id: string;
  quote: string;
  context?: string;
  theme?: string;
  category?: string;
  attribution?: string;
}

export interface Greeting {
  id: string;
  greeting_text: string;
  attribution?: string;
}
