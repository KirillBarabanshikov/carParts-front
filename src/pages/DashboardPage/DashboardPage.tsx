import { FC } from 'react';
import { Box, Container, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
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
import { BiIdCard, BiPackage, BiSpreadsheet, BiWrench } from 'react-icons/bi';
import { useGetSalesStatusesQuery } from '@/entities/sale';
import { useGetOrdersQuery } from '@/entities/order';
import { useGetSuppliersQuery } from '@/entities/supplier';
import { useGetPartsQuery } from '@/entities/part';
import { dateFormat } from '@/shared/lib';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  parsing: {
    xAxisKey: 'count',
    yAxisKey: 'count',
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Статистика',
    },
    tooltip: {
      displayColors: false,

      callbacks: {
        label: (item: any) => {
          const label = item.dataset.label;
          const data = item.dataset.data[item.dataIndex];
          return `${label}: ${data.count}`;
        },
        footer: (item: any) => {
          const data = item[0].dataset.data[item[0].dataIndex];
          return `Итого: ${data.total}₽`;
        },
      },
    },
  },
};

const DashboardPage: FC = () => {
  const { data: sales } = useGetSalesStatusesQuery();
  const { data: orders } = useGetOrdersQuery();
  const { data: suppliers } = useGetSuppliersQuery();
  const { data: parts } = useGetPartsQuery();
  const { data: statistics } = useGetStatisticsQuery();

  const data = {
    labels: statistics?.sales.map((sale) => dateFormat(sale.date)),
    datasets: [
      {
        label: 'Заявки',
        data: statistics?.sales,
        backgroundColor: '#4299E1',
      },
      {
        label: 'Заказы',
        data: statistics?.orders,
        backgroundColor: '#38B2AC',
      },
    ],
  };

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Статистика</Heading>
      </Flex>

      <HStack spacing={'24px'} mb={'24px'} flexDir={{ base: 'column', lg: 'row' }}>
        <CustomBox flex={'1'} px={'24px'} py={'32px'} width={'100%'}>
          <Flex alignItems={'center'} gap={'24px'}>
            <Icon as={BiSpreadsheet} boxSize={'60px'} color={'orange.500'} />
            <Box>
              <Text fontSize={'24px'} fontWeight={'bold'}>
                {sales?.length}
              </Text>
              <Text fontSize={'16px'} fontWeight={'bold'} color={'gray.500'}>
                Заявки
              </Text>
            </Box>
          </Flex>
        </CustomBox>
        <CustomBox flex={'1'} px={'24px'} py={'32px'} width={'100%'}>
          <Flex alignItems={'center'} gap={'24px'}>
            <Icon as={BiPackage} boxSize={'60px'} color={'orange.500'} />
            <Box>
              <Text fontSize={'24px'} fontWeight={'bold'}>
                {orders?.length}
              </Text>
              <Text fontSize={'16px'} fontWeight={'bold'} color={'gray.500'}>
                Заказы
              </Text>
            </Box>
          </Flex>
        </CustomBox>
        <CustomBox flex={'1'} px={'24px'} py={'32px'} width={'100%'}>
          <Flex alignItems={'center'} gap={'24px'}>
            <Icon as={BiIdCard} boxSize={'60px'} color={'orange.500'} />
            <Box>
              <Text fontSize={'24px'} fontWeight={'bold'}>
                {suppliers?.length}
              </Text>
              <Text fontSize={'16px'} fontWeight={'bold'} color={'gray.500'}>
                Поставщики
              </Text>
            </Box>
          </Flex>
        </CustomBox>
        <CustomBox flex={'1'} px={'24px'} py={'32px'} width={'100%'}>
          <Flex alignItems={'center'} gap={'24px'}>
            <Icon as={BiWrench} boxSize={'60px'} color={'orange.500'} />
            <Box>
              <Text fontSize={'24px'} fontWeight={'bold'}>
                {parts?.length}
              </Text>
              <Text fontSize={'16px'} fontWeight={'bold'} color={'gray.500'}>
                Запчасти
              </Text>
            </Box>
          </Flex>
        </CustomBox>
      </HStack>

      <CustomBox p={'24px'} height={{ base: '500px', lg: '650px' }}>
        <Bar options={options} data={data} />
      </CustomBox>
    </Container>
  );
};

export default DashboardPage;
