import { baseApi } from '@/shared/api';
import { User } from '../model/';

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
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetCurrentUserQuery } = userApi;
