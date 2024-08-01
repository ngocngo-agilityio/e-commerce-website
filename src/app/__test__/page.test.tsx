// Libs
import { render } from '@testing-library/react';

// Sections
import Products from '../(dashboard)/page';

jest.mock('@components', () => ({
  Banner: () => <div>Banner</div>,
  SkeletonProductList: () => <div>SkeletonProductList</div>,
  SkeletonProductsActions: () => <div>SkeletonProductsActions</div>,
}));

jest.mock('@sections', () => ({
  ProductList: () => <div>ProductList</div>,
  ProductListActions: () => <div>ProductListActions</div>,
}));

describe('Products page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render match with snapshot.', () => {
    const { container } = render(<Products />);

    expect(container).toMatchSnapshot();
  });
});
