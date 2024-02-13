import {
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { CustomBox, ResponsiveButton } from '@/shared/ui';
import { OrderRow, useGetOrdersQuery } from '@/entities/order';
import { AddOrderModal } from '@/features/order/editAddOrder';

const OrdersPage = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Заказы</Heading>
        <ResponsiveButton onClick={onOpen} />
      </Flex>

      {orders && !isLoading ? (
        <CustomBox>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>заказ №</Th>
                  <Th>статус</Th>
                  <Th>запчасти</Th>
                  <Th>итого</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {orders.map((order) => (
                  <OrderRow order={order} />
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
