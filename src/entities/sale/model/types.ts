import { IPart } from '@/entities/part';

export interface ISale {
  id: number;
  name: string;
  phone: string;
  count: number;
  part_id: number;
  total: number;
  part: IPart;
  status: ISaleStatus;
}

interface ISaleStatus {
  id: number;
  title: 'STATUS_CANCELED' | 'STATUS_WAIT' | 'STATUS_SALE';
}
