import { FC } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

export const CustomBox: FC<BoxProps> = ({
  children,
  bg = 'white',
  borderRadius = '16px',
  boxShadow = 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px',
  ...props
}) => {
  return (
    <Box bg={bg} borderRadius={borderRadius} boxShadow={boxShadow} {...props}>
      {children}
    </Box>
  );
};
