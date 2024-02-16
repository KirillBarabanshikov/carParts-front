import { Badge } from '@chakra-ui/react';
import { TSaleStatus } from '@/entities/sale/model';

export const getSaleStatusBadge = (status: TSaleStatus) => {
  switch (status) {
    case 'STATUS_WAIT':
      return <Badge>В ожидании</Badge>;

    case 'STATUS_CANCELED':
      return <Badge colorScheme={'red'}>Отменено</Badge>;

    case 'STATUS_SALE':
      return <Badge colorScheme={'green'}>Продано</Badge>;
  }
};
