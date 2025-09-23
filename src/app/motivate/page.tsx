import { getAllMotivateMessages } from '@/lib/motivateLoader';
import MotivateClient from './MotivateClient';

export default function MotivatePage() {
  const motivateMessages = getAllMotivateMessages();

  return <MotivateClient motivateMessages={motivateMessages} />;
}

