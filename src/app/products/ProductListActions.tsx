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

  const handleSearchProducts = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;

    if (value) {
      params.set('name', value);
    } else {
      params.delete('name');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSortProducts = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('order', value);
    } else {
      params.delete('order');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilterProducts = (categoryIds: string[]) => {
    const params = new URLSearchParams(searchParams);

    console.log('categoryIds', categoryIds);

    if (categoryIds) {
      params.set('categoryIds', categoryIds.toString());
    } else {
      params.delete('categoryIds');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex py="24px" gap="20px">
      <Box maxW="239px">
        <SearchInput defaultValue={name} onChange={handleSearchProducts} />
      </Box>

      <Filter
        options={categories}
        defaultValue={[]}
        onChange={handleFilterProducts}
      />
      <Sort
        options={SORT_OPTIONS}
        defaultValue={order}
        onChange={handleSortProducts}
      />
    </Flex>
  );
};

export default memo(ProductListActions);
