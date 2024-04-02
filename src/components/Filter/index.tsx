// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

// Assets
import { FilterIcon } from '@assets';

// Types
import { FilterOption } from '@types';

interface Props {
  options: FilterOption[];
  placeholder?: string;
  defaultValue?: string[];
  onChange: (value: string[]) => void;
}

const Filter = ({
  options = [],
  placeholder = 'Filters',
  defaultValue,
  onChange,
}: Props): JSX.Element => {
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
        <CheckboxGroup onChange={onChange} defaultValue={defaultValue}>
          {options.map((item) => {
            const { value, label } = item || {};

            return (
              <MenuItem key={value}>
                <Checkbox
                  value={value}
                  colorScheme="orange"
                  textTransform="capitalize"
                >
                  {label}
                </Checkbox>
              </MenuItem>
            );
          })}
        </CheckboxGroup>
      </MenuList>
    </Menu>
  );
};

export default memo(Filter, isEqual);
