import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/app/store.ts';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as RootState).session;

      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
    },
  }),
  endpoints: () => ({}),
});
