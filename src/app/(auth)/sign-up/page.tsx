// Libs
import { Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import { SignUpForm } from '@components';

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
