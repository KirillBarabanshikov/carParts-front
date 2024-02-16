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
} from '@chakra-ui/react';
import { CustomBox, ResponsiveButton } from '@/shared/ui';
import { SaleRow, useGetSalesQuery } from '@/entities/sale';

const SalesPage = () => {
  const { data: sales, isLoading } = useGetSalesQuery();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Заявки</Heading>
        <ResponsiveButton onClick={() => {}} />
      </Flex>

      {sales && !isLoading ? (
        <CustomBox>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>заявка №</Th>
                  <Th>статус</Th>
                  <Th>фио</Th>
                  <Th>телефон</Th>
                  <Th>артикул запчасти</Th>
                  <Th>итого</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {sales.map((sale) => (
                  <SaleRow key={sale.id} sale={sale} />
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
