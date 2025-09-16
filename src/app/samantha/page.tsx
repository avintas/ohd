import { redirect } from 'next/navigation';

export default function SamanthaPage() {
  // Redirect to the new Trivia Zone where Samantha is now the guide
  redirect('/trivia-zone');
}