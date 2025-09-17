import { redirect } from 'next/navigation';

export default function CoachFuelPage() {
  // Redirect to the new Fuel Station page where Coach Fuel is now the nutrition expert
  redirect('/fuel-station');
}