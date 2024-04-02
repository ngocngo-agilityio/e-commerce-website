// Libs
import { ChangeEvent, memo } from 'react';
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
}: Props): JSX.Element => {
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
        onChange={onChange}
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
