import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MotivateMessage {
  id: string;
  title: string;
  emoji: string;
  category: string;
  shareTitle: string;
  content: string;
  filename: string;
}

export function getAllMotivateMessages(): MotivateMessage[] {
  const motivateDirectory = path.join(process.cwd(), 'content_motivate');
  
  if (!fs.existsSync(motivateDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(motivateDirectory);
  const motivateMessages: MotivateMessage[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.md')) continue;

    const filePath = path.join(motivateDirectory, filename);
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

    motivateMessages.push({
      id: filename.replace('.md', ''),
      title,
      emoji,
      category,
      shareTitle,
      content: messageContent,
      filename
    });
  }

  return motivateMessages;
}

export function getMotivateMessage(id: string): MotivateMessage | null {
  const motivateMessages = getAllMotivateMessages();
  return motivateMessages.find(message => message.id === id) || null;
}
