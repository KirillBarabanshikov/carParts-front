import { FC } from 'react';
import { CustomBox } from '@/shared/ui';
import { ISupplier, useDeleteSupplierMutation } from '@/entities/supplier';
import {
  Heading,
  Stack,
  Text,
  HStack,
  Box,
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { EditAddSupplierModal } from '@/features/supplier/editAddSupplier';

interface ISupplierCardProps {
  supplier: ISupplier;
}

export const SupplierCard: FC<ISupplierCardProps> = ({ supplier }) => {
  const [deleteSupplier] = useDeleteSupplierMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CustomBox px={'40px'} py={'24px'} position={'relative'}>
      <Heading mb={'20px'} size={'lg'}>
        {supplier.title}
      </Heading>
      <HStack alignItems={'start'}>
        <Stack flex={'1'}>
          <Text>Адрес: {supplier.address}</Text>
          <Text>
            Email:{' '}
            {supplier.email ?? (
              <Text as={'span'} color={'gray'}>
                Не указано
              </Text>
            )}
          </Text>
          <Text>
            Телефон:{' '}
            {supplier.phone ?? (
              <Text as={'span'} color={'gray'}>
                Не указано
              </Text>
            )}
          </Text>
        </Stack>
        <Box flex={'1'}>
          <Text mb={'8px'}>Список запчастей:</Text>
          <Stack>
            <Text>Делать 1</Text>
            <Text>Делать 1</Text>
            <Text>Делать 1</Text>
            <Text>Делать 1</Text>
          </Stack>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<Icon as={BiDotsVerticalRounded} boxSize={'20px'} />}
            position={'absolute'}
            top={'20px'}
            right={'20px'}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onOpen}>Редактировать</MenuItem>
            <MenuItem onClick={async () => await deleteSupplier(supplier.id)}>Удалить</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <EditAddSupplierModal isOpen={isOpen} onClose={onClose} supplier={supplier} />
    </CustomBox>
  );
};
