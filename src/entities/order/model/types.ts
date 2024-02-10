import { IPart } from '@/entities/part';

export interface IOrder {
  id: number;
  total: number;
  status: IOrderStatus;
  parts: IOrderPart[];
}

export interface IOrderStatus {
  id: number;
  title: TOrderStatus;
}

export interface IOrderPart {
  id: number;
  count: number;
  part_id: number;
  total: number;
  part: IPart;
}

export type TOrderStatus = 'STATUS_CREATED' | 'STATUS_TRANSIT' | 'STATUS_DONE';
