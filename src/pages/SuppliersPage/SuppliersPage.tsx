import {
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CustomBox, ResponsiveButton } from '@/shared/ui';
import { SupplierCard, useGetSuppliersQuery } from '@/entities/supplier';
import { EditAddSupplierModal } from '@/features/supplier/editAddSupplier';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin } from '@/entities/session';

const SuppliersPage = () => {
  const { data: suppliers, isLoading } = useGetSuppliersQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sortedSuppliers, setSortedSuppliers] = useState(suppliers);
  const isAdmin = useAppSelector(selectIsAdmin);

  useEffect(() => {
    setSortedSuppliers(suppliers);
  }, [suppliers]);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();

    if (value === '') {
      setSortedSuppliers(suppliers);
    } else {
      setSortedSuppliers(suppliers?.filter((el) => el.title.toLowerCase().includes(value)));
    }
  };

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Поставщики</Heading>
        {isAdmin ?? <ResponsiveButton onClick={onOpen} />}
      </Flex>

      <CustomBox mb={'40px'} maxW={'500px'}>
        <Input placeholder={'Поиск по названию'} onChange={search} />
      </CustomBox>

      {sortedSuppliers?.length && !isLoading ? (
        <Stack spacing={'4'}>
          {sortedSuppliers.map((supplier) => {
            return <SupplierCard key={supplier.id} supplier={supplier} />;
          })}
        </Stack>
      ) : (
        <Center>
          {sortedSuppliers ? (
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Поставщик не найден
            </Text>
          ) : (
            <CircularProgress isIndeterminate color={'orange.500'} />
          )}
        </Center>
      )}

      <EditAddSupplierModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default SuppliersPage;
