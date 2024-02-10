import * as yup from 'yup';

export const schema = yup.object({
  status_id: yup.number().required(),
});
