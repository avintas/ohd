import { fetchMotivational } from '@/lib/tango-api';
import MotivateClient from './MotivateClient';
import type { MotivateMessage } from '@/lib/motivateLoader';

// Helper function to convert text to Title Case
function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Map Tango CMS Motivational to MotivateMessage format
function mapTangoToMotivateMessage(
  tango: {
    id: string;
    quote: string;
    theme?: string;
    category?: string;
    attribution?: string;
  },
  index: number
): MotivateMessage {
  // Emoji mapping based on theme/category or index
  const emojiMap = [
    '🧱', // Be a Wall
    '💨', // Skate Like Wind
    '❄️', // Ice Chips
    '🥅', // Net Minder
    '⚡', // Power Play
    '🏒', // Face Off
    '🎯', // Breakaway
    '🛡️', // Penalty Kill
  ];

  // Generate title from theme/category or use first few words of quote
  // Normalize to Title Case for consistency
  const generateTitle = () => {
    let title = '';
    if (tango.theme) {
      title = tango.theme;
    } else if (tango.category) {
      title = tango.category;
    } else {
      // Use first 3-4 words of quote as title
      const words = tango.quote.split(' ').slice(0, 4);
      title = words.join(' ');
    }
    return toTitleCase(title);
  };

  return {
    id: tango.id,
    title: generateTitle(),
    emoji: emojiMap[index % emojiMap.length] || '💪',
    category: tango.category || '',
    shareTitle: tango.theme || generateTitle(),
    content: tango.quote,
    filename: `tango-${tango.id}`,
  };
}

export default async function MotivatePage() {
  // Fetch 8 motivational messages from Tango CMS
  const result = await fetchMotivational(8);

  // Debug: Uncomment to see what's coming from Tango CMS
  // console.log('Tango CMS Data:', JSON.stringify(result.data, null, 2));

  const motivateMessages: MotivateMessage[] = result.success
    ? result.data.map((item, index) => mapTangoToMotivateMessage(item, index))
    : [];

  return <MotivateClient motivateMessages={motivateMessages} />;
}
