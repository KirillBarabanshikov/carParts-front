import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/app/store.ts';
import { ORDER_TAG, PART_TAG, SUPPLIER_TAG, USER_TAG } from './tags.ts';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: [USER_TAG, SUPPLIER_TAG, PART_TAG, ORDER_TAG],
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
