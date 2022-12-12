export enum UserType {
  'Admin',
  'Staff',
  'Common',
}

export interface User {
  username: string;
  name: string;
  last_name: string;
  email: string;
  is_active: Boolean;
  user_type: UserType;
}
