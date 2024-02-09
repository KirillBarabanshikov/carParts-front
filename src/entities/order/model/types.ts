import { IPart } from '@/entities/part';

export interface IOrder {
  id: number;
  total: number;
  status: IOrderStatus;
  parts: IOrderPart[];
}

export interface IOrderStatus {
  id: number;
  title: string;
}

export interface IOrderPart {
  id: number;
  count: number;
  part_id: number;
  total: number;
  part: IPart;
}
