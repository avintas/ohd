import { getAllHugMessages } from '@/lib/hugLoader';
import CaptainHeartClient from './CaptainHeartClient';

export default function CaptainHeartPage() {
  const hugMessages = getAllHugMessages();

  return <CaptainHeartClient hugMessages={hugMessages} />;
}