import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Select,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model/schema.ts';
import { useCreateUserMutation, useGetUserRolesQuery } from '@/entities/user';
import { formatUserRole } from '@/shared/lib';

interface IAddUserModalProps extends Omit<ModalProps, 'children'> {}

export const AddUserModal: FC<IAddUserModalProps> = ({ ...props }) => {
  const { data: roles } = useGetUserRolesQuery();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data: any) {
    await createUser(data)
      .unwrap()
      .then(() => {
        props.onClose();
        reset();
      });
  }

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавить пользователя</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.login}>
              <FormLabel htmlFor='username'>Имя пользователя</FormLabel>
              <Input id='username' placeholder='Имя пользователя' {...register('login')} />
              <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} mt={'12px'}>
              <FormLabel htmlFor='password'>Пароль</FormLabel>
              <Input
                id='password'
                type={'password'}
                placeholder='Пароль'
                {...register('password')}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={'12px'}>
              <FormLabel htmlFor='role_id'>Роль</FormLabel>
              <Select id={'role_id'} {...register('role_id')} defaultValue={2}>
                {roles &&
                  roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {formatUserRole(role.title)}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage>{errors.role_id?.message}</FormErrorMessage>
            </FormControl>
            <Flex justifyContent={'end'}>
              <Button type={'submit'} mt={'40px'} isLoading={isLoading} colorScheme={'orange'}>
                Добавить
              </Button>
            </Flex>
          </form>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
