import { ISale, useDeleteSaleMutation } from '@/entities/sale';
import { FC } from 'react';
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { getSaleStatusBadge } from '@/shared/lib';
import { EditSaleStatusModal } from '@/features/sale/editSaleStatus';

interface ISaleRowProps {
  sale: ISale;
  index: number;
}

export const SaleRow: FC<ISaleRowProps> = ({ sale, index }) => {
  const [deleteSale] = useDeleteSaleMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tr>
        <Td>{++index}</Td>
        <Td>{getSaleStatusBadge(sale.status.title)}</Td>
        <Td>{sale.name}</Td>
        <Td>
          <Link href={`tel:${sale.phone}`}>{sale.phone}</Link>
        </Td>
        <Td>
          {sale.part.code} ({sale.count} шт.)
        </Td>
        <Td>{sale.total}₽</Td>
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
              <MenuItem onClick={async () => await deleteSale(sale.id)}>Удалить</MenuItem>
            </MenuList>
          </Menu>
        </Td>
      </Tr>
      <EditSaleStatusModal sale={sale} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
