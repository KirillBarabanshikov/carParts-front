import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef } from 'react';

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required(),
    count: yup.number().required(),
    part_id: yup.number().required(),
  })
  .required();

export const Form = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {};

  return (
    <Box mb={{ base: '50px', lg: '150px' }} ref={ref}>
      <Heading as={'h3'} fontSize={'36px'} mb={{ base: '30px', lg: '50px' }}>
        Оставить заявку
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor={'name'}>ФИО</FormLabel>
          <Input id={'name'} placeholder={'ФИО'} {...register('name')} size={'lg'} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.phone} mt={'20px'}>
          <FormLabel htmlFor={'phone'}>Телефон</FormLabel>
          <Input id={'phone'} placeholder={'Телефон'} {...register('phone')} size={'lg'} />
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.part_id} mt={'20px'}>
          <FormLabel htmlFor='part_id'>Запчасть</FormLabel>
          <Select id={'part_id'} {...register(`part_id`)} size={'lg'}>
            <option value={0}>test</option>
          </Select>
          <FormErrorMessage>{errors.part_id?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.count} mt={'20px'}>
          <FormLabel htmlFor={'count'}>Количество</FormLabel>
          <Input id={'count'} placeholder={'Количество'} {...register('count')} size={'lg'} />
          <FormErrorMessage>{errors.count?.message}</FormErrorMessage>
        </FormControl>
        <Button type={'submit'} colorScheme={'orange'} width={'100%'} mt={'40px'} size={'lg'}>
          Отправить
        </Button>
      </form>
    </Box>
  );
});
