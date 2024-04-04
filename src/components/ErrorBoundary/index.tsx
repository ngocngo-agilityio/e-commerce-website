'use client';

import { Button, Flex, Heading } from '@chakra-ui/react';
// Libs
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Flex flexDir="column" alignItems="center" gap="50px">
      <Heading>Something went wrong!</Heading>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Flex>
  );
};

export default ErrorBoundary;
