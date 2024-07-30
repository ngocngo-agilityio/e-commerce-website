// Libs
import { render } from '@testing-library/react';

// Sections
import Cart from '../page';

jest.mock('@components', () => ({
  Breadcrumb: () => <div>Breadcrumb</div>,
  SkeletonCartItems: () => <div>SkeletonCartItems</div>,
}));

jest.mock('@sections', () => ({
  CartItems: () => <div>CartItems</div>,
}));

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  preloadGetCartItems: jest.fn(),
}));

describe('Cart page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render match with snapshot.', () => {
    const { container } = render(<Cart />);

    expect(container).toMatchSnapshot();
  });
});
