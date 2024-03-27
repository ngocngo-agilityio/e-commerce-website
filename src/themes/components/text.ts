// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    default: {
      color: 'paragraph',
      fontWeight: 'normal',
      fontFamily: 'lato',
      lineHeight: 'shorter',
    },
  },

  sizes: {
    '2xs': {
      fontSize: '2xs',
      lineHeight: 'none',
    },
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
    xl: {
      fontSize: 'xl',
    },
    '2xl': {
      fontSize: '2xl',
      lineHeight: 'tall',
    },
    '3xl': {
      fontSize: '3xl',
    },
  },

  defaultProps: {
    variant: 'default',
    size: 'xl',
  },
});

export default Text;
