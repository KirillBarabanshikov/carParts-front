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
import { useGetSalesStatusesQuery, useEditSaleMutation, ISale } from '@/entities/sale';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../model';
import { formatSaleStatus } from '@/shared/lib';

interface IEditSaleStatusModalProps extends Omit<ModalProps, 'children'> {
  sale: ISale;
}

export const EditSaleStatusModal: FC<IEditSaleStatusModalProps> = ({ sale, ...props }) => {
  const { data: statuses } = useGetSalesStatusesQuery();
  const [editSale] = useEditSaleMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    await editSale({ body: data, id: sale.id })
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
        <ModalHeader>Изменить статус заявки</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor='status_id'>Статус</FormLabel>
              <Select id={'status_id'} {...register(`status_id`)} defaultValue={sale.status.id}>
                {statuses &&
                  statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {formatSaleStatus(status.title)}
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
