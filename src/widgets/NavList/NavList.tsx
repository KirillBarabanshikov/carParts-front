import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, VStack } from '@chakra-ui/react';
import { BiBarChartAlt2, BiIdCard, BiPackage, BiUser, BiWrench } from 'react-icons/bi';
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

export const NavList = () => {
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <VStack w={'100%'} mt={'40px'}>
      {navLinks.map((link) => {
        if (link.isAdmin && !isAdmin) return <Fragment key={link.path}></Fragment>;

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
  );
};
