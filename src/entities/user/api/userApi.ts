import { baseApi, USER_TAG } from '@/shared/api';
import { User, UserRole } from '../model/';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<User, void>({
      query: () => ({
        url: '/api/users/current',
      }),
    }),

    getUsers: build.query<User[], void>({
      query: () => ({
        url: '/api/users',
      }),
      providesTags: [USER_TAG],
    }),

    getUserRoles: build.query<UserRole[], void>({
      query: () => ({
        url: '/api/roles',
      }),
    }),

    createUser: build.mutation({
      query: (body) => ({
        url: '/api/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [USER_TAG],
    }),

    editUser: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/users/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetCurrentUserQuery,
  useGetUserRolesQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
} = userApi;
