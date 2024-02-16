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
  useDisclosure,
} from '@chakra-ui/react';
import { CustomBox, ResponsiveButton } from '@/shared/ui';
import { OrderRow, useGetOrdersQuery } from '@/entities/order';
import { AddOrderModal } from '@/features/order/editAddOrder';
import { useEffect, useState } from 'react';

const filters = [
  { title: 'Все', value: '' },
  { title: 'Создан', value: 'STATUS_CREATED' },
  { title: 'В процессе', value: 'STATUS_TRANSIT' },
  { title: 'Готов', value: 'STATUS_DONE' },
];

const OrdersPage = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [sortedOrders, setSortedOrders] = useState(orders);

  useEffect(() => {
    if (selectedFilter) {
      setSortedOrders(orders?.filter((order) => order.status.title === selectedFilter));
    } else {
      setSortedOrders(orders);
    }
  }, [orders, selectedFilter]);

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Заказы</Heading>
        <ResponsiveButton onClick={onOpen} />
      </Flex>

      <Flex
        mb={'40px'}
        alignItems={{ base: 'start', lg: 'center' }}
        flexDir={{ base: 'column', lg: 'row' }}
        gap={'10px'}
      >
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Статус:
        </Text>
        <HStack flexWrap={'wrap'}>
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

      {sortedOrders && !isLoading ? (
        <CustomBox>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>статус</Th>
                  <Th>запчасть</Th>
                  <Th>итого</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedOrders.map((order, index) => (
                  <OrderRow order={order} index={index} />
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

      <AddOrderModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default OrdersPage;
