import { Layout } from '@/shared/ui';
import { Sidebar, Header } from '@/widgets';
import { useMediaQuery } from '@chakra-ui/react';

export const BaseLayout = () => {
  const [isMobile] = useMediaQuery('(max-width: 992px)');

  return <Layout slot={isMobile ? <Header /> : <Sidebar />} />;
};
