import { AccommodationCategory, Client, Role, RentalCategory, User } from '.';
import { PaymentMethods } from './values';
import EstablishmentToken from './EstablishmentToken';

interface Establishment {
  id: number;
  name: string;
  slug: string;
  address: string;
  complementaryAddress: string;
  zipCode: string;
  city: string;
  country: string;
  accommodations?: AccommodationCategory[];
  rentals?: RentalCategory[];
  clients?: Client[];
  paymentMethods?: PaymentMethods[];
  tokens?: EstablishmentToken[];
  users?: User[];
  role?: Role;
  updatedAt: string;
}

export default Establishment;
