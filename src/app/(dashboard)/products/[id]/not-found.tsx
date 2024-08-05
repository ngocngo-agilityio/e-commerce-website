// Libs
import Link from 'next/link';
import { Heading, Text, Flex } from '@chakra-ui/react';

// Constants
import { APP_ROUTERS, FOOTER_HEIGHT, HEADER_HEIGHT } from '@constants';

export default function NotFound() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
      mt="100px"
      minHeight={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`}
    >
      <Heading>404 Not Found</Heading>
      <Text>Could not find the requested product.</Text>
      <Link
        href={APP_ROUTERS.HOME_PAGE}
        style={{ textDecoration: 'underline' }}
      >
        Return Home
      </Link>
    </Flex>
  );
}
