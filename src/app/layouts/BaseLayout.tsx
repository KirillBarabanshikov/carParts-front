import { Layout } from '@/shared/ui';
import { Sidebar, Header } from '@/widgets';
import { useMobile } from '@/shared/hooks';

export const BaseLayout = () => {
  const { isMobile } = useMobile();

  return <Layout slot={isMobile ? <Header /> : <Sidebar />} />;
};
