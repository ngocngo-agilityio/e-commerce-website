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

describe('ProductDetail page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render match with snapshot.', async () => {
    (getProductDetail as jest.Mock).mockReturnValue({
      data: MOCK_PRODUCT_LIST[0],
    });

    const { container } = render(await ProductDetail({ params: { id: '1' } }));

    expect(container).toMatchSnapshot();
  });

  it('Should render ProductDetail correctly', async () => {
    (getProductDetail as jest.Mock).mockReturnValue({
      data: null,
    });

    const { container } = render(
      await ProductDetail({ params: null as unknown as { id: string } }),
    );

    expect(container).toMatchSnapshot();
  });
});
