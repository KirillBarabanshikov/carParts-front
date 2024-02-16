import { FC } from 'react';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { useGetStatisticsQuery } from '@/entities/statistics';

const DashboardPage: FC = () => {
  const { data } = useGetStatisticsQuery();

  console.log(data);

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Статистика</Heading>
      </Flex>
    </Container>
  );
};

export default DashboardPage;
