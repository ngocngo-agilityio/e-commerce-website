'use client';

// Libs
import { ChangeEvent, useCallback, useMemo } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// Types
import { Category, ITag } from '@types';

// Utils
import { getSearchParams, parseCategoryIds, updateSearchParams } from '@utils';

// Constants
import { DEFAULT_PAGE, SEARCH_QUERIES, SORT_OPTIONS } from '@constants';

// Components
import { SearchInput, Filter, Sort, TagList } from '@components';

interface Props {
  categories: Category[];
}

const ProductListActionsClient = ({ categories }: Props): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { name, order, categoryIds = '' } = getSearchParams(searchParams);

  const filterDefaultValues = useMemo(
    () => parseCategoryIds(categoryIds),
    [categoryIds],
  );

  const selectedCategories: Category[] = useMemo(
    () =>
      filterDefaultValues
        .map((id) => categories.find((category) => category.id === id))
        .filter((item): item is Category => !!item),
    [categories, filterDefaultValues],
  );

  const tags: ITag[] = useMemo(
    () =>
      selectedCategories.map((item) => {
        const { id, name = '' } = item || {};

        return { id, label: name };
      }),
    [selectedCategories],
  );

  const handleRemoveCategory = useCallback(
    (id: number) => {
      const categoryIdsAfterRemove = filterDefaultValues.filter(
        (item) => +item !== id,
      );
      let updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.CATEGORIES,
        categoryIdsAfterRemove.toString(),
      );
      updatedParams = updateSearchParams(
        updatedParams,
        SEARCH_QUERIES.PAGE,
        DEFAULT_PAGE.toString(),
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [filterDefaultValues, pathname, replace, searchParams],
  );

  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.NAME,
        value,
      );
      updatedParams = updateSearchParams(
        updatedParams,
        SEARCH_QUERIES.PAGE,
        DEFAULT_PAGE.toString(),
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const handleSortProducts = useCallback(
    (value: string) => {
      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.ORDER,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  const handleFilterProducts = useCallback(
    (categoryIds: number[]) => {
      const values = categoryIds;

      let updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.CATEGORIES,
        values.toString(),
      );
      updatedParams = updateSearchParams(
        updatedParams,
        SEARCH_QUERIES.PAGE,
        DEFAULT_PAGE.toString(),
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  return (
    <Flex gap={3} flexDir="column" minH={{ base: '232px', md: '104px' }}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: '16px', md: '20px' }}
      >
        <Box w={{ base: 'full', md: '245px' }}>
          <SearchInput defaultValue={name} onChange={handleSearchProducts} />
        </Box>

        <Filter
          options={categories}
          defaultValue={filterDefaultValues}
          onChange={handleFilterProducts}
        />
        <Sort
          options={SORT_OPTIONS}
          defaultValue={order}
          onChange={handleSortProducts}
        />
      </Flex>
      <Flex gap={4} wrap="wrap" pb={{ base: 5, md: 3 }}>
        <TagList tags={tags} onClose={handleRemoveCategory} />
      </Flex>
    </Flex>
  );
};

export default ProductListActionsClient;
