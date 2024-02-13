import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export const Services = () => {
  return (
    <Box mb={{ base: '50px', lg: '150px' }}>
      <Heading as={'h3'} fontSize={'36px'} mb={{ base: '30px', lg: '50px' }}>
        Наши услуги
      </Heading>
      <Flex gap={{ base: '50px', lg: '96px' }} flexDir={{ base: 'column-reverse', lg: 'row' }}>
        <Box width={{ base: '100%', lg: '505px' }}>
          <Box mb={'50px'}>
            <Heading as={'h6'} fontSize={'18px'} color={'orange.500'} mb={'12px'}>
              Почему ввоз авто из Китая?
            </Heading>
            <Text mb={'12px'}>
              Мы проанализировали рынок Китая в сравнении с рынком Европы и пришли к выводу, что
              покупка автозапчастей в Китае значительно выгоднее, несмотря на первоначальные
              ожидания. Это обусловлено хорошо продуманной логистикой, высоким уровнем развития
              сервисов по оценке состояния запчастей и самим процессом их приобретения.
            </Text>
          </Box>
          <Box>
            <Heading as={'h6'} fontSize={'18px'} color={'orange.500'} mb={'12px'}>
              Из-за чего такая низкая цена?
            </Heading>
            <Text mb={'12px'}>
              Битые автомобили из Китая приобретаются на аукционах страховых компаний. На этих
              аукционах цена машины снижается на половину даже из-за незначительных повреждений.
              Учитывая затраты на покупку, доставку, таможенные пошлины и восстановительный ремонт,
              стоимость аналогичного автомобиля в России может быть выше на 35-50%, а цены на новые
              автомобили могут оказаться просто непомерными.
            </Text>
          </Box>
        </Box>
        <Stack flex={'1'}>
          <Box
            borderWidth={'2px'}
            borderColor={'grey.500'}
            role={'group'}
            px={'15px'}
            py={'10px'}
            _hover={{ borderColor: 'orange.500' }}
            transition={'0.3s'}
            userSelect={'none'}
            display={'flex'}
            alignItems={'center'}
          >
            <Text
              _groupHover={{ color: 'orange.500' }}
              transition={'0.3s'}
              transform={'rotate(270deg)'}
              mr={{ base: '25px', lg: '50px' }}
              fontSize={'36px'}
              color={'gray.400'}
            >
              01
            </Text>
            <Box>
              <Text _groupHover={{ color: 'orange.500' }} transition={'0.3s'} fontSize={'24px'}>
                Покупка авто
              </Text>
              <Text fontSize={{ base: '16px', lg: '18px' }}>
                Подбор автомобиля и экспертная проверка
              </Text>
            </Box>
          </Box>
          <Box
            borderWidth={'2px'}
            borderColor={'grey.500'}
            role={'group'}
            px={'15px'}
            py={'10px'}
            _hover={{ borderColor: 'orange.500', pr: { base: 'initial', lg: '80px' } }}
            transition={'0.3s'}
            userSelect={'none'}
            display={'flex'}
            alignItems={'center'}
          >
            <Text
              _groupHover={{ color: 'orange.500' }}
              transition={'0.3s'}
              transform={'rotate(270deg)'}
              mr={{ base: '25px', lg: '50px' }}
              fontSize={'36px'}
              color={'gray.400'}
            >
              02
            </Text>
            <Box>
              <Text _groupHover={{ color: 'orange.500' }} transition={'0.3s'} fontSize={'24px'}>
                Покупка авто
              </Text>
              <Text fontSize={{ base: '16px', lg: '18px' }}>
                Подбор автомобиля и экспертная проверка
              </Text>
            </Box>
          </Box>
          <Box
            borderWidth={'2px'}
            borderColor={'grey.500'}
            role={'group'}
            px={'15px'}
            py={'10px'}
            _hover={{ borderColor: 'orange.500', pr: { base: 'initial', lg: '80px' } }}
            transition={'0.3s'}
            userSelect={'none'}
            display={'flex'}
            alignItems={'center'}
          >
            <Text
              _groupHover={{ color: 'orange.500' }}
              transition={'0.3s'}
              transform={'rotate(270deg)'}
              mr={{ base: '25px', lg: '50px' }}
              fontSize={'36px'}
              color={'gray.400'}
            >
              03
            </Text>
            <Box>
              <Text _groupHover={{ color: 'orange.500' }} transition={'0.3s'} fontSize={'24px'}>
                Покупка авто
              </Text>
              <Text fontSize={{ base: '16px', lg: '18px' }}>
                Подбор автомобиля и экспертная проверка
              </Text>
            </Box>
          </Box>
          <Box
            borderWidth={'2px'}
            borderColor={'grey.500'}
            role={'group'}
            px={'15px'}
            py={'10px'}
            _hover={{ borderColor: 'orange.500', pr: { base: 'initial', lg: '80px' } }}
            transition={'0.3s'}
            userSelect={'none'}
            display={'flex'}
            alignItems={'center'}
          >
            <Text
              _groupHover={{ color: 'orange.500' }}
              transition={'0.3s'}
              transform={'rotate(270deg)'}
              mr={{ base: '25px', lg: '50px' }}
              fontSize={'36px'}
              color={'gray.400'}
            >
              04
            </Text>
            <Box>
              <Text _groupHover={{ color: 'orange.500' }} transition={'0.3s'} fontSize={'24px'}>
                Покупка авто
              </Text>
              <Text fontSize={{ base: '16px', lg: '18px' }}>
                Подбор автомобиля и экспертная проверка
              </Text>
            </Box>
          </Box>
          <Box
            borderWidth={'2px'}
            borderColor={'grey.500'}
            role={'group'}
            px={'15px'}
            py={'10px'}
            _hover={{ borderColor: 'orange.500', pr: { base: 'initial', lg: '80px' } }}
            transition={'0.3s'}
            userSelect={'none'}
            display={'flex'}
            alignItems={'center'}
          >
            <Text
              _groupHover={{ color: 'orange.500' }}
              transition={'0.3s'}
              transform={'rotate(270deg)'}
              mr={{ base: '25px', lg: '50px' }}
              fontSize={'36px'}
              color={'gray.400'}
            >
              05
            </Text>
            <Box>
              <Text _groupHover={{ color: 'orange.500' }} transition={'0.3s'} fontSize={'24px'}>
                Покупка авто
              </Text>
              <Text fontSize={{ base: '16px', lg: '18px' }}>
                Подбор автомобиля и экспертная проверка
              </Text>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
