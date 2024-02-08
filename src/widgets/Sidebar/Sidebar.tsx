import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LogoutButton } from '@/features/logout';
import { NavList } from '../NavList';

export const Sidebar: FC = () => {
  return (
    <Box
      as={'aside'}
      background={'gray.50'}
      borderRightWidth={'1px'}
      borderRightColor={'gray.200'}
      minW={'270px'}
      px={'20px'}
      py={'24px'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      position={'sticky'}
      top={'0'}
      height={'100vh'}
    >
      <Box>
        <Link to={'/'}>
          <Heading as={'h4'} size={'lg'} color={'orange.500'} textAlign={'center'}>
            CarParts
          </Heading>
        </Link>
        <NavList />
      </Box>

      <LogoutButton />
    </Box>
  );
};
