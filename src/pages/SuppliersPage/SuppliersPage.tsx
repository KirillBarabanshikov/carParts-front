import {
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { ResponsiveButton } from '@/shared/ui';
import { SupplierCard, useGetSuppliersQuery } from '@/entities/supplier';
import { EditAddSupplierModal } from '@/features/supplier/editAddSupplier';

export const SuppliersPage = () => {
  const { data: suppliers, isLoading } = useGetSuppliersQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Поставщики</Heading>
        <ResponsiveButton onClick={onOpen} />
      </Flex>

      {suppliers && !isLoading ? (
        <Stack spacing={'4'}>
          {suppliers.map((supplier) => {
            return <SupplierCard key={supplier.id} supplier={supplier} />;
          })}
        </Stack>
      ) : (
        <Center>
          <CircularProgress isIndeterminate color={'orange.500'} />
        </Center>
      )}

      <EditAddSupplierModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
