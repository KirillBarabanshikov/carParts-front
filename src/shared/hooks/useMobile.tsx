import { useMediaQuery } from '@chakra-ui/react';

export const useMobile = () => {
  const [isMobile] = useMediaQuery('(max-width: 992px)');

  return { isMobile };
};
