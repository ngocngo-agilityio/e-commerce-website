import { ReactNode } from 'react';
import { Box, Center } from '@chakra-ui/react';

// Components
import { Logo } from '@components';

interface MainLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: MainLayoutProps) => (
  <Box maxW="full" pt={7} bg="authFormBg" px={{ base: 4, md: 12 }} minH="100vh">
    <Logo />
    <Center
      display="flex"
      flexDirection="column"
      px={4}
      mt={{ base: '80px', md: '150px' }}
      pb={8}
    >
      {children}
    </Center>
  </Box>
);

export default AuthLayout;
