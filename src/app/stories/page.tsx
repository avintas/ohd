import { fetchStats } from '@/lib/tango-api';
import StoriesClient from './StoriesClient';

interface Story {
  id: string;
  title: string;
  content: string;
  emoji: string;
  shareTitle: string;
}

// Helper function to convert text to Title Case
function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Map Tango CMS Stat to Story format
function mapTangoToStory(
  tango: {
    id: string;
    stat_text: string;
    stat_value: string;
    stat_category: string;
    theme?: string;
    category?: string;
    attribution?: string;
  },
  index: number
): Story {
  // Emoji mapping for stats (hockey-themed)
  const emojiMap = [
    '🏒', // Hockey Stick
    '🥅', // Net
    '⛸️', // Skates
    '🏆', // Trophy
    '⭐', // Star
    '🔥', // Fire
    '💪', // Strong
    '🎯', // Target
  ];

  // Generate title from stat_category, theme, or category
  const generateTitle = () => {
    if (tango.stat_category) {
      return toTitleCase(tango.stat_category);
    }
    if (tango.theme) {
      return toTitleCase(tango.theme);
    }
    if (tango.category) {
      return toTitleCase(tango.category);
    }
    // Use first few words of stat_text as fallback
    const words = tango.stat_text.split(' ').slice(0, 3);
    return toTitleCase(words.join(' '));
  };

  // Format content: stat_text + stat_value if available
  const generateContent = () => {
    let content = tango.stat_text;
    if (tango.stat_value) {
      content = `${tango.stat_text} ${tango.stat_value}`;
    }
    if (tango.attribution) {
      content = `${content} — ${tango.attribution}`;
    }
    return content;
  };

  return {
    id: tango.id,
    title: generateTitle(),
    content: generateContent(),
    emoji: emojiMap[index % emojiMap.length] || '🏒',
    shareTitle: generateTitle(),
  };
}

export default async function StoriesPage() {
  // Fetch 8 stats from Tango CMS for Hockey Lore
  const result = await fetchStats(8);

  // Debug: Uncomment to see what's coming from Tango CMS
  // console.log('Tango CMS Stats:', JSON.stringify(result.data, null, 2));

  const stories: Story[] = result.success
    ? result.data.map((item, index) => mapTangoToStory(item, index))
    : [];

  return <StoriesClient stories={stories} />;
}
