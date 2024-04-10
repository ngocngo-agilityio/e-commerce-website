// Libs
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Apis
import { removeCartItem, updateCartItemQuantity } from '@apis';

// Stores
import { useCartStore } from '@stores';

// Mocks
import { MOCK_CART_ITEMS } from '@mocks';

// Components
import CartItems from '../CartItems';

const mockShowToast = jest.fn();
jest.mock('@apis');
jest.mock('@hooks', () => {
  const originalModule = jest.requireActual('@hooks');

  return {
    __esModule: true,
    ...originalModule,
    useCustomToast: jest.fn(() => ({ showToast: mockShowToast })),
  };
});

describe('CartItems', () => {
  beforeEach(() => {
    useCartStore.setState({
      cartItems: [...MOCK_CART_ITEMS],
    });
  });

  test('should render CartItems successfully', () => {
    const { container } = render(<CartItems />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for CartItems', () => {
    const { container } = render(<CartItems />);

    expect(container).toMatchSnapshot();
  });

  test('handle remove cart item', async () => {
    const expectedResponse = {
      error: 'Remove cart item failed',
    };

    (
      removeCartItem as jest.MockedFunction<typeof removeCartItem>
    ).mockResolvedValue(expectedResponse);

    render(<CartItems />);

    fireEvent.click(screen.getByText('x'));

    await waitFor(() =>
      fireEvent.click(screen.getByRole('button', { name: 'Yes' })),
    );

    expect(mockShowToast).toHaveBeenCalled();
  });

  test('handle change quantity', async () => {
    const expectedResponse = {
      error: 'Change quantity cart item failed.',
    };

    (
      updateCartItemQuantity as jest.MockedFunction<
        typeof updateCartItemQuantity
      >
    ).mockResolvedValue(expectedResponse);

    render(<CartItems />);

    await waitFor(() =>
      fireEvent.click(screen.getByRole('button', { name: '+' })),
    );

    expect(mockShowToast).toHaveBeenCalled();
  });
});
