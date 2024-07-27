'use client';

// Libs
import { useEffect } from 'react';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';

// Constants
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@constants';

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
      minHeight={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`}
    >
      <Heading>Something went wrong!</Heading>
      <Text color="red">{error?.message}</Text>
      <Button onClick={handleReset}>Try again</Button>
    </VStack>
  );
};

export default ErrorBoundary;
