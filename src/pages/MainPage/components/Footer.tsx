import { Box, Container, Heading, HStack, Icon, IconButton, Link } from '@chakra-ui/react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { PiTelegramLogoThin, PiWhatsappLogoThin } from 'react-icons/pi';

export const Footer = () => {
  return (
    <Box as={'footer'} bg={'orange.500'} color={'white'}>
      <Container
        maxW={'1200px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={'100px'}
      >
        <Heading>CarParts</Heading>

        <HStack spacing={'8px'}>
          <Link href={'https://vk.com/'} target={'_blank'}>
            <IconButton
              aria-label={'social'}
              icon={<Icon as={SlSocialVkontakte} boxSize={'24px'} strokeWidth={'10px'} />}
            />
          </Link>
          <Link href={'https://telegram.org/'} target={'_blank'}>
            <IconButton
              aria-label={'social'}
              icon={<Icon as={PiTelegramLogoThin} boxSize={'24px'} strokeWidth={'10px'} />}
            />
          </Link>
          <Link href={'https://web.whatsapp.com/'} target={'_blank'}>
            <IconButton
              aria-label={'social'}
              icon={<Icon as={PiWhatsappLogoThin} boxSize={'24px'} strokeWidth={'10px'} />}
            />
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};
