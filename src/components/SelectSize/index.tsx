'use client';

// Libs
import { useCallback, MouseEvent, useState, memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

// Assets
import { AngleDownIcon } from '@assets';

// Types
import { SizeOption } from '@types';

interface Props {
  options: SizeOption[];
  onChange: (selectedOption: SizeOption | undefined) => void;
}

const SelectSize = ({ options = [], onChange }: Props): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<SizeOption>();

  const handleOnChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const value = e.currentTarget.value;
      const selectedOption = options.find((item) => item.value === value);

      setSelectedOption(selectedOption);
      onChange(selectedOption);
    },
    [onChange, options],
  );

  return (
    <Menu size="sm">
      <MenuButton as={Button} variant="selectBtn" rightIcon={<AngleDownIcon />}>
        {selectedOption?.label || 'Select Size'}
      </MenuButton>
      <MenuList>
        {options.map((item) => {
          const { value, label, code } = item || {};

          return (
            <MenuItem
              key={value}
              value={value}
              borderBottom="1px"
              borderColor="menu.border"
              onClick={handleOnChange}
            >
              <Flex justifyContent="space-between" w="full">
                <Text color="menu.text">{label}</Text>
                <Text color="menu.text">{code}</Text>
              </Flex>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default memo(SelectSize, isEqual);
