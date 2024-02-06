import { createSlice } from '@reduxjs/toolkit';
import { sessionApi } from '@/entities/session';
import { RootState } from '@/app/store.ts';

type SessionSliceState = {
  isAuth: boolean;
  accessToken?: string;
};

const initialState: SessionSliceState = {
  isAuth: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.isAuth = false;
      state.accessToken = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuth = true;
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export const selectIsAuth = (state: RootState) => state.session.isAuth;

export const { clearSessionData } = sessionSlice.actions;
