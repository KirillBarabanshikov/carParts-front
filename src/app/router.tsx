import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardPage, LoginPage } from '@/pages';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAuth } from '@/entities/session';
import { FC, PropsWithChildren } from 'react';

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) return <Navigate to={'/'} />;

  return children;
};

const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) return <Navigate to={'/login'} />;

  return children;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthGuard>
        <LoginPage />
      </AuthGuard>
    ),
  },
  {
    path: '/',
    element: (
      <GuestGuard>
        <DashboardPage />
      </GuestGuard>
    ),
  },
]);
