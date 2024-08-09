import { fireEvent, render, waitFor, screen } from '@testing-library/react';

// Sections
import SignUpSection from '..';

// Mocks
import {
  MOCK_ERROR_MESSAGES,
  MOCK_SIGN_IN_PAYLOAD,
  MOCK_SIGN_UP_PAYLOAD,
} from '@mocks';

// Constants
import { APP_ROUTERS, SUCCESS_MESSAGES } from '@constants';

const mockPush = jest.fn();
const mockSignUp = jest.fn();
const mockCreateCart = jest.fn();

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('@actions', () => ({
  ...jest.requireActual('@actions'),
  signUp: () => mockSignUp(),
  createCart: () => mockCreateCart(),
}));

describe('SignUpSection', () => {
  const submitForm = () => {
    const FIRST_NAME = screen.getByPlaceholderText('First name');
    const LAST_NAME = screen.getByPlaceholderText('Last name');
    const EMAIL_FIELD = screen.getByPlaceholderText('Email');
    const PASSWORD_FIELD = screen.getByPlaceholderText('Password');
    const CONFIRM_PASSWORD_FIELD =
      screen.getByPlaceholderText('Confirm password');
    const SUBMIT_BTN = screen.getByText('Sign up');

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

    // Change Confirm Password field
    fireEvent.change(CONFIRM_PASSWORD_FIELD, {
      target: { value: MOCK_SIGN_UP_PAYLOAD.password },
    });

    fireEvent.click(SUBMIT_BTN);
  };

  test('should match with snapshot', () => {
    const { container } = render(<SignUpSection />);

    expect(container).toMatchSnapshot();
  });

  test('should sign up successfully', () => {
    mockSignUp.mockReturnValue(null);
    mockCreateCart.mockReturnValue(undefined);
    const { getByText } = render(<SignUpSection />);

    submitForm();

    waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
      expect(getByText(SUCCESS_MESSAGES.SIGN_UP)).toBeInTheDocument();
      expect(mockPush).toHaveBeenCalledWith(APP_ROUTERS.SIGN_IN);
    });
  });

  test('should sign up failed with error while call api sign up', () => {
    mockSignUp.mockReturnValue({ error: MOCK_ERROR_MESSAGES });
    mockCreateCart.mockReturnValue({ error: MOCK_ERROR_MESSAGES });
    const { getByText } = render(<SignUpSection />);

    submitForm();

    waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
      expect(getByText(MOCK_ERROR_MESSAGES)).toBeInTheDocument();
    });
  });

  test('should sign up failed with error while call api to create cart', () => {
    mockSignUp.mockReturnValue(null);
    mockCreateCart.mockReturnValue({ error: MOCK_ERROR_MESSAGES });
    const { getByText } = render(<SignUpSection />);

    submitForm();

    waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
      expect(getByText(MOCK_ERROR_MESSAGES)).toBeInTheDocument();
    });
  });
});
