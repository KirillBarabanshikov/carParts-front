import { baseApi, ORDER_TAG } from '@/shared/api';
import { IOrder } from '@/entities/order/model';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<IOrder[], void>({
      query: () => ({
        url: '/api/orders/',
      }),
      providesTags: [ORDER_TAG],
    }),

    createOrder: build.mutation({
      query: (body) => ({
        url: '/api/orders/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [ORDER_TAG],
    }),

    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/api/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ORDER_TAG],
    }),

    editOrder: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/orders/${id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: [ORDER_TAG],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useEditOrderMutation,
} = orderApi;
