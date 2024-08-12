// Libs
import { render } from '@testing-library/react';

// Components
import Header from '../';

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getCartItems: jest.fn(),
}));

jest.mock('@sections', () => ({
  ShoppingCart: () => <div>ShoppingCart</div>,
}));

jest.mock('@components', () => ({
  Logo: () => <div>Logo</div>,
  Navigation: () => <div>Navigation</div>,
  UserProfile: () => <div>UserProfile</div>,
}));

describe('Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot for Header', async () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
