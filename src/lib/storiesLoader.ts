import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface StoryMessage {
  id: string;
  title: string;
  emoji: string;
  category: string;
  shareTitle: string;
  content: string;
  filename: string;
}

export interface StoriesLayout {
  name: string;
  description: string;
  stories: string[];
  maxStories: number;
  theme: string;
}

export interface StoriesCurator {
  currentLayout: string;
  layouts: Record<string, StoriesLayout>;
  schedule: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    'special-dates': Record<string, string>;
  };
  fallback: string;
  lastUpdated: string;
}

export function getAllStoryMessages(): StoryMessage[] {
  const storiesDirectory = path.join(process.cwd(), 'content_stories');
  
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(storiesDirectory);
  const storyMessages: StoryMessage[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.md')) continue;

    const filePath = path.join(storiesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract metadata from the markdown content
    const lines = content.split('\n');
    let emoji = '';
    let category = '';
    let shareTitle = '';
    let messageContent = '';

    let contentStartIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('**Emoji:**')) {
        emoji = line.replace('**Emoji:**', '').trim();
      } else if (line.startsWith('**Category:**')) {
        category = line.replace('**Category:**', '').trim();
      } else if (line.startsWith('**Share Title:**')) {
        shareTitle = line.replace('**Share Title:**', '').trim();
      } else if (line === '' && emoji && category && shareTitle) {
        contentStartIndex = i + 1;
        break;
      }
    }

    // Get the actual message content (everything after the metadata)
    messageContent = lines.slice(contentStartIndex).join('\n').trim();

    // Extract title from the first line (# Title)
    const title = lines[0]?.replace('#', '').trim() || filename.replace('.md', '');

    storyMessages.push({
      id: filename.replace('.md', ''),
      title,
      emoji,
      category,
      shareTitle,
      content: messageContent,
      filename
    });
  }

  return storyMessages;
}

export function getStoryMessage(id: string): StoryMessage | null {
  const storyMessages = getAllStoryMessages();
  return storyMessages.find(story => story.id === id) || null;
}

// Load the stories curator configuration
export function loadStoriesCurator(): StoriesCurator | null {
  try {
    const curatorPath = path.join(process.cwd(), 'content_stories', 'stories-curator.json');
    
    if (!fs.existsSync(curatorPath)) {
      return null;
    }
    
    const curatorContent = fs.readFileSync(curatorPath, 'utf8');
    return JSON.parse(curatorContent) as StoriesCurator;
  } catch (error) {
    console.error('Error loading stories curator:', error);
    return null;
  }
}

// Determine the current layout based on date and schedule
export function determineCurrentLayout(curator: StoriesCurator | null): StoriesLayout | null {
  if (!curator) return null;
  
  const now = new Date();
  const today = now.toISOString().split('T')[0]; // YYYY-MM-DD format
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  
  // Check for special dates first
  if (curator.schedule['special-dates'][today]) {
    const specialLayoutName = curator.schedule['special-dates'][today];
    return curator.layouts[specialLayoutName] || curator.layouts[curator.fallback];
  }
  
  // Check if currentLayout is set to a specific layout (not 'auto')
  if (curator.currentLayout !== 'auto' && curator.layouts[curator.currentLayout]) {
    return curator.layouts[curator.currentLayout];
  }
  
  // Use day-based schedule
  const dayLayoutName = curator.schedule[dayName as keyof Omit<typeof curator.schedule, 'special-dates'>];
  if (dayLayoutName && curator.layouts[dayLayoutName]) {
    return curator.layouts[dayLayoutName];
  }
  
  // Fallback to default
  return curator.layouts[curator.fallback] || null;
}

// Get today's curated stories
export function getTodaysStories(): StoryMessage[] {
  const allStories = getAllStoryMessages();
  const curator = loadStoriesCurator();
  const layout = determineCurrentLayout(curator);
  
  if (!layout) {
    // No curator or layout found, return all stories
    return allStories;
  }
  
  // Filter stories based on the current layout
  const curatedStories = layout.stories
    .map(storyId => allStories.find(story => story.id === storyId))
    .filter((story): story is StoryMessage => story !== undefined);
  
  // Respect maxStories limit
  return curatedStories.slice(0, layout.maxStories);
}

// Get current layout info for display
export function getCurrentLayoutInfo(): { name: string; description: string; theme: string } | null {
  const curator = loadStoriesCurator();
  const layout = determineCurrentLayout(curator);
  
  if (!layout) return null;
  
  return {
    name: layout.name,
    description: layout.description,
    theme: layout.theme
  };
}
