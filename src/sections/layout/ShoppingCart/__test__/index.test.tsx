// Libs
import { render } from '@testing-library/react';

// Apis
import { getCartItems } from '@apis';

// Mocks
import { MOCK_CART } from '@mocks';

// Types
import { ICart } from '@types';

// Components
import ShoppingCart from '..';

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getCartItems: jest.fn(),
}));

describe('ShoppingCart section', () => {
  beforeEach(() => {
    (
      getCartItems as jest.MockedFunction<typeof getCartItems>
    ).mockResolvedValue({ data: MOCK_CART });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render ShoppingCart successfully', async () => {
    (
      getCartItems as jest.MockedFunction<typeof getCartItems>
    ).mockResolvedValue({ data: null as unknown as ICart });

    const { container } = render(await ShoppingCart());

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for ShoppingCart', async () => {
    const { container } = render(await ShoppingCart());

    expect(container).toMatchSnapshot();
  });
});
