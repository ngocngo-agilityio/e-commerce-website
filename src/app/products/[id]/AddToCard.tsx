'use client';

// Libs
import { memo, useState, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Button } from '@chakra-ui/react';

// Actions
import { addToCart } from '@apis';

// Stores
import { useCartStore } from '@stores';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants';

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
  const { showToast } = useCustomToast();
  const cartItems = useCartStore((state) => state.cartItems);

  const handleSelectSize = useCallback((size?: SizeOption) => {
    setSelectedSize(size);
  }, []);

  const handleAddToCard = async () => {
    if (!selectedSize) {
      showToast(ERROR_MESSAGES.SELECT_SIZE);
    } else {
      const existingCartItems = cartItems.find(
        (item) => item.productId == product.id,
      );

      const { error } = await addToCart({
        product,
        quantity: 1,
        cartId: existingCartItems?.id || '',
      });

      if (!error) {
        showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
      } else {
        showToast(error);
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
