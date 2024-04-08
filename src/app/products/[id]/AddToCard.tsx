'use client';

// Libs
import { memo, useState, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Button } from '@chakra-ui/react';

// Actions
import { addToCart } from '@apis';

// Types
import { SizeOption, Product } from '@types';

// Components
import { SelectSize as SelectSizeComponent } from '@components';

interface Props {
  sizes: SizeOption[];
  product: Product;
}

const AddToCard = ({ sizes, product }: Props): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>();

  const handleSelectSize = useCallback((size?: SizeOption) => {
    setSelectedSize(size);
  }, []);

  const handleAddToCard = async () => {
    if (!selectedSize) {
      // TODO:  Update later
      console.log('Have not selected size');
    } else {
      const cartItems = localStorage.getItem('cart') || [];

      console.log('cartItems', cartItems);

      if (cartItems.length) {
        console.log('cartItems.length');
      } else {
        const { error } = await addToCart({ product, quantity: 1 });
        console.log('>>>>>>>>>>>>>>error', error);
      }
    }
  };

  return (
    <>
      <SelectSizeComponent options={sizes} onChange={handleSelectSize} />
      <Button
        variant="solid"
        size="md"
        textTransform="uppercase"
        mt="36px"
        mb="32px"
        onClick={handleAddToCard}
      >
        Add to card
      </Button>
    </>
  );
};

export default memo(AddToCard, isEqual);
