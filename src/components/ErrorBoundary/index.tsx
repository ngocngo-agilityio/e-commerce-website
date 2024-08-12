'use client';

// Libs
import { useEffect } from 'react';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';

// Constants
import {
  DESKTOP_FOOTER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
  MOBILE_FOOTER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
} from '@constants';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  // Attempt to recover by trying to re-render the segment
  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <VStack
      justifyContent="center"
      gap="50px"
      minHeight={{
        base: `calc(100vh - ${MOBILE_HEADER_HEIGHT} - ${MOBILE_FOOTER_HEIGHT})`,
        md: `calc(100vh - ${DESKTOP_HEADER_HEIGHT} - ${DESKTOP_FOOTER_HEIGHT})`,
      }}
    >
      <Heading>Something went wrong!</Heading>
      <Text color="red">An error has occurred: {error?.message}</Text>
      <Button onClick={handleReset}>Try again</Button>
    </VStack>
  );
};

export default ErrorBoundary;
