// Libs
import { Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Metadata } from 'next';

// Constants
import { APP_ROUTERS } from '@constants';

// Section
import { LoginForm } from '@sections';

export const metadata: Metadata = {
  title: 'Sign in',
};

const SignIn = () => (
  <>
    <Heading size={{ base: 'md', md: 'lg' }} fontFamily="lato">
      Welcome back
    </Heading>
    <Text mt={5} mb="60px">
      Welcome back! Please enter your details
    </Text>
    <LoginForm />
    <Text fontSize="md" mt={5}>
      Don&apos;t have an account?&nbsp;
      <Text as="span" fontSize="md" color="signUpLink" fontWeight="bold">
        <Link href={APP_ROUTERS.SIGN_UP}>Sign Up</Link>
      </Text>
    </Text>
  </>
);

export default SignIn;
