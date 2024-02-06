import { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { LoginForm } from '@/features/login';

export const LoginPage: FC = () => {
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} height={'100%'}>
      <Heading mb={'32px'}>Вход в систему</Heading>
      <LoginForm />
    </Flex>
  );
};
