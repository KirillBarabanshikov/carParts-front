import {
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { CustomBox } from '@/shared/ui';
import { SaleRow, useGetSalesQuery } from '@/entities/sale';
import { useEffect, useState } from 'react';

const filters = [
  { title: 'Все', value: '' },
  { title: 'В ожидании', value: 'STATUS_WAIT' },
  { title: 'Отменено', value: 'STATUS_CANCELED' },
  { title: 'Продано', value: 'STATUS_SALE' },
];

const SalesPage = () => {
  const { data: sales, isLoading } = useGetSalesQuery();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [sortedSales, setSortedSales] = useState(sales);

  useEffect(() => {
    if (selectedFilter) {
      setSortedSales(sales?.filter((order) => order.status.title === selectedFilter));
    } else {
      setSortedSales(sales);
    }
  }, [sales, selectedFilter]);

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Заявки</Heading>
      </Flex>

      <Flex mb={'40px'} alignItems={'center'} gap={'10px'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Статус:
        </Text>
        <HStack>
          {filters.map((filter) => (
            <Button
              key={filter.value}
              colorScheme={'orange'}
              variant={selectedFilter === filter.value ? 'solid' : 'outline'}
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.title}
            </Button>
          ))}
        </HStack>
      </Flex>

      {sortedSales && !isLoading ? (
        <CustomBox>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>статус</Th>
                  <Th>фио</Th>
                  <Th>телефон</Th>
                  <Th>запчасть</Th>
                  <Th>итого</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedSales.map((sale, index) => (
                  <SaleRow key={sale.id} sale={sale} index={index} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CustomBox>
      ) : (
        <Center>
          <CircularProgress isIndeterminate color={'orange.500'} />
        </Center>
      )}
    </Container>
  );
};

export default SalesPage;
