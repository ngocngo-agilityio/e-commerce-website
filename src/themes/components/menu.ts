// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Menu = defineStyleConfig({
  baseStyle: {
    item: {
      borderRadius: '20px',
      py: '10px',
    },

    list: {
      p: '10px',
      minWidth: '160px',
    },
  },

  sizes: {
    base: {
      list: {
        minWidth: '245px',
        borderRadius: '20px',
      },
    },
  },
});
