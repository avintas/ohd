import { redirect } from 'next/navigation';

export default function BroadcasterMikePage() {
  // Redirect to the new Behind the Mic page where Don "The Mic" is now the broadcaster
  redirect('/behind-the-mic');
}