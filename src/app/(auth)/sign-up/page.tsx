// Libs
import { Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Metadata } from 'next';

// Constants
import { APP_ROUTERS } from '@constants';

// Sections
import { SignUpForm } from '@sections';

export const metadata: Metadata = {
  title: 'Sign up',
};

const SignUp = () => (
  <>
    <Heading size={{ base: 'md', md: 'lg' }} fontFamily="lato" mb="80px">
      Get Started Now
    </Heading>

    <SignUpForm />

    <Text fontSize="md" mt={5}>
      Have an account?&nbsp;
      <Text as="span" fontSize="md" color="signUpLink" fontWeight="bold">
        <Link href={APP_ROUTERS.SIGN_IN}>Sign In</Link>
      </Text>
    </Text>
  </>
);

export default SignUp;
