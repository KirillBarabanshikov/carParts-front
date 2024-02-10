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
import { PartCard, useGetPartsQuery } from '@/entities/part';
import { EditAddPartModal } from '@/features/part/editAddPart';

export const PartsPage = () => {
  const { data: parts, isLoading } = useGetPartsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Запчасти</Heading>
        <ResponsiveButton onClick={onOpen} />
      </Flex>

      {parts && !isLoading ? (
        <Stack spacing={'4'}>
          {parts.map((part) => {
            return <PartCard key={part.id} part={part} />;
          })}
        </Stack>
      ) : (
        <Center>
          <CircularProgress isIndeterminate color={'orange.500'} />
        </Center>
      )}

      <EditAddPartModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
