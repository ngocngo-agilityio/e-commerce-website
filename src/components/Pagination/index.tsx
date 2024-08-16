'use client';

// Libs
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { memo, useCallback } from 'react';
import { Center } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  PaginationPrevious,
  Pagination as PaginationA,
  PaginationPageGroup,
  PaginationPage,
  PaginationNext,
  usePagination,
} from '@ajna/pagination';

// Utils
import { getSearchParams, updateSearchParams } from '@utils';

// Constants
import { DEFAULT_PAGE, SEARCH_QUERIES } from '@constants';

interface Props {
  pagesQuantity: number;
}

const Pagination = ({ pagesQuantity }: Props): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { page } = getSearchParams(searchParams);
  const selectedPage = parseInt(page) || DEFAULT_PAGE;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: pagesQuantity,
    initialState: { currentPage: selectedPage },
  });

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);

      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.PAGE,
        page.toString(),
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams, setCurrentPage],
  );

  return (
    <Center>
      <PaginationA
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <>
          <PaginationPrevious
            variant="outline"
            bg="pagination.color"
            color="pagination.bg"
            _hover={{ bg: 'pagination.color', color: 'pagination.hoverBg' }}
          >
            <ArrowLeftIcon />
          </PaginationPrevious>

          <PaginationPageGroup style={{ display: 'flex', gap: '10px' }}>
            <>
              {pages.map((page) => (
                <PaginationPage
                  key={`Pagination_page_${page}`}
                  page={page}
                  w="25px"
                  h="25px"
                  bg="transparent"
                  color="pagination.defaultColor"
                  border="none"
                  fontSize="md"
                  fontWeight="normal"
                  _hover={{
                    bg: 'pagination.hoverBg',
                    color: 'pagination.color',
                  }}
                  _current={{
                    w: '25px',
                    h: '25px',
                    bg: 'pagination.activeBg',
                    color: 'pagination.color',
                    fontSize: 'md',
                    fontWeight: 'normal',

                    _hover: {
                      bg: 'pagination.hoverBg',
                    },
                  }}
                />
              ))}
            </>
          </PaginationPageGroup>

          <PaginationNext
            variant="outline"
            bg="pagination.color"
            color="pagination.bg"
            _hover={{ bg: 'pagination.color', color: 'pagination.hoverBg' }}
          >
            <ArrowRightIcon />
          </PaginationNext>
        </>
      </PaginationA>
    </Center>
  );
};

export default memo(Pagination);
