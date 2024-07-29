// Libs
import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';

// Providers
import { ChakraUIProvider } from '@providers';

// Constants
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '@constants';

// Sections
import MainLayout from './MainLayout';

export const metadata: Metadata = {
  title: 'E-commerce Fashion',
  description:
    'Discover the latest trends and shop your favorite styles on our innovative e-commerce platform designed for fashion enthusiasts.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          <MainLayout>
            {/*
            This Box component ensures that the content area takes up at least
            the height of the viewport minus the heights of the header and footer
          */}
            <Box
              minHeight={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`}
            >
              {children}
            </Box>
          </MainLayout>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
