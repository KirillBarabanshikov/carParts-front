import React from 'react';

export const DashboardPage = React.lazy(() => import('./DashboardPage/DashboardPage.tsx'));
export const LoginPage = React.lazy(() => import('./LoginPage/LoginPage.tsx'));
export const MainPage = React.lazy(() => import('./MainPage/MainPage.tsx'));
export const OrdersPage = React.lazy(() => import('./OrdersPage/OrdersPage.tsx'));
export const PartsPage = React.lazy(() => import('./PartsPage/PartsPage.tsx'));
export const SuppliersPage = React.lazy(() => import('./SuppliersPage/SuppliersPage.tsx'));
export const UsersPage = React.lazy(() => import('./UsersPage/UsersPage.tsx'));

export const SalesPage = React.lazy(() => import('./SalesPage/SalesPage.tsx'));
