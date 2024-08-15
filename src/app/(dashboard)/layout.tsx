import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

// Components
import { Footer } from '@components';

// Sections
import { Header } from '@sections';

// Constants
import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_FOOTER_HEIGHT,
  DESKTOP_FOOTER_HEIGHT,
} from '@constants';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <Header />
    {/*
    This Box component ensures that the content area takes up at least
    the height of the viewport minus the heights of the header and footer
  */}
    <Box
      minHeight={{
        base: `calc(100vh - ${MOBILE_HEADER_HEIGHT} - ${MOBILE_FOOTER_HEIGHT})`,
        md: `calc(100vh - ${DESKTOP_HEADER_HEIGHT} - ${DESKTOP_FOOTER_HEIGHT})`,
      }}
    >
      {children}
    </Box>
    <Footer />
  </>
);

export default MainLayout;
