import { clearSessionData } from '@/entities/session';
import { baseApi } from '@/shared/api';
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '@/shared/hooks';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearSessionData());
    dispatch(baseApi.util?.resetApiState());
  };

  return (
    <Button variant={'ghost'} onClick={logout} colorScheme={'red'}>
      Выход
    </Button>
  );
};
