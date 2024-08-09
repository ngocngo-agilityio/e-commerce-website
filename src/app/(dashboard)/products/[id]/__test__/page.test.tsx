// Libs
import { render } from '@testing-library/react';

// Sections
import ProductDetail from '../page';

// Mocks
import { MOCK_PRODUCT_LIST } from '@mocks';

// Apis
import { getProductDetail } from '@apis';

jest.mock('@components', () => ({
  Rating: () => <div>Rating</div>,
  SkeletonAddCartAction: () => <div>SkeletonAddCartAction</div>,
  SkeletonProductCategories: () => <div>SkeletonProductCategories</div>,
}));

jest.mock('@sections', () => ({
  AddCartAction: () => <div>AddCartAction</div>,
  Categories: () => <div>Categories</div>,
  Tags: () => <div>Tags</div>,
}));

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getProductDetail: jest.fn(),
}));

const mockNotFound = jest.fn();

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  notFound: () => mockNotFound(),
}));

describe('ProductDetail page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Product Detail page', () => {
    it('Should render match with snapshot.', async () => {
      (getProductDetail as jest.Mock).mockReturnValue({
        data: MOCK_PRODUCT_LIST[0],
      });

      const { container } = render(
        await ProductDetail({ params: { id: '1' } }),
      );

      expect(container).toMatchSnapshot();
    });

    it('Should navigate to notFound when no have product', async () => {
      (getProductDetail as jest.Mock).mockReturnValue({
        data: null,
      });

      render(
        await ProductDetail({ params: null as unknown as { id: string } }),
      );

      expect(mockNotFound).toHaveBeenCalled();
    });
  });
});
