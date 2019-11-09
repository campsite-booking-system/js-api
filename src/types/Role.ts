import { Roles, Permissions } from './values';

interface Role {
  type: Roles;
  permissions?: Permissions[];
}

export default Role;
