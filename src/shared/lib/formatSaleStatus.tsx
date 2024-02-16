import { TSaleStatus } from '@/entities/sale/model';

export function formatSaleStatus(status: TSaleStatus) {
  switch (status) {
    case 'STATUS_SALE':
      return 'Продано';

    case 'STATUS_CANCELED':
      return 'Отменено';

    case 'STATUS_WAIT':
      return 'В ожидании';
  }
}
