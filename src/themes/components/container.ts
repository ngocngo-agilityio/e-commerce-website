// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  sizes: {
    lg: {
      w: 'full',
      maxWidth: '1346px',
    },
  },
  defaultProps: {
    size: 'lg',
  },
});

export default Container;
