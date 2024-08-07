'use client';

// Libs
import { memo, useState, useCallback, useTransition } from 'react';
import isEqual from 'react-fast-compare';
import { Button } from '@chakra-ui/react';

// Actions
import { updateMyCart } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants';

// Types
import { SizeOption, Product, ICartItem } from '@types';

// Components
import { SelectSize as SelectSizeComponent } from '@components';

interface Props {
  sizes: SizeOption[];
  product: Product;
  cartId: number;
  cartItems?: ICartItem[];
}

const AddToCartActionClient = ({
  sizes,
  product,
  cartId,
  cartItems = [],
}: Props): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>();
  const { showToast } = useCustomToast();
  const [isSubmitting, startTransition] = useTransition();

  const { id: productId = '' } = product || {};

  const handleSelectSize = useCallback((size: SizeOption) => {
    setSelectedSize(size);
  }, []);

  const handleAddToCard = useCallback(async () => {
    if (!selectedSize) {
      showToast(ERROR_MESSAGES.SELECT_SIZE);

      return;
    }

    startTransition(async () => {
      const newCartItems = [...cartItems];

      const itemExist = newCartItems.find((cartItem) => {
        const { product: productItem } = cartItem || {};
        const { id } = productItem || {};

        return id === productId;
      });

      if (itemExist) {
        itemExist.quantity = itemExist.quantity + 1;
      } else {
        newCartItems.push({ product, quantity: 1 });
      }

      const res = await updateMyCart(cartId, newCartItems);

      const { error } = res || {};

      if (error) {
        showToast(error);
      } else {
        showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
      }
    });
  }, [cartId, cartItems, product, productId, selectedSize, showToast]);

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
