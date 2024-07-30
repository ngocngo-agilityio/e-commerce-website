// Libs
import { render } from '@testing-library/react';

// Apis
import { getCartItems } from '@apis';

// Mocks
import { MOCK_CART_ITEMS } from '@mocks';

// Components
import Header from '..';

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getCartItems: jest.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    (
      getCartItems as jest.MockedFunction<typeof getCartItems>
    ).mockResolvedValue({ data: MOCK_CART_ITEMS });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render Header successfully', async () => {
    (
      getCartItems as jest.MockedFunction<typeof getCartItems>
    ).mockResolvedValue({ data: [] });

    const { container } = render(await Header());

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Header', async () => {
    const { container } = render(await Header());

    expect(container).toMatchSnapshot();
  });
});
