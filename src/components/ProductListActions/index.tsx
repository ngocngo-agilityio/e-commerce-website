'use client';

// Libs
import { memo } from 'react';
import { Flex, Box } from '@chakra-ui/react';

// Types
import { Category } from '@types';

// Components
import { SearchInput, Filter, Sort } from '@components';

interface Props {
  categories: Category[];
}

const ProductListActions = ({ categories }: Props): JSX.Element => {
  // TODO: Update later
  const searchValue = '';
  const handleOnSearch = () => {};
  const handleOnFilter = () => {};
  const handleOnSort = () => {};

  return (
    <Flex py="24px" gap="20px">
      <Box maxW="239px">
        <SearchInput value={searchValue} onChange={handleOnSearch} />
      </Box>

      <Filter options={categories} onChange={handleOnFilter} />
      <Sort options={[]} onChange={handleOnSort} />
    </Flex>
  );
};

export default memo(ProductListActions);
