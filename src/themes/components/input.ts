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
      _focus: {
        borderColor: 'focusInputBorder',
        boxShadow: 'none',
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
    quantity: {
      field: {
        fontSize: 'xl',
        border: '2px solid',
        color: '#555555',
        borderRadius: 'none',
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
