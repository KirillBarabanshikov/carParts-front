import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const rtkQueryErrorLogger: Middleware = () => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    toast({
      title: String(action.payload.data?.detail ?? 'Error'),
      status: 'error',
    });
  }

  return next(action);
};
