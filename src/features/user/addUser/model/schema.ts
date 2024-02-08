import * as yup from 'yup';

export const schema = yup
  .object({
    login: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
    role_id: yup.number().required('Обязательно'),
  })
  .required();
