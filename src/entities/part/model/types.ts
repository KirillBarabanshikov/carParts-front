import { ISupplier } from '@/entities/supplier';

export interface IPart {
  id: number;
  title: string;
  price: number;
  code: string;
  supplier_id: string;
  supplier: Omit<ISupplier, 'parts'>;
  sale_price: number;
}
