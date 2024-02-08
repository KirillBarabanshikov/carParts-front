import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { CustomBox } from '@/shared/ui';
import { useDeleteUserMutation, User } from '@/entities/user';
import { FC } from 'react';
import { formatUserRole } from '@/shared/lib';
import { EditAddUserModal } from '@/features/user';

interface IUserCardProps {
  user: User;
}

export const UserCard: FC<IUserCardProps> = ({ user }) => {
  const [deleteUser] = useDeleteUserMutation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <CustomBox p={'40px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading as={'h6'} size={'md'}>
              {user.login}
            </Heading>
            <Text pt='2' fontSize='md'>
              Роль: {formatUserRole(user.role.title)}
            </Text>
          </Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
              Действие
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen}>Редактировать</MenuItem>
              <MenuItem onClick={async () => await deleteUser(user.id)}>Удалить</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CustomBox>
      <EditAddUserModal isOpen={isOpen} onClose={onClose} isCentered user={user} />
    </>
  );
};
