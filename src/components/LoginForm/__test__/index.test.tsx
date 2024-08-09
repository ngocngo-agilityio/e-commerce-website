import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
} from '@testing-library/react';

// Mocks
import { MOCK_SIGN_IN_PAYLOAD } from '@mocks';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Components
import LoginForm from '../index';

describe('LoginForm', () => {
  const mockOnSignIn = jest.fn();

  test('should match with snapshot', () => {
    const { container } = render(<LoginForm onSignIn={mockOnSignIn} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onSignIn when submit the valid form', () => {
    render(<LoginForm onSignIn={mockOnSignIn} />);

    const EMAIL_FIELD = screen.getByPlaceholderText('Your email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Enter password');
    const TOGGLE_PASSWORD_ICON = screen.getByTestId('view-icon');
    const SUBMIT_BTN = screen.getByText('Sign in');

    // Change form
    act(() => {
      fireEvent.change(EMAIL_FIELD, {
        target: { value: MOCK_SIGN_IN_PAYLOAD.email },
      });

      fireEvent.change(PASSWORD_FIELD, {
        target: { value: MOCK_SIGN_IN_PAYLOAD.password },
      });

      fireEvent.click(TOGGLE_PASSWORD_ICON);

      fireEvent.click(SUBMIT_BTN);
    });

    waitFor(() => {
      expect(mockOnSignIn).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
    });
  });

  test('should show errors when blur with the invalid field', async () => {
    render(<LoginForm onSignIn={mockOnSignIn} />);

    const EMAIL_FIELD = screen.getByPlaceholderText('Your email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Enter password');

    // Change form
    act(() => {
      fireEvent.change(EMAIL_FIELD, {
        target: { value: 'a' },
      });

      fireEvent.blur(EMAIL_FIELD);

      fireEvent.change(PASSWORD_FIELD, {
        target: { value: 'a' },
      });

      fireEvent.blur(PASSWORD_FIELD);
    });

    await waitFor(() => {
      expect(ERROR_MESSAGES.FIELD_INVALID('Email')).toBeTruthy();
      expect(ERROR_MESSAGES.PASSWORD_NOT_LONG).toBeTruthy();
    });
  });
});
