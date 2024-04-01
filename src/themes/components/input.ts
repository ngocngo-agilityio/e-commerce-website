// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    flushed: {
      field: {
        fontSize: 'xl',
        borderColor: 'borderInput',
        borderBottomWidth: '1px',
      },
    },
  },
});
