import { baseApi } from '@/shared/api';
import { Session } from '@/entities/session/model';
import { RequestLoginBody, SessionDto } from '@/entities/session/api/types.ts';
import { mapSession } from '@/entities/session/lib';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: '/token',
        method: 'POST',
        body: new URLSearchParams({
          username: body.username,
          password: body.password,
        }),
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }),
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
  }),
});

export const { useLoginMutation } = sessionApi;
