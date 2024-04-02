// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Menu = defineStyleConfig({
  baseStyle: {
    item: {
      borderRadius: 'none',
      px: '16px',
      py: '12px',
    },
    list: {
      borderRadius: 'none',
      p: '0',
      minWidth: '160px',
    },
  },

  sizes: {
    sm: {
      list: {
        minWidth: '210px',
      },
    },
    base: {
      list: {
        minWidth: '245px',
      },
    },
  },
});
