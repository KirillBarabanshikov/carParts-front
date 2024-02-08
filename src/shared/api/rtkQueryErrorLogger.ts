import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const rtkQueryErrorLogger: Middleware = () => (next) => (action: any) => {
  console.log(action);
  if (isRejectedWithValue(action)) {
    toast({
      title: String(action.payload.data.detail),
      status: 'error',
    });
  }

  return next(action);
};
