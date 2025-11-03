import { fetchGreeting } from '@/lib/tango-api';
import CaptainHeartClient from './CaptainHeartClient';
import type { HugMessage } from '@/lib/hugLoader';

// Helper function to convert text to Title Case
function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Map Tango CMS Greeting to HugMessage format
function mapTangoToHugMessage(
  tango: { id: string; greeting_text: string; attribution?: string },
  index: number
): HugMessage {
  // Emoji mapping for greetings (heart-themed)
  const emojiMap = [
    '💙', // Heart
    '❤️', // Red Heart
    '🤗', // Hugging Face
    '🙌', // Raising Hands
    '💚', // Green Heart
    '💛', // Yellow Heart
    '🧡', // Orange Heart
    '💜', // Purple Heart
  ];

  // Generate title from first few words of greeting_text
  const generateTitle = () => {
    const words = tango.greeting_text.split(' ').slice(0, 3);
    return toTitleCase(words.join(' '));
  };

  // Generate category from attribution or use default
  const generateCategory = () => {
    if (tango.attribution) {
      return tango.attribution;
    }
    return 'Hockey Universal Greeting';
  };

  return {
    id: tango.id,
    title: generateTitle(),
    emoji: emojiMap[index % emojiMap.length] || '💙',
    category: generateCategory(),
    shareTitle: generateTitle(),
    content: tango.greeting_text,
    filename: `tango-${tango.id}`,
  };
}

export default async function CaptainHeartPage() {
  // Fetch 8 greetings from Tango CMS
  const result = await fetchGreeting(8);

  // Debug: Uncomment to see what's coming from Tango CMS
  // console.log('Tango CMS Greetings:', JSON.stringify(result.data, null, 2));

  const hugMessages: HugMessage[] = result.success
    ? result.data.map((item, index) => mapTangoToHugMessage(item, index))
    : [];

  return <CaptainHeartClient hugMessages={hugMessages} />;
}
