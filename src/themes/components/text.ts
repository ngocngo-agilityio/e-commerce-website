// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    default: {
      color: 'paragraph',
      fontWeight: 'normal',
      fontFamily: 'lato',
    },
  },
  sizes: {
    '2xs': {
      fontSize: '2xs',
      lineHeight: 'none',
    },
    xs: {
      fontSize: 'xs',
      lineHeight: 'shorter',
    },
    sm: {
      fontSize: 'sm',
      lineHeight: 'shorter',
    },
    md: {
      fontSize: 'md',
      lineHeight: 'shorter',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: 'shorter',
    },
    xl: {
      fontSize: 'xl',
      lineHeight: 'shorter',
    },
    '2xl': {
      fontSize: '2xl',
      lineHeight: 'tall',
    },
    '3xl': {
      fontSize: '3xl',
      lineHeight: 'shorter',
    },
  },

  defaultProps: {
    variant: 'default',
    size: 'xl',
  },
});

export default Text;
