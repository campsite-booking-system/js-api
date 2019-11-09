import { Accommodation } from '.';

interface AccommodationCategory {
  id: number;
  name: string;
  description: string;
  accommodations?: Accommodation[];
}

export default AccommodationCategory;
