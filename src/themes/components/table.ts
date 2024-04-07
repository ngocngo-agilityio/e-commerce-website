import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const customStriped = definePartsStyle(() => {
  return {
    th: {
      fontFamily: 'arimo',
      textTransform: 'capitalize',
      fontSize: '2xl',
      linHeight: '23px',
      color: 'headerCellText',
    },
    td: {
      fontFamily: 'lato',
      fontSize: 'xl',
      lineHeight: '19px',
      textAlign: 'left',
      color: 'bodyCellText',
    },
  };
});

// Define your custom table theme with the 'striped' variant using your custom striped style
export const Table = defineMultiStyleConfig({
  // Assign the 'striped' variant to your custom striped style
  variants: { simple: customStriped },
});
