import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/entities/session';
import { schema, type FormData } from '../model';
import { useLazyGetCurrentUserQuery } from '@/entities/user';

export const LoginForm = () => {
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [getUser, { isLoading: isUserLoading }] = useLazyGetCurrentUserQuery();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const isLoading = isLoginLoading || isUserLoading;

  async function onSubmit(data: FormData) {
    try {
      await login(data).unwrap();
      await getUser().unwrap();
    } catch (e) {
      toast({
        title: 'error',
        status: 'error',
      });
    }
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
        <Input id='password' type={'password'} placeholder='Пароль' {...register('password')} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type={'submit'} mt={'40px'} isLoading={isLoading} colorScheme={'orange'} w={'100%'}>
        Вход
      </Button>
    </form>
  );
};
