// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'heading',
    fontWeight: 'bold',
    fontFamily: 'arimo',
  },

  sizes: {
    sm: {
      fontSize: 'xl',
      lineHeight: 'base',
    },
    md: {
      fontSize: '4xl',
      lineHeight: 'short',
    },
    lg: {
      fontSize: '5xl',
      lineHeight: 'none',
    },
  },

  defaultProps: {
    size: 'md',
  },
});
