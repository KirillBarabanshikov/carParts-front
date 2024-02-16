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
} from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';

interface ISaleRowProps {
  sale: ISale;
}

export const SaleRow: FC<ISaleRowProps> = ({ sale }) => {
  const [deleteSale] = useDeleteSaleMutation();

  return (
    <Tr>
      <Td>{sale.id}</Td>
      <Td>{sale.status.title}</Td>
      <Td>{sale.name}</Td>
      <Td>
        <Link href={`tel:${sale.phone}`}>{sale.phone}</Link>
      </Td>
      <Td>{sale.part.code}</Td>
      <Td>{sale.total}</Td>
      <Td isNumeric>
        <Menu>
          <MenuButton
            as={IconButton}
            variant={'ghost'}
            aria-label={''}
            icon={<Icon as={BiEdit} boxSize={'18px'} />}
          />
          <MenuList>
            <MenuItem onClick={() => {}}>Редактировать</MenuItem>
            <MenuItem onClick={async () => await deleteSale(sale.id)}>Удалить</MenuItem>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
};
