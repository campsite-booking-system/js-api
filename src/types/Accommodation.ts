import { AccommodationCharacteristics, AccommodationServices } from './values';

interface Accommodation {
  id: number;
  name: string;
  description: string;
  characteristics?: {
    type: AccommodationCharacteristics;
    value: string;
  }[];
  services?: AccommodationServices[];
  updatedAt: string;
}

export default Accommodation;
