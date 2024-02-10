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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model/';
import { getCleanData } from '@/shared/lib';
import { useGetPartsQuery } from '@/entities/part';
import { useCreateOrderMutation } from '@/entities/order';

interface IEditAddSupplierModalProps extends Omit<ModalProps, 'children'> {}

export const AddOrderModal: FC<IEditAddSupplierModalProps> = ({ ...props }) => {
  const { data: parts } = useGetPartsQuery();
  const [createOrder] = useCreateOrderMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    await createOrder(getCleanData(data))
      .unwrap()
      .then(() => {
        props.onClose();
        reset();
      });
  };

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавить заказ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor='part_id'>Запчасть</FormLabel>
              <Select id={'part_id'} {...register(`parts.${0}.part_id`)}>
                {parts &&
                  parts.map((part) => (
                    <option key={part.id} value={part.id}>
                      {part.title}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage>{errors.parts?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.parts} mt={'12px'}>
              <FormLabel htmlFor='title'>Количесво</FormLabel>
              <Input id='title' placeholder='Количесво' {...register(`parts.${0}.count`)} />
              <FormErrorMessage>{errors.parts?.message}</FormErrorMessage>
            </FormControl>

            <Flex justifyContent={'end'}>
              <Button type={'submit'} mt={'40px'} isLoading={false} colorScheme={'orange'}>
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
