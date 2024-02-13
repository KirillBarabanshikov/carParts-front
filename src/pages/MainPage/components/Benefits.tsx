import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import car from '@/shared/assets/images/car2.png';

export const Benefits = () => {
  return (
    <Box mb={{ base: '50px', lg: '150px' }}>
      <Heading as={'h3'} fontSize={'36px'} mb={{ base: '30px', lg: '50px' }}>
        Почему мы?
      </Heading>
      <Flex gap={'80px'} alignItems={'center'}>
        <Image src={car} display={{ base: 'none', lg: 'initial' }} />
        <Stack
          bg={'orange.500'}
          width={'100%'}
          height={'min-content'}
          pl={{ base: '25px', lg: '150px' }}
          py={'25px'}
          pr={{ base: '25px', lg: '150px' }}
          color={'white'}
          borderRadius={'0.375rem'}
          spacing={'30px'}
        >
          <Box maxW={{ base: '100%', lg: '350px' }}>
            <Text
              fontWeight={700}
              fontSize={{ base: '28px', lg: '36px' }}
              lineHeight={{ base: '36px', lg: '54px' }}
            >
              650
            </Text>
            <Heading
              as={'h3'}
              fontWeight={600}
              fontSize={{ base: '24px' }}
              lineHeight={{ base: '36px' }}
            >
              успешно совершенных сделок
            </Heading>
            <Text fontSize={{ base: '16px' }}>
              Большой опыт пригона запчастей из разных стран, все клиенты остались довольны на 100%
            </Text>
          </Box>
          <Box maxW={{ base: '100%', lg: '350px' }}>
            <Text
              fontWeight={700}
              fontSize={{ base: '28px', lg: '36px' }}
              lineHeight={{ base: '36px', lg: '54px' }}
            >
              5
            </Text>
            <Heading
              as={'h3'}
              fontWeight={600}
              fontSize={{ base: '24px' }}
              lineHeight={{ base: '36px' }}
            >
              лет на рынке России
            </Heading>
            <Text fontSize={{ base: '16px' }}>
              Работаем по всей территории России, работаем по договору с клиентами
            </Text>
          </Box>
          <Box maxW={{ base: '100%', lg: '350px' }}>
            <Text
              fontWeight={700}
              fontSize={{ base: '28px', lg: '36px' }}
              lineHeight={{ base: '36px', lg: '54px' }}
            >
              100%
            </Text>
            <Heading
              as={'h3'}
              fontWeight={600}
              fontSize={{ base: '24px' }}
              lineHeight={{ base: '36px' }}
            >
              доверия клиентов
            </Heading>
            <Text fontSize={{ base: '16px' }}>
              Онлайн отчетность. Вы всегда в курсе статуса подбора вашего заказа. Фото и видео отчет
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
