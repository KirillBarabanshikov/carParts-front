import { baseApi } from '@/shared/api';
import { IStatistics } from '../model';

export const statisticsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStatistics: build.query<IStatistics, void>({
      query: () => ({
        url: '/api/statistics/',
      }),
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticsApi;
