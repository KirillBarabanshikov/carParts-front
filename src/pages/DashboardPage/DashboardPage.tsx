import { FC } from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';

export const DashboardPage: FC = () => {
  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Статистика</Heading>
      </Flex>
    </Container>
  );
};
