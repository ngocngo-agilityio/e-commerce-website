// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
  baseStyle: {
    container: {
      p: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
    },
    body: {
      p: '0',
    },
  },
});
