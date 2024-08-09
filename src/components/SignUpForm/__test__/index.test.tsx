import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
} from '@testing-library/react';

// Mocks
import { MOCK_SIGN_UP_PAYLOAD } from '@mocks';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Components
import SignUpForm from '../index';

describe('SignUpForm', () => {
  const mockOnSignUp = jest.fn();

  test('should match with snapshot', () => {
    const { container } = render(<SignUpForm onSignUp={mockOnSignUp} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onSignUp when submit the valid form', () => {
    render(<SignUpForm onSignUp={mockOnSignUp} />);

    const FIRST_NAME = screen.getByPlaceholderText('First name');
    const LAST_NAME = screen.getByPlaceholderText('Last name');
    const EMAIL_FIELD = screen.getByPlaceholderText('Email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Password');
    const CONFIRM_PASSWORD_FIELD =
      screen.getByPlaceholderText('Confirm password');
    const TOGGLE_PASSWORD_ICON = screen.getByTestId('toggle-password-icon');
    const TOGGLE_CONFIRM_PASSWORD_ICON = screen.getByTestId(
      'toggle-confirm-password-icon',
    );
    const SUBMIT_BTN = screen.getByText('Sign up');

    // Change form
    act(() => {
      // Change First name field
      fireEvent.change(FIRST_NAME, {
        target: { value: MOCK_SIGN_UP_PAYLOAD.firstName },
      });

      // Change Last name field
      fireEvent.change(LAST_NAME, {
        target: { value: MOCK_SIGN_UP_PAYLOAD.lastName },
      });

      // Change Email field
      fireEvent.change(EMAIL_FIELD, {
        target: { value: MOCK_SIGN_UP_PAYLOAD.email },
      });

      // Change Password field
      fireEvent.change(PASSWORD_FIELD, {
        target: { value: MOCK_SIGN_UP_PAYLOAD.password },
      });
      fireEvent.click(TOGGLE_PASSWORD_ICON);

      // Change Confirm Password field
      fireEvent.change(CONFIRM_PASSWORD_FIELD, {
        target: { value: MOCK_SIGN_UP_PAYLOAD.password },
      });
      fireEvent.click(TOGGLE_CONFIRM_PASSWORD_ICON);

      fireEvent.click(SUBMIT_BTN);
    });

    waitFor(() => {
      expect(mockOnSignUp).toHaveBeenCalledWith(MOCK_SIGN_UP_PAYLOAD);
    });
  });

  test('should show errors when blur with the invalid field', async () => {
    render(<SignUpForm onSignUp={mockOnSignUp} />);

    const FIRST_NAME = screen.getByPlaceholderText('First name');
    const LAST_NAME = screen.getByPlaceholderText('Last name');
    const EMAIL_FIELD = screen.getByPlaceholderText('Email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Password');
    const CONFIRM_PASSWORD_FIELD =
      screen.getByPlaceholderText('Confirm password');

    // Change form
    act(() => {
      // Change First name field
      fireEvent.change(FIRST_NAME, {
        target: { value: '' },
      });
      fireEvent.blur(FIRST_NAME);

      // Change Last name field
      fireEvent.change(LAST_NAME, {
        target: { value: '' },
      });
      fireEvent.blur(LAST_NAME);

      // Change Email field
      fireEvent.change(EMAIL_FIELD, {
        target: { value: 'user1' },
      });
      fireEvent.blur(EMAIL_FIELD);

      // Change Password field
      fireEvent.change(PASSWORD_FIELD, {
        target: { value: 'Abcd' },
      });
      fireEvent.blur(PASSWORD_FIELD);

      // Change Confirm Password field
      fireEvent.change(CONFIRM_PASSWORD_FIELD, {
        target: { value: 'Abc' },
      });
      fireEvent.blur(CONFIRM_PASSWORD_FIELD);
    });

    await waitFor(() => {
      expect(ERROR_MESSAGES.FIELD_REQUIRED('First Name')).toBeTruthy();
      expect(ERROR_MESSAGES.FIELD_REQUIRED('Last Name')).toBeTruthy();
      expect(ERROR_MESSAGES.FIELD_INVALID('Email')).toBeTruthy();
      expect(ERROR_MESSAGES.PASSWORD_NOT_LONG).toBeTruthy();
      expect(ERROR_MESSAGES.PASSWORD_NOT_MATCH).toBeTruthy();
    });
  });
});
