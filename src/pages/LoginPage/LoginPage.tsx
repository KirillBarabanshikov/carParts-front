import { FC } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { LoginForm } from '@/features/login';
import { CustomBox } from '@/shared/ui';

export const LoginPage: FC = () => {
  return (
    <Container h={'100vh'} display={'flex'} alignItems={'center'}>
      <CustomBox p={'40px'} width={'100%'}>
        <Heading mb={'32px'}>Вход в CarParts</Heading>
        <LoginForm />
      </CustomBox>
    </Container>
  );
};
