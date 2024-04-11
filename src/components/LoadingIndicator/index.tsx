// Libs
import { Box, Spinner as SpinnerChakraUI } from '@chakra-ui/react';

const LoadingIndicator = (): JSX.Element => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'loadingIndicatorBg',
        zIndex: 9999,
      }}
    >
      <SpinnerChakraUI
        size="lg"
        thickness="4px"
        speed="0.65s"
        color="blue.500"
      />
    </Box>
  );
};

export default LoadingIndicator;
