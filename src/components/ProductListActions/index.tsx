'use client';

// Libs
import { Flex, Box } from '@chakra-ui/react';

// Components
import { SearchInput, Filter, Sort } from '@components';

const ProductListActions = (): JSX.Element => {
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

      <Filter options={[]} onChange={handleOnFilter} />
      <Sort options={[]} onChange={handleOnSort} />
    </Flex>
  );
};

export default ProductListActions;
