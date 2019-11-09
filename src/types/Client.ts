import Booking from './Booking';

interface Client {
  id: number;
  civility: string;
  name: string;
  bookings?: Booking[];
  updatedAt: string;
}

export default Client;
