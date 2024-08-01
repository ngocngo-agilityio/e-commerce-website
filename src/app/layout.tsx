// Libs
import type { Metadata } from 'next';

// Providers
import { ChakraUIProvider } from '@providers';

export const metadata: Metadata = {
  title: {
    template: '%s | E-commerce Fashion',
    default: 'E-commerce Fashion',
  },
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
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
