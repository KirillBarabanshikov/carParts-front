import * as yup from 'yup';

export const schema = yup.object({
  title: yup.string().required('Обязательно'),
  address: yup.string().required('Обязательно'),
  email: yup.string().email('Не верный формат'),
  phone: yup.string(),
});
