import { TOrderStatus } from '@/entities/order';

export function formatOrderStatus(status: TOrderStatus) {
  switch (status) {
    case 'STATUS_CREATED':
      return 'Создан';

    case 'STATUS_TRANSIT':
      return 'В процессе';

    case 'STATUS_DONE':
      return 'Готов';
  }
}
