// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const FormError = defineStyleConfig({
  baseStyle: {
    text: {
      lineHeight: 'shorter',
      fontSize: 'md',
      position: 'absolute',
      mt: '4px',
    },
  },
});
