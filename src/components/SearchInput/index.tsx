// Libs
import { ChangeEvent, memo, useCallback } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

// Assets
import { SearchIcon } from '@assets';

interface Props extends InputProps {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  value,
  placeholder = 'Search Here....',
  onChange,
  ...rest
}: Props) => {
  // Handle when typing value
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    },
    [onChange],
  );

  return (
    <InputGroup>
      <Input
        aria-label="Product Search"
        placeholder={placeholder}
        variant="outline"
        size="base"
        borderRadius="base"
        pr="80px"
        value={value}
        onChange={handleOnChange}
        {...rest}
      />
      <InputRightElement
        w="56px"
        h="24px"
        my="12px"
        borderLeft="1px"
        borderColor="outlineInput.borderColor"
      >
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(SearchInput);
