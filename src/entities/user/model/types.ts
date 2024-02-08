export interface User {
  id: number;
  login: string;
  role: UserRole;
}

interface UserRole {
  id: number;
  title: Role;
}

export type Role = 'ROLE_ADMIN' | 'ROLE_USER';
