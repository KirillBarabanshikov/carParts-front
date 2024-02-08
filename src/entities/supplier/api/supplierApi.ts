import { baseApi, SUPPLIER_TAG } from '@/shared/api';
import { ISupplier } from '@/entities/supplier';

export const supplierApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSuppliers: build.query<ISupplier[], void>({
      query: () => ({
        url: '/api/suppliers/',
      }),
      providesTags: [SUPPLIER_TAG],
    }),

    createSupplier: build.mutation({
      query: (body) => ({
        url: '/api/suppliers/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [SUPPLIER_TAG],
    }),

    deleteSupplier: build.mutation({
      query: (id) => ({
        url: `/api/suppliers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [SUPPLIER_TAG],
    }),

    editSupplier: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/suppliers/${id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: [SUPPLIER_TAG],
    }),
  }),
});

export const {
  useGetSuppliersQuery,
  useCreateSupplierMutation,
  useDeleteSupplierMutation,
  useEditSupplierMutation,
} = supplierApi;
