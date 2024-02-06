import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/entities/session';
import { schema, type FormData } from '../model';

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  async function onSubmit(data: FormData) {
    await login(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel htmlFor='username'>Имя пользователя</FormLabel>
        <Input id='username' placeholder='Имя пользователя' {...register('username')} />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password} mt={'24px'}>
        <FormLabel htmlFor='password'>Пароль</FormLabel>
        <Input id='password' placeholder='Пароль' {...register('password')} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type={'submit'} mt={'24px'} isLoading={isLoading}>
        Вход
      </Button>
    </form>
  );
};
