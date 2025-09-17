import { getAllMotivateMessages } from '@/lib/motivateLoader';
import IronMikeClient from './IronMikeClient';

export default function IronMikePage() {
  const motivateMessages = getAllMotivateMessages();

  return <IronMikeClient motivateMessages={motivateMessages} />;
}