import { FC } from 'react';
import { Box, Button, Heading, Icon, VStack } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { BiBarChartAlt2, BiUser, BiPackage, BiWrench, BiIdCard } from 'react-icons/bi';
import { LogoutButton } from '@/features/logout';
import { useAppSelector } from '@/shared/hooks';
import { selectIsAdmin } from '@/entities/session';

const navLinks = [
  {
    title: 'Статистика',
    path: '/',
    icon: BiBarChartAlt2,
  },
  {
    title: 'Заказы',
    path: '/orders',
    icon: BiPackage,
  },
  {
    title: 'Поставщики',
    path: '/suppliers',
    icon: BiIdCard,
  },
  {
    title: 'Запчасти',
    path: '/parts',
    icon: BiWrench,
  },
  {
    title: 'Пользователи',
    path: '/users',
    icon: BiUser,
    isAdmin: true,
  },
];

export const Sidebar: FC = () => {
  const isAdmin = useAppSelector(selectIsAdmin);

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
    >
      <Box>
        <Link to={'/'}>
          <Heading as={'h4'} size={'lg'} color={'orange.500'} textAlign={'center'}>
            CarParts
          </Heading>
        </Link>

        <VStack w={'100%'} mt={'40px'}>
          {navLinks.map((link) => {
            if (link.isAdmin && !isAdmin) return <></>;

            return (
              <NavLink key={link.path} to={link.path} style={{ width: '100%' }}>
                {({ isActive }) => (
                  <Button
                    variant={'ghost'}
                    colorScheme={isActive ? 'orange' : 'gray'}
                    isActive={isActive}
                    leftIcon={<Icon as={link.icon} boxSize={'20px'} />}
                    w={'100%'}
                    justifyContent={'start'}
                  >
                    {link.title}
                  </Button>
                )}
              </NavLink>
            );
          })}
        </VStack>
      </Box>

      <LogoutButton />
    </Box>
  );
};
