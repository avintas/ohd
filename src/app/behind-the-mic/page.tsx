import { getTodaysStories, getCurrentLayoutInfo } from '@/lib/storiesLoader';
import BehindTheMicClient from './BehindTheMicClient';

export default function BehindTheMicPage() {
  const storyMessages = getTodaysStories();
  const layoutInfo = getCurrentLayoutInfo();

  return <BehindTheMicClient storyMessages={storyMessages} layoutInfo={layoutInfo} />;
}
