import * as yup from 'yup';

export const schema = yup.object({
  title: yup.string().required('Обязательно'),
  price: yup.string().required('Обязательно'),
  sale_price: yup.string().required('Обязательно'),
  code: yup.string().required('Обязательно'),
  supplier_id: yup.number().required('Обязательно'),
});
