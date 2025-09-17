import { getAllStoryMessages } from '@/lib/storiesLoader';
import BehindTheMicClient from './BehindTheMicClient';

export default function BehindTheMicPage() {
  const storyMessages = getAllStoryMessages();

  return <BehindTheMicClient storyMessages={storyMessages} />;
}
