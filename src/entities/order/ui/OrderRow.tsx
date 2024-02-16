import { FC } from 'react';
import { IOrder, useDeleteOrderMutation } from '@/entities/order';
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { getStatusBadge } from '@/shared/lib';
import { EditOrderStatusModal } from '@/features/order/editOrderStatus';

interface IOrderRowProps {
  order: IOrder;
}

export const OrderRow: FC<IOrderRowProps> = ({ order }) => {
  const [deleteOrder] = useDeleteOrderMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tr>
        <Td>{order.id}</Td>
        <Td>{getStatusBadge(order.status.title)}</Td>
        <Td>
          {order.parts[0].part.code} ({order.parts[0].count} шт.)
        </Td>
        <Td>{order.total}</Td>
        <Td isNumeric>
          <Menu>
            <MenuButton
              as={IconButton}
              variant={'ghost'}
              aria-label={''}
              icon={<Icon as={BiEdit} boxSize={'18px'} />}
            />
            <MenuList>
              <MenuItem onClick={onOpen}>Редактировать</MenuItem>
              <MenuItem onClick={async () => await deleteOrder(order.id)}>Удалить</MenuItem>
            </MenuList>
          </Menu>
        </Td>
      </Tr>
      <EditOrderStatusModal order={order} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
