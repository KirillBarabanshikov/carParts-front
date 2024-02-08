import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

interface ILayoutProps {
  sidebarSlot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ sidebarSlot }) => {
  const props = sidebarSlot
    ? {
        display: 'flex',
      }
    : {};

  return (
    <Box className={'wrapper'} {...props}>
      {sidebarSlot}
      <Box as={'main'} flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
