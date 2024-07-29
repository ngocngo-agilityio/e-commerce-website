'use client';

// Libs
import { useState, useCallback, memo, useMemo } from 'react';
import { Flex, Center, Text, Button } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

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
    <Flex
      justify="space-between"
      w={{ base: '75px', md: '90px' }}
      h={{ base: '28px', md: '34px' }}
      border="1px"
      borderColor="counterBorder"
      borderRadius={{ base: '4px', md: '8px' }}
    >
      <Button
        variant="unstyled"
        minW={5}
        w={{ base: '25px', md: '30px' }}
        h={{ base: '28px', md: '34px' }}
        onClick={handleDecrement}
        isDisabled={isDecrementDisable}
      >
        <MinusIcon boxSize={2} />
      </Button>

      <Center
        w={{ base: '25px', md: '30px' }}
        h={{ base: '28px', md: '34px' }}
        borderInline="1px"
        borderColor="counterBorder"
      >
        <Text
          as="span"
          color="counterText"
          fontWeight="medium"
          fontSize={{ base: 'md', md: 'xl' }}
        >
          {quantity}
        </Text>
      </Center>

      <Button
        minW={5}
        w={{ base: '25px', md: '30px' }}
        h={{ base: '28px', md: '34px' }}
        variant="unstyled"
        onClick={handleIncrement}
      >
        <AddIcon boxSize={2} />
      </Button>
    </Flex>
  );
};

export default memo(Counter);
