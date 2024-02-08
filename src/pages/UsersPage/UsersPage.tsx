import { useGetUsersQuery, UserCard } from '@/entities/user';
import {
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { EditAddUserModal } from '@/features/user';
import { ResponsiveButton } from '@/shared/ui';

export const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Пользователи</Heading>
        <ResponsiveButton onClick={onOpen} />
      </Flex>

      {users && !isLoading ? (
        <Stack spacing={'4'}>
          {users.map((user) => {
            return <UserCard key={user.id} user={user}></UserCard>;
          })}
        </Stack>
      ) : (
        <Center>
          <CircularProgress isIndeterminate color={'orange.500'} />
        </Center>
      )}
      <EditAddUserModal isOpen={isOpen} onClose={onClose} isCentered />
    </Container>
  );
};
