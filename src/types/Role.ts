import { PermissionType, RoleType } from '.';

interface User {
  type: RoleType;
  permissions: PermissionType[];
}

export default User;
