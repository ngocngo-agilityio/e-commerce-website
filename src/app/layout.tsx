// Libs
import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
