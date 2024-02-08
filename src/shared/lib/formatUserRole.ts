import { Role } from '@/entities/user';

export function formatUserRole(role: Role) {
  switch (role) {
    case 'ROLE_ADMIN':
      return 'Администратор';
    case 'ROLE_USER':
      return 'Пользователь';
    default:
      return '';
  }
}
