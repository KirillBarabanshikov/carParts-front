import * as yup from 'yup';

export const schema = yup.object().shape({
  login: yup.string().required('Обязательно'),
  isEdit: yup.boolean(),
  password: yup.string().when('isEdit', {
    is: true,
    then: () => yup.string(),
    otherwise: () => yup.string().required(),
  }),
  role_id: yup.number().required('Обязательно'),
});
