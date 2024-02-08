import { createSlice } from '@reduxjs/toolkit';
import { sessionApi } from '@/entities/session';
import { RootState } from '@/app/store.ts';
import { User, userApi } from '@/entities/user';

type SessionSliceState = {
  isAuth: boolean;
  accessToken?: string;
  isAdmin?: boolean;
  user?: User;
};

const initialState: SessionSliceState = {
  isAuth: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuth = true;
        state.accessToken = payload.accessToken;
      },
    );
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.user = payload;
        state.isAdmin = payload.role.title === 'ROLE_ADMIN';
      },
    );
  },
});

export const selectIsAuth = (state: RootState) => state.session.isAuth && !!state.session.user;
export const selectIsAdmin = (state: RootState) => state.session.isAdmin;

export const selectSessionUser = (state: RootState) => state.session.user;

export const { clearSessionData } = sessionSlice.actions;
