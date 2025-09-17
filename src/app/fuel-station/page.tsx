import { getAllFuelMessages } from '@/lib/fuelLoader';
import FuelStationClient from './FuelStationClient';

export default function FuelStationPage() {
  const fuelMessages = getAllFuelMessages();

  return <FuelStationClient fuelMessages={fuelMessages} />;
}
