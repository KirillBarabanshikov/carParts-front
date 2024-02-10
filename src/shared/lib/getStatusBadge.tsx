import { TOrderStatus } from '@/entities/order';
import { Badge } from '@chakra-ui/react';

export function getStatusBadge(status: TOrderStatus) {
  switch (status) {
    case 'STATUS_CREATED':
      return <Badge>Создан</Badge>;

    case 'STATUS_TRANSIT':
      return <Badge colorScheme={'yellow'}>В процессе</Badge>;

    case 'STATUS_DONE':
      return <Badge colorScheme={'green'}>Готов</Badge>;
  }
}
