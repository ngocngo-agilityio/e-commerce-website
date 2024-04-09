// Libs
import Link from 'next/link';
import { Heading, Text, Flex } from '@chakra-ui/react';

// Constants
import { APP_ROUTERS } from '@constants';

export default function NotFound() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
      mt="100px"
    >
      <Heading>Not Found</Heading>
      <Text>Could not find requested resource</Text>
      <Link
        href={APP_ROUTERS.HOME_PAGE}
        style={{ textDecoration: 'underline' }}
      >
        Return Home
      </Link>
    </Flex>
  );
}
