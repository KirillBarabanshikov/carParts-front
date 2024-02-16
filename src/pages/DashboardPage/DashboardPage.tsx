import { FC } from 'react';
import { Container, Flex, Heading, HStack } from '@chakra-ui/react';
import { useGetStatisticsQuery } from '@/entities/statistics';
import { CustomBox } from '@/shared/ui';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Статистика',
    },
  },
};

const DashboardPage: FC = () => {
  const { data: statistics } = useGetStatisticsQuery();

  const data = {
    labels: statistics?.sales.map((sale) => sale.date),
    datasets: [
      {
        label: 'Заявки',
        data: statistics?.sales.map((sale) => sale.count),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Заказы',
        data: statistics?.orders.map((order) => order.count),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Статистика</Heading>
      </Flex>
      <HStack spacing={'24px'} mb={'24px'}>
        <CustomBox flex={'1'} height={'120px'}></CustomBox>
        <CustomBox flex={'1'} height={'120px'}></CustomBox>
        <CustomBox flex={'1'} height={'120px'}></CustomBox>
        <CustomBox flex={'1'} height={'120px'}></CustomBox>
      </HStack>
      <CustomBox p={'24px'}>
        <Bar options={options} data={data} />
      </CustomBox>
    </Container>
  );
};

export default DashboardPage;
