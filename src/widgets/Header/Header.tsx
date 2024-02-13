import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { LogoutButton } from '@/features/logout';
import { NavList } from '../NavList';
import { useEffect } from 'react';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Box
      as={'header'}
      background={'gray.50'}
      borderBottomWidth={'1px'}
      borderBottomColor={'gray.200'}
      minH={'50px'}
      position={'sticky'}
      top={'0'}
      zIndex={200}
      display={'flex'}
      alignItems={'center'}
      px={'8px'}
    >
      <IconButton
        aria-label={'menu'}
        icon={<BiMenu size={'24px'} />}
        variant={'ghost'}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Link to={'/statistics'}>
              <Heading as={'h4'} size={'lg'} color={'orange.500'} textAlign={'center'}>
                CarParts
              </Heading>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <NavList />
          </DrawerBody>
          <DrawerFooter justifyContent={'center'}>
            <LogoutButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
