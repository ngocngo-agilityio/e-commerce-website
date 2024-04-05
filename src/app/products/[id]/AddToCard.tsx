'use client';

// Components
import { Button } from '@chakra-ui/react';

const AddToCard = (): JSX.Element => {
  return (
    <Button
      variant="solid"
      size="md"
      textTransform="uppercase"
      mt="36px"
      mb="32px"
    >
      Add to card
    </Button>
  );
};

export default AddToCard;
