// Libs
import { ChangeEvent, memo } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useDebounceCallback } from 'usehooks-ts';

// Assets
import { SearchIcon } from '@assets';

interface Props extends InputProps {
  defaultValue?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  defaultValue,
  placeholder = 'Search Here....',
  onChange,
  ...rest
}: Props): JSX.Element => {
  const handleOnChange = useDebounceCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    },
    500,
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
        defaultValue={defaultValue}
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
