import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const Contacts = () => {
  return (
    <Box mb={{ base: '50px', lg: '150px' }}>
      <Heading as={'h3'} fontSize={'36px'} mb={{ base: '30px', lg: '50px' }}>
        Контакты
      </Heading>
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap={'50px'}>
        <Stack spacing={'20px'}>
          <Box>
            <Heading as={'h6'} fontSize={'18px'}>
              Адрес
            </Heading>
            <Text fontSize={'18px'}>Ижевск, Пушкинская улица, 268</Text>
          </Box>
          <Box>
            <Heading as={'h6'} fontSize={'18px'}>
              Время работы
            </Heading>
            <Text fontSize={'18px'}>
              Пн-Сб: с 9:00 до 19:00
              <br />
              Вс: выходной
            </Text>
          </Box>
          <Box>
            <Heading as={'h6'} fontSize={'18px'}>
              Телефон
            </Heading>
            <Text fontSize={'18px'}>
              <Link href={'tel:+79158167454'} _hover={{ color: 'orange.500' }}>
                +7 (915) 816 74 54
              </Link>
            </Text>
          </Box>
        </Stack>
        <YMaps>
          <Map
            defaultState={{
              center: [56.862278, 53.209469],
              zoom: 15,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            width={'100%'}
            height={'500px'}
          >
            <Placemark defaultGeometry={[56.862278, 53.209469]} />
          </Map>
        </YMaps>
      </Flex>
    </Box>
  );
};
