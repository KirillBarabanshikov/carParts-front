export interface IStatistics {
  orders: TStatistics[];
  sales: TStatistics[];
}

type TStatistics = {
  date: string;
  count: number;
  total: number;
};
