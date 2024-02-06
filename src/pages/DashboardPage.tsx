import { FC } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { useAppDispatch } from '@/shared/hooks';
import { clearSessionData } from '@/entities/session';

export const DashboardPage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Heading>Main</Heading>
      <Button onClick={() => dispatch(clearSessionData())} colorScheme={'red'}>
        Выход
      </Button>
    </div>
  );
};
