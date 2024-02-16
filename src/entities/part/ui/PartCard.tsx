import { CustomBox } from '@/shared/ui';
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FC } from 'react';
import { IPart, useDeletePartMutation } from '@/entities/part';
import { EditAddPartModal } from '@/features/part/editAddPart';

interface IPartCardProps {
  part: IPart;
}

export const PartCard: FC<IPartCardProps> = ({ part }) => {
  const [deletePart] = useDeletePartMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CustomBox px={'40px'} py={'24px'} position={'relative'}>
      <Heading mb={'20px'} size={'md'}>
        {part.title} ({part.code})
      </Heading>
      <HStack alignItems={'start'} flexDir={{ base: 'column', lg: 'row' }}>
        <Stack flex={'1'}>
          <Text>Цена поставщика: {part.price}₽</Text>
          <Text>Цена продажи: {part.sale_price}₽</Text>
        </Stack>
        <Box flex={'1'}>
          <Text>Поставщик:</Text>
          <Text>{part.supplier.title}</Text>
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
            <MenuItem onClick={async () => await deletePart(part.id)}>Удалить</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <EditAddPartModal isOpen={isOpen} onClose={onClose} part={part} />
    </CustomBox>
  );
};
