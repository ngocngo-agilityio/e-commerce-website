import { ReactNode } from 'react';
import { Box, Center } from '@chakra-ui/react';

// Components
import { Logo } from '@components';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => (
  <Box maxW="full" pt={7} bg="authFormBg" px={{ base: 4, md: 12 }} minH="100vh">
    <Logo />
    <Center
      display="flex"
      flexDirection="column"
      px={4}
      mt={{ base: '80px', md: '150px' }}
      pb={10}
    >
      {children}
    </Center>
  </Box>
);

export default AuthLayout;
