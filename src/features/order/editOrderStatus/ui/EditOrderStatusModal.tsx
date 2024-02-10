import { FC } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import { IOrder, useEditOrderMutation, useGetOrderStatusesQuery } from '@/entities/order';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model';
import { formatOrderStatus } from '@/shared/lib/formatOrderStatus.tsx';

interface IEditOrderStatusModalProps extends Omit<ModalProps, 'children'> {
  order: IOrder;
}

export const EditOrderStatusModal: FC<IEditOrderStatusModalProps> = ({ order, ...props }) => {
  const { data: statuses } = useGetOrderStatusesQuery();
  const [editOrder] = useEditOrderMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    await editOrder({ body: data, id: order.id })
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
        <ModalHeader>Изменить статус заказа</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor='status_id'>Статус</FormLabel>
              <Select id={'status_id'} {...register(`status_id`)} defaultValue={order.status.id}>
                {statuses &&
                  statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {formatOrderStatus(status.title)}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage>{errors.status_id?.message}</FormErrorMessage>
            </FormControl>

            <Flex justifyContent={'end'}>
              <Button type={'submit'} mt={'40px'} isLoading={false} colorScheme={'orange'}>
                Изменить
              </Button>
            </Flex>
          </form>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
