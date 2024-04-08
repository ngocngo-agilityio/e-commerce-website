'use client';

// Libs
import { useState, useCallback, memo, useMemo } from 'react';
import { Flex, Center, Text, Button } from '@chakra-ui/react';

interface Props {
  initialQuantity: number;
  onQuantityChange: (qty: number) => void;
}

const Counter = ({ initialQuantity, onQuantityChange }: Props): JSX.Element => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const isDecrementDisable = useMemo(() => {
    return quantity === 1;
  }, [quantity]);

  const handleChange = useCallback(
    (step: number) => {
      setQuantity((prevQuantity) => {
        const updateCount = prevQuantity + step;

        onQuantityChange(updateCount);

        return updateCount;
      });
    },
    [onQuantityChange],
  );

  const handleDecrement = useCallback(() => {
    handleChange(-1);
  }, [handleChange]);

  const handleIncrement = useCallback(() => {
    handleChange(1);
  }, [handleChange]);

  return (
    <Flex justify="space-between" bg="counterBg" w="90px" h="30px">
      <Center flex={1}>
        <Button
          variant="unstyled"
          color="counterText"
          fontWeight="medium"
          fontSize="2xl"
          onClick={handleDecrement}
          isDisabled={isDecrementDisable}
        >
          -
        </Button>
      </Center>
      <Center flex={1}>
        <Text as="span" color="counterText" fontWeight="medium">
          {quantity}
        </Text>
      </Center>
      <Center flex={1}>
        <Button
          variant="unstyled"
          color="counterText"
          fontWeight="medium"
          onClick={handleIncrement}
        >
          +
        </Button>
      </Center>
    </Flex>
  );
};

export default memo(Counter);
