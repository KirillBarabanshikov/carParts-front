import { FC } from 'react';
import { Box, Button, Container, Flex, Heading, Link, Image } from '@chakra-ui/react';
import car from '@/shared/assets/images/car.png';
import bgImage from '@/shared/assets/images/bgImage.png';

interface IHeaderProps {
  scrollToForm: () => void;
}

export const Header: FC<IHeaderProps> = ({ scrollToForm }) => {
  return (
    <Box
      as={'header'}
      minH={'700px'}
      bgImage={bgImage}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      <Container maxW={'1200px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} py={'45px'}>
          <Heading color={'white'}>CarParts</Heading>
          <Link
            href={'tel:+79158167454'}
            color={'white'}
            fontSize={'18px'}
            _hover={{ color: 'orange.500' }}
          >
            +7 (915) 816 74 54
          </Link>
        </Flex>
        <Box mt={'60px'} position={'relative'} color={'white'}>
          <Box display={'flex'} flexDir={'column'} alignItems={{ base: 'center', lg: 'start' }}>
            <Heading
              as={'h2'}
              fontSize={{ base: '54px', lg: '72px' }}
              textTransform={'uppercase'}
              mb={'10px'}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Лучшее у нас
            </Heading>
            <Heading
              as={'h3'}
              fontSize={{ base: '24px', lg: '36px' }}
              textTransform={'uppercase'}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Закажи себе и наяривай только так
            </Heading>
            <Button
              mt={{ base: '80px' }}
              mb={{ base: '80px', lg: 'initial' }}
              width={{ base: '100%', lg: 'initial' }}
              maxW={{ sm: '480px' }}
              colorScheme={'orange'}
              size={'lg'}
              onClick={scrollToForm}
            >
              Оставить заявку
            </Button>
          </Box>
          <Image
            src={car}
            position={{ base: 'static', lg: 'absolute' }}
            maxW={{ base: '100%', md: '80%', lg: '80%' }}
            right={'0'}
            bottom={'-415px'}
            m={'0 auto'}
          />
        </Box>
      </Container>
    </Box>
  );
};
