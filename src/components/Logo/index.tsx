// Libs
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { APP_ROUTERS } from '@constants';

const Logo = (): JSX.Element => {
  return (
    <Heading as="h1" fontFamily="lato" color="logo" fontWeight="normal">
      <Link href={APP_ROUTERS.PRODUCTS}>NorthStar</Link>
    </Heading>
  );
};

export default Logo;
