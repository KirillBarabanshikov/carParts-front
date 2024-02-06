import * as yup from 'yup';

export const schema = yup
  .object({
    username: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
  })
  .required();
