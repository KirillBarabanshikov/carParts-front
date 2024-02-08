import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { persistedStore, store } from './store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from './theme';
import '@/shared/styles/index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);
