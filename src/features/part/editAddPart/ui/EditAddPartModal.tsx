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
  Select,
} from '@chakra-ui/react';
import { useGetSuppliersQuery } from '@/entities/supplier';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model/';
import { getCleanData } from '@/shared/lib';
import { IPart, useCreatePartMutation, useEditPartMutation } from '@/entities/part';

interface IEditAddSupplierModalProps extends Omit<ModalProps, 'children'> {
  part?: IPart;
}

export const EditAddPartModal: FC<IEditAddSupplierModalProps> = ({ part, ...props }) => {
  const [createPart] = useCreatePartMutation();
  const [editPart] = useEditPartMutation();
  const { data: suppliers } = useGetSuppliersQuery();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    if (part) {
      await editPart({ body: getCleanData(data), id: part.id })
        .unwrap()
        .then(() => {
          props.onClose();
          reset();
        });
    } else {
      await createPart(getCleanData(data))
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
        <ModalHeader>{part ? 'Редактировать' : 'Добавить'} запчасть</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel htmlFor='title'>Название</FormLabel>
              <Input
                id='title'
                placeholder='Название'
                {...register('title')}
                defaultValue={part?.title}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.price} mt={'12px'}>
              <FormLabel htmlFor='price'>Цена</FormLabel>
              <Input
                id='price'
                placeholder='Цена'
                {...register('price')}
                defaultValue={part?.price}
              />
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.sale_price} mt={'12px'}>
              <FormLabel htmlFor='sale_price'>Цена продажи</FormLabel>
              <Input
                id='sale_price'
                placeholder='Цена продажи'
                {...register('sale_price')}
                defaultValue={part?.sale_price}
              />
              <FormErrorMessage>{errors.sale_price?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.code} mt={'12px'}>
              <FormLabel htmlFor='code'>Артикул</FormLabel>
              <Input
                id='code'
                placeholder='Артикул'
                {...register('code')}
                defaultValue={part?.code}
              />
              <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={'12px'}>
              <FormLabel htmlFor='supplier_id'>Поставщик</FormLabel>
              <Select
                id={'supplier_id'}
                {...register('supplier_id')}
                defaultValue={part?.supplier_id}
              >
                {suppliers &&
                  suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.title}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage>{errors.supplier_id?.message}</FormErrorMessage>
            </FormControl>

            <Flex justifyContent={'end'}>
              <Button type={'submit'} mt={'40px'} isLoading={false} colorScheme={'orange'}>
                {part ? 'Редактировать' : 'Добавить'}
              </Button>
            </Flex>
          </form>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
