'use client';

// Libs
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// Types
import { Category } from '@types';

// Utils
import { getSearchParams, updateSearchParams } from '@utils';

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

  const { name, order, categoryIds = '' } = getSearchParams(searchParams);

  const filterDefaultValue = useMemo(
    () => categoryIds.split(','),
    [categoryIds],
  );

  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const updatedParams = updateSearchParams(searchParams, 'name', value);

      replace(`${pathname}?${updatedParams.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  const handleSortProducts = useCallback(
    (value: string) => {
      const updatedParams = updateSearchParams(searchParams, 'order', value);

      replace(`${pathname}?${updatedParams.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  const handleFilterProducts = useCallback(
    (categoryIds: string[]) => {
      const values = categoryIds.filter((item) => item !== '');

      const updatedParams = updateSearchParams(
        searchParams,
        'categoryIds',
        values.toString(),
      );

      replace(`${pathname}?${updatedParams.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  return (
    <Flex py="24px" gap="20px">
      <Box maxW="239px">
        <SearchInput defaultValue={name} onChange={handleSearchProducts} />
      </Box>

      <Filter
        options={categories}
        defaultValue={filterDefaultValue}
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
