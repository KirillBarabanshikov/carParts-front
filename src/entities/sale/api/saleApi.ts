import { baseApi, SALE_TAG } from '@/shared/api';
import { ISale } from '../model';

export const saleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSales: build.query<ISale[], void>({
      query: () => ({
        url: '/api/sales/',
      }),
      providesTags: [SALE_TAG],
    }),

    createSale: build.mutation({
      query: (body) => ({
        url: '/api/sales/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [SALE_TAG],
    }),

    deleteSale: build.mutation({
      query: (id) => ({
        url: `/api/sales/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [SALE_TAG],
    }),

    editSale: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/sales/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [SALE_TAG],
    }),
  }),
});

export const {
  useGetSalesQuery,
  useCreateSaleMutation,
  useDeleteSaleMutation,
  useEditSaleMutation,
} = saleApi;
