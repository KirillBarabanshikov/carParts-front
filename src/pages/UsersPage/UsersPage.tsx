import { useGetUsersQuery, UserCard } from '@/entities/user';
import {
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { EditAddUserModal } from '@/features/user';

export const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'8xl'} py={'24px'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'40px'}>
        <Heading>Пользователи</Heading>
        <Button
          onClick={onOpen}
          colorScheme={'orange'}
          leftIcon={<Icon as={BiPlus} boxSize={'20px'} />}
        >
          Добавить
        </Button>
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
