import { Accommodation, Client, Rental, Payment } from '.';

interface Booking {
  id: number;
  startDate: string;
  endDate: string;
  client: Client;
  accommodation?: Accommodation;
  rentals?: Rental[];
  payments?: Payment[];
  updatedAt: string;
}

export default Booking;
