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
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { EditAddSupplierModal } from '@/features/supplier/editAddSupplier';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin } from '@/entities/session';

interface ISupplierCardProps {
  supplier: ISupplier;
}

export const SupplierCard: FC<ISupplierCardProps> = ({ supplier }) => {
  const [deleteSupplier] = useDeleteSupplierMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <CustomBox px={'40px'} py={'24px'} position={'relative'}>
      <Heading mb={'20px'} size={'md'}>
        {supplier.title}
      </Heading>
      <HStack alignItems={'start'} spacing={'20px'} flexDir={{ base: 'column', lg: 'row' }}>
        <Stack flex={'1'}>
          <Text>Адрес: {supplier.address}</Text>
          <Text>
            Email:{' '}
            {<Link href={`mailto:${supplier.email}`}>{supplier.email}</Link> ?? (
              <Text as={'span'} color={'gray'}>
                Не указано
              </Text>
            )}
          </Text>
          <Text>
            Телефон:{' '}
            {<Link href={`tel:${supplier.phone}`}>{supplier.phone}</Link> ?? (
              <Text as={'span'} color={'gray'}>
                Не указано
              </Text>
            )}
          </Text>
        </Stack>
        <Box flex={'1'}>
          <Text mb={'8px'}>Список запчастей:</Text>
          <Stack>
            {supplier.parts.slice(0, 4).map((part, index) => (
              <Text key={index}>{part.code}</Text>
            ))}
          </Stack>
        </Box>
        {isAdmin && (
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
        )}
      </HStack>
      <EditAddSupplierModal isOpen={isOpen} onClose={onClose} supplier={supplier} />
    </CustomBox>
  );
};
