import { useGetUsersQuery } from '@/entities/user';
import { CircularProgress } from '@chakra-ui/react';

export const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  return (
    <div>
      {isLoading && <CircularProgress isIndeterminate color='green.300' />}
      {users && users.map((user) => <div key={user.id}>{user.login}</div>)}
    </div>
  );
};
