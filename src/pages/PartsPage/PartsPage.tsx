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
import { PartCard, useGetPartsQuery } from '@/entities/part';
import { EditAddPartModal } from '@/features/part/editAddPart';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin } from '@/entities/session';

const PartsPage = () => {
  const { data: parts, isLoading } = useGetPartsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sortedParts, setSortedParts] = useState(parts);
  const isAdmin = useAppSelector(selectIsAdmin);

  useEffect(() => {
    setSortedParts(parts);
  }, [parts]);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();

    if (value === '') {
      setSortedParts(parts);
    } else {
      setSortedParts(parts?.filter((el) => el.code.toLowerCase().includes(value)));
    }
  };

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Запчасти</Heading>
        {isAdmin ?? <ResponsiveButton onClick={onOpen} />}
      </Flex>

      <CustomBox mb={'40px'} maxW={'500px'}>
        <Input placeholder={'Поиск по артикулу'} onChange={search} />
      </CustomBox>

      {sortedParts?.length && !isLoading ? (
        <Stack spacing={'4'}>
          {sortedParts.map((part) => {
            return <PartCard key={part.id} part={part} />;
          })}
        </Stack>
      ) : (
        <Center>
          {sortedParts ? (
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Запчасть не найдена
            </Text>
          ) : (
            <CircularProgress isIndeterminate color={'orange.500'} />
          )}
        </Center>
      )}

      <EditAddPartModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default PartsPage;
