import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FuelMessage {
  id: string;
  title: string;
  emoji: string;
  category: string;
  shareTitle: string;
  content: string;
  filename: string;
}

export function getAllFuelMessages(): FuelMessage[] {
  const fuelDirectory = path.join(process.cwd(), 'content_nutrition');
  
  if (!fs.existsSync(fuelDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(fuelDirectory);
  const fuelMessages: FuelMessage[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.md')) continue;

    const filePath = path.join(fuelDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);

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

    fuelMessages.push({
      id: filename.replace('.md', ''),
      title,
      emoji,
      category,
      shareTitle,
      content: messageContent,
      filename
    });
  }

  return fuelMessages;
}

export function getFuelMessage(id: string): FuelMessage | null {
  const fuelMessages = getAllFuelMessages();
  return fuelMessages.find(fuel => fuel.id === id) || null;
}
