'use client';

// Libs
import { memo, useState, useCallback, useTransition } from 'react';
import isEqual from 'react-fast-compare';
import { Button } from '@chakra-ui/react';

// Actions
import { addToCart } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants';

// Types
import { SizeOption, Product, CartItem } from '@types';

// Components
import { SelectSize as SelectSizeComponent } from '@components';

interface Props {
  sizes: SizeOption[];
  product: Product;
  cartItems?: CartItem[];
}

const AddToCartActionClient = ({
  sizes,
  product,
  cartItems = [],
}: Props): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>();
  const { showToast } = useCustomToast();
  const [isSubmitting, startTransition] = useTransition();

  const handleSelectSize = useCallback((size: SizeOption) => {
    setSelectedSize(size);
  }, []);

  const handleAddToCard = useCallback(async () => {
    if (!selectedSize) {
      showToast(ERROR_MESSAGES.SELECT_SIZE);

      return;
    }

    const existingCartItems = cartItems.find(
      (item) => item.productId == product.id,
    );

    startTransition(async () => {
      const res = await addToCart({
        product,
        quantity: existingCartItems ? existingCartItems?.quantity + 1 : 1,
        cartId: existingCartItems?.id,
      });

      const { error } = res || {};

      if (error) {
        showToast(error);
      } else {
        showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
      }
    });
  }, [cartItems, product, selectedSize, showToast]);

  return (
    <>
      <SelectSizeComponent options={sizes} onChange={handleSelectSize} />
      <Button
        variant="solid"
        size="md"
        textTransform="uppercase"
        mt="36px"
        mb="32px"
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        onClick={handleAddToCard}
      >
        Add to cart
      </Button>
    </>
  );
};

export default memo(AddToCartActionClient, isEqual);
