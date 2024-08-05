import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

// Components
import { Header, Footer } from '@components';

// Constants
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@constants';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {/*
    This Box component ensures that the content area takes up at least
    the height of the viewport minus the heights of the header and footer
  */}
      <Box minHeight={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
