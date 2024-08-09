import {
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react';

// Sections
import SignInSection from '..';

// Mocks
import { MOCK_SIGN_IN_PAYLOAD } from '@mocks';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants';

const mockPush = jest.fn();
const mockSignInWithEmail = jest.fn();

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('@actions', () => ({
  ...jest.requireActual('@actions'),
  signInWithEmail: () => mockSignInWithEmail(),
}));

describe('SignInSection', () => {
  const submitForm = () => {
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
  };

  test('should match with snapshot', () => {
    const { container } = render(<SignInSection />);

    expect(container).toMatchSnapshot();
  });

  test('should sign in successfully', () => {
    mockSignInWithEmail.mockResolvedValue(undefined);
    const { getByText } = render(<SignInSection />);

    submitForm();

    waitFor(() => {
      expect(mockSignInWithEmail).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
      expect(getByText(SUCCESS_MESSAGES.LOGIN)).toBeInTheDocument();
    });
  });

  test('should sign in failed', () => {
    mockSignInWithEmail.mockResolvedValue(ERROR_MESSAGES.INVALID_CREDENTIALS);
    const { getByText } = render(<SignInSection />);

    submitForm();

    waitFor(() => {
      expect(mockSignInWithEmail).toHaveBeenCalledWith(MOCK_SIGN_IN_PAYLOAD);
      expect(getByText(ERROR_MESSAGES.INVALID_CREDENTIALS)).toBeInTheDocument();
    });
  });
});
