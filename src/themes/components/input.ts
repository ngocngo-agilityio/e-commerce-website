// Libs
import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'inter',
      fontWeight: 'normal',
      color: 'valueInput',
      _placeholder: {
        color: 'placeholderInput',
      },
    },
  },

  variants: {
    flushed: {
      field: {
        fontSize: 'xl',
        borderColor: 'flushedInput.border',
        borderBottomWidth: '1px',
      },
    },
    outline: {
      field: {
        borderColor: 'outlineInput.borderColor',
        borderWidth: '1px',
        _focus: {
          borderColor: 'outlineInput.focusBorder',
          boxShadow: 'none',
        },
      },
    },
  },

  sizes: {
    base: {
      field: {
        py: '16px',
        px: '24px',
        h: '48px',
        fontSize: 'xl',
        lineHeight: 'shorter',
      },
    },
  },
});
