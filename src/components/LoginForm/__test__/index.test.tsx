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

  const submitForm = (email: string, password: string) => {
    const EMAIL_FIELD = screen.getByPlaceholderText('Your email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Enter password');
    const TOGGLE_PASSWORD_ICON = screen.getByTestId('view-icon');
    const SUBMIT_BTN = screen.getByText('Sign in');

    act(() => {
      // Change email
      fireEvent.change(EMAIL_FIELD, {
        target: { value: email },
      });
      fireEvent.blur(EMAIL_FIELD);

      // Change password
      fireEvent.change(PASSWORD_FIELD, {
        target: { value: password },
      });
      fireEvent.blur(PASSWORD_FIELD);

      fireEvent.click(TOGGLE_PASSWORD_ICON);

      fireEvent.click(SUBMIT_BTN);
    });
  };

  test('should match with snapshot', () => {
    const { container } = render(<LoginForm onSignIn={mockOnSignIn} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onSignIn when submit the valid form', () => {
    render(<LoginForm onSignIn={mockOnSignIn} />);

    // Change form
    submitForm(MOCK_SIGN_IN_PAYLOAD.email, MOCK_SIGN_IN_PAYLOAD.password);

    waitFor(() => {
      expect(mockOnSignIn).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
    });
  });

  test('should show errors when blur with the invalid field', async () => {
    render(<LoginForm onSignIn={mockOnSignIn} />);

    // Change form
    submitForm('a', 'a');

    await waitFor(() => {
      expect(ERROR_MESSAGES.FIELD_INVALID('Email')).toBeTruthy();
      expect(ERROR_MESSAGES.PASSWORD_NOT_LONG).toBeTruthy();
    });
  });
});
