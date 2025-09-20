import { getStoriesData } from '@/lib/storiesLoader';
import StoriesClient from './StoriesClient';

export default function StoriesPage() {
  const stories = getStoriesData();

  return <StoriesClient stories={stories} />;
}
