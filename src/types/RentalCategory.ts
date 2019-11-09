import { Rental } from '.';

interface RentalCategory {
  id: number;
  name: string;
  description: string;
  rentals?: Rental[];
}

export default RentalCategory;
