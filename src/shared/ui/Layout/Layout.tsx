import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

interface ILayoutProps {
  slot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ slot }) => {
  return (
    <Box className={'wrapper'} display={'flex'} flexDir={{ base: 'column', lg: 'row' }}>
      {slot}
      <Box as={'main'} flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
