import { Role } from '.';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role?: Role;
}

export default User;
