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
import { Category } from '@types';

interface Props {
  options: Category[];
  placeholder?: string;
  defaultValue?: number[];
  onChange: (value: number[]) => void;
}

const Filter = ({
  options = [],
  placeholder = 'Filters',
  defaultValue,
  onChange,
}: Props): JSX.Element => {
  return (
    <Menu size="base" closeOnSelect={false}>
      <MenuButton>
        <InputGroup w={{ base: 'full', md: '245px' }}>
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
            const { id, name = '' } = item || {};

            return (
              <MenuItem key={id} p={0}>
                <Checkbox
                  w="full"
                  h="full"
                  py={3}
                  px={4}
                  value={id}
                  colorScheme="orange"
                  textTransform="capitalize"
                >
                  {name}
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
