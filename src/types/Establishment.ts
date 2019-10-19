import { Role } from '.';

interface Establishment {
  id: number;
  name: string;
  slug: string;
  address: string;
  complementaryAddress: string;
  zipCode: string;
  city: string;
  country: string;
  role?: Role;
  updatedAt: string;
}

export default Establishment;
