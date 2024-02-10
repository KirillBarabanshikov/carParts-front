import * as yup from 'yup';

export const schema = yup.object({
  parts: yup.array(
    yup.object({
      count: yup.number().required(),
      part_id: yup.number().required(),
    }),
  ),
});
