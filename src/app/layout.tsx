// Libs
import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';

// Providers
import { ChakraUIProvider } from '@providers';

// Components
import { Header, Footer } from '@components';

export const metadata: Metadata = {
  title: 'E-commerce Fashion',
  description:
    'Discover the latest trends and shop your favorite styles on our innovative e-commerce platform designed for fashion enthusiasts.',
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
          <Header />
          <Box minHeight="calc(100vh - 99px - 490px)">{children}</Box>
          <Footer />
        </ChakraUIProvider>
      </body>
    </html>
  );
}
