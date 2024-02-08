import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardPage, LoginPage, OrdersPage, PartsPage, SuppliersPage, UsersPage } from '@/pages';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin, selectIsAuth } from '@/entities/session';
import { FC, PropsWithChildren } from 'react';
import { EmptyLayout, BaseLayout } from '@/app/layouts';

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

const UserGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAdmin = useAppSelector(selectIsAdmin);

  if (!isAdmin) return <Navigate to={'/'} />;

  return children;
};

export const router = createBrowserRouter([
  {
    element: (
      <AuthGuard>
        <EmptyLayout />
      </AuthGuard>
    ),
    children: [
      {
        element: <LoginPage />,
        path: '/login',
      },
    ],
  },
  {
    element: (
      <GuestGuard>
        <BaseLayout />
      </GuestGuard>
    ),
    children: [
      {
        element: <DashboardPage />,
        path: '/',
      },
      {
        element: <OrdersPage />,
        path: '/orders',
      },
      {
        element: <SuppliersPage />,
        path: '/suppliers',
      },
      {
        element: <PartsPage />,
        path: '/parts',
      },
      {
        element: (
          <UserGuard>
            <UsersPage />
          </UserGuard>
        ),
        path: '/users',
      },
    ],
  },
]);
