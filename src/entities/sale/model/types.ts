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

export interface ISaleStatus {
  id: number;
  title: TSaleStatus;
}

export type TSaleStatus = 'STATUS_CANCELED' | 'STATUS_WAIT' | 'STATUS_SALE';
