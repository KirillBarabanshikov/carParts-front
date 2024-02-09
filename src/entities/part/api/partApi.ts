import { baseApi, PART_TAG } from '@/shared/api';
import { IPart } from '@/entities/part';

export const partApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getParts: build.query<IPart[], void>({
      query: () => ({
        url: '/api/parts/',
      }),
      providesTags: [PART_TAG],
    }),

    createPart: build.mutation({
      query: (body) => ({
        url: '/api/parts/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [PART_TAG],
    }),

    deletePart: build.mutation({
      query: (id) => ({
        url: `/api/parts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [PART_TAG],
    }),

    editPart: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/parts/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [PART_TAG],
    }),
  }),
});

export const {
  useGetPartsQuery,
  useCreatePartMutation,
  useDeletePartMutation,
  useEditPartMutation,
} = partApi;
