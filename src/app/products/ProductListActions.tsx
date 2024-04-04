'use client';

// Libs
import { ChangeEvent, memo } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// Types
import { Category } from '@types';

// Utils
import { getSearchParams } from '@utils';

// Constants
import { SORT_OPTIONS } from '@constants';

// Components
import { SearchInput, Filter, Sort } from '@components';

interface Props {
  categories: Category[];
}

const ProductListActions = ({ categories }: Props): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { name, order } = getSearchParams(searchParams);

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;

    if (value) {
      params.set('name', value);
    } else {
      params.delete('name');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleOnSort = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('order', value);
    } else {
      params.delete('order');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  // TODO: Update later
  const handleOnFilter = () => {};

  return (
    <Flex py="24px" gap="20px">
      <Box maxW="239px">
        <SearchInput defaultValue={name} onChange={handleOnSearch} />
      </Box>

      <Filter options={categories} onChange={handleOnFilter} />
      <Sort
        options={SORT_OPTIONS}
        defaultValue={order}
        onChange={handleOnSort}
      />
    </Flex>
  );
};

export default memo(ProductListActions);
