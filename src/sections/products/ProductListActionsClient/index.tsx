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

const ProductListActionsClient = ({ categories }: Props): JSX.Element => {
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
      let updatedParams = updateSearchParams(searchParams, 'name', value);
      updatedParams = updateSearchParams(updatedParams, 'page', '1');

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const handleSortProducts = useCallback(
    (value: string) => {
      const updatedParams = updateSearchParams(searchParams, 'order', value);

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const handleFilterProducts = useCallback(
    (categoryIds: string[]) => {
      const values = categoryIds.filter((item) => item !== '');

      let updatedParams = updateSearchParams(
        searchParams,
        'categoryIds',
        values.toString(),
      );
      updatedParams = updateSearchParams(updatedParams, 'page', '1');

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
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

export default memo(ProductListActionsClient);
