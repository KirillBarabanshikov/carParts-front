import { IPart } from '@/entities/part';

export interface ISupplier {
  id: number;
  title: string;
  address: string;
  email?: string;
  phone?: string;
  parts: Omit<IPart, 'supplier'>[];
}
