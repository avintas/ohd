import { redirect } from 'next/navigation';

export default function RefereeRileyPage() {
  // Redirect to the new Rule Book page where Referee Riley is now the official
  redirect('/rule-book');
}