import { FC } from 'react';
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
} from '@chakra-ui/react';
import { ISupplier, useCreateSupplierMutation, useEditSupplierMutation } from '@/entities/supplier';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model/';
import { getCleanData } from '@/shared/lib';

interface IEditAddSupplierModalProps extends Omit<ModalProps, 'children'> {
  supplier?: ISupplier;
}

export const EditAddSupplierModal: FC<IEditAddSupplierModalProps> = ({ supplier, ...props }) => {
  const [createSupplier] = useCreateSupplierMutation();
  const [editSupplier] = useEditSupplierMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    if (supplier) {
      await editSupplier({ body: getCleanData(data), id: supplier.id })
        .unwrap()
        .then(() => {
          props.onClose();
          reset();
        });
    } else {
      await createSupplier(getCleanData(data))
        .unwrap()
        .then(() => {
          props.onClose();
          reset();
        });
    }
  };

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{supplier ? 'Редактировать' : 'Добавить'} поставщика</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel htmlFor='title'>Название</FormLabel>
              <Input
                id='title'
                placeholder='Название'
                {...register('title')}
                defaultValue={supplier?.title}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.address} mt={'12px'}>
              <FormLabel htmlFor='address'>Адрес</FormLabel>
              <Input
                id='address'
                placeholder='Адрес'
                {...register('address')}
                defaultValue={supplier?.address}
              />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email} mt={'12px'}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                placeholder='Email'
                {...register('email')}
                defaultValue={supplier?.email}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.phone} mt={'12px'}>
              <FormLabel htmlFor='phone'>Телефон</FormLabel>
              <Input
                id='phone'
                placeholder='Телефон'
                {...register('phone')}
                defaultValue={supplier?.phone}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>

            <Flex justifyContent={'end'}>
              <Button type={'submit'} mt={'40px'} isLoading={false} colorScheme={'orange'}>
                {supplier ? 'Редактировать' : 'Добавить'}
              </Button>
            </Flex>
          </form>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
