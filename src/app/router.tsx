import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  DashboardPage,
  LoginPage,
  MainPage,
  OrdersPage,
  PartsPage,
  SalesPage,
  SuppliersPage,
  UsersPage,
} from '@/pages';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin, selectIsAuth } from '@/entities/session';
import { FC, PropsWithChildren, Suspense } from 'react';
import { EmptyLayout, BaseLayout } from '@/app/layouts';
import { Progress } from '@chakra-ui/react';

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) return <Navigate to={'/statistics'} />;

  return children;
};

const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) return <Navigate to={'/admin'} />;

  return children;
};

const UserGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAdmin = useAppSelector(selectIsAdmin);

  if (!isAdmin) return <Navigate to={'/statistics'} />;

  return children;
};

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Progress size='xs' isIndeterminate colorScheme={'orange'} />}>
        <MainPage />
      </Suspense>
    ),
    path: '/',
  },
  {
    element: (
      <AuthGuard>
        <EmptyLayout />
      </AuthGuard>
    ),
    children: [
      {
        element: <LoginPage />,
        path: '/admin',
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
        path: '/statistics',
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
        element: <SalesPage />,
        path: '/sales',
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
