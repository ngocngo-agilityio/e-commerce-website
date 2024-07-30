// Libs
import { render } from '@testing-library/react';

// Sections
import ProductListSection from '../index';

// Apis
import { getProductList } from '@apis';

// Mocks
import { MOCK_PRODUCT_LIST, MOCK_SORT_OPTIONS } from '@mocks';

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getProductList: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockReturnValue({ replace: () => jest.fn() }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams('')),
}));

describe('ProductListSection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render match with snapshot.', async () => {
    (
      getProductList as jest.MockedFunction<typeof getProductList>
    ).mockResolvedValue({
      data: MOCK_PRODUCT_LIST,
      total: MOCK_PRODUCT_LIST.length,
    });

    const { container } = render(
      await ProductListSection({ sortDirection: MOCK_SORT_OPTIONS[0].value }),
    );

    expect(container).toMatchSnapshot();
  });
});
