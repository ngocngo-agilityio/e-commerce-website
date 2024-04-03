'use client';

// Libs
import { memo, useState, MouseEvent, useCallback } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

// Assets
import { FilterIcon } from '@assets';

// Types
import { SortOption } from '@types';

interface Props {
  options: SortOption[];
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Sort = ({
  options = [],
  defaultValue,
  placeholder = 'Sort by',
  onChange,
}: Props): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOnChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const value = e.currentTarget.value;

      setSelectedOption(value);
      onChange(value);
    },
    [onChange],
  );

  return (
    <Menu closeOnSelect={false} size="base">
      <MenuButton>
        <InputGroup maxW="245px">
          <Input
            variant="outline"
            size="base"
            borderRadius="base"
            placeholder={placeholder}
          />
          <InputRightElement h="24px" my="12px" mr="7px">
            <FilterIcon />
          </InputRightElement>
        </InputGroup>
      </MenuButton>

      <MenuList>
        <RadioGroup value={selectedOption} defaultValue={defaultValue}>
          {options.map((item) => {
            const { value, label } = item || {};

            return (
              <MenuItem key={value} value={value} onClick={handleOnChange}>
                <Radio value={value} colorScheme="orange">
                  {label}
                </Radio>
              </MenuItem>
            );
          })}
        </RadioGroup>
      </MenuList>
    </Menu>
  );
};

export default memo(Sort, isEqual);
