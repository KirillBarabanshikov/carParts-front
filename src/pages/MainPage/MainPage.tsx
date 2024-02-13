import { FC, useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';

import { Header, Footer, Contacts, Form, Benefits, Services } from './components';

const MainPage: FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (!formRef.current) return;
    formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <>
      <Header scrollToForm={scrollToForm} />
      <Box as={'main'}>
        <Container maxW={'1200px'} pt={{ base: '50px', lg: '300px' }}>
          <Services />
          <Benefits />
          <Form ref={formRef} />
          <Contacts />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;
