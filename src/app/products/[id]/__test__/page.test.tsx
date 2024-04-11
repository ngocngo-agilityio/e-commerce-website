// Libs
import { render, screen, waitFor } from '@testing-library/react';

// Apis
import { getCategoryList, getProductDetail, getTagList } from '@apis';

// Mocks
import { MOCK_PRODUCT_LIST, MOCK_CATEGORIES, MOCK_TAGS } from '@mocks';

// Components
import ProductDetail from '../page';

jest.mock('@apis');

(
  getProductDetail as jest.MockedFunction<typeof getProductDetail>
).mockResolvedValue({ data: MOCK_PRODUCT_LIST[0] });

(
  getCategoryList as jest.MockedFunction<typeof getCategoryList>
).mockResolvedValue({
  data: MOCK_CATEGORIES,
});

(getTagList as jest.MockedFunction<typeof getTagList>).mockResolvedValue({
  data: MOCK_TAGS,
});

jest.mock('../Tags', () => ({
  __esModule: true,
  default: () => <div>Tags</div>,
}));

jest.mock('../Categories', () => ({
  __esModule: true,
  default: () => <div>Categories</div>,
}));

describe('ProductDetail page', () => {
  test('should render ProductDetail page successfully', async () => {
    const productDetailPage = await ProductDetail({ params: { id: '2' } });

    render(productDetailPage);

    await waitFor(() => {
      expect(screen.getByText(MOCK_PRODUCT_LIST[0].name)).toBeInTheDocument();
    });
  });

  test('should match snapshot for ProductDetail page', async () => {
    const productDetailPage = await ProductDetail({ params: { id: '2' } });

    const { container } = render(productDetailPage);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
