import { waitFor } from '@testing-library/react';
import { AuthError } from 'next-auth';

// Mocks
import {
  MOCK_SUCCESS_SIGN_UP_RES,
  MOCK_ERROR_RESPONSE,
  MOCK_SIGN_UP_PAYLOAD,
  MOCK_SIGN_IN_PAYLOAD,
  MOCK_SUCCESS_RESPONSE,
} from '@mocks';

// Services
import { httpClient, ResponseData } from '@services';

// Constants
import { AUTH_METHODS, ERROR_MESSAGES, ERROR_TYPES } from '@constants';

// APIs
import { signUp, signInWithEmail } from '../auth';

const mockSignIn = jest.fn();
const mockSignOut = jest.fn();

jest.mock('@configs', () => ({
  signIn: () => mockSignIn,
  signOut: () => mockSignOut,
}));

describe('Auth actions', () => {
  describe('signUp', () => {
    test('should sign up a new account successfully', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(MOCK_SUCCESS_SIGN_UP_RES);

      const user = await signUp(MOCK_SIGN_UP_PAYLOAD);

      waitFor(() => expect(user).toEqual(MOCK_SUCCESS_SIGN_UP_RES.data.user));
    });

    test('should sign up a new account successfully with null value is returned', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(null as unknown as ResponseData<null>);

      const user = await signUp(MOCK_SIGN_UP_PAYLOAD);

      waitFor(() => expect(user).toEqual(undefined));
    });

    test('should sign up a new account failed', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await signUp(MOCK_SIGN_UP_PAYLOAD);

      expect(res?.error).toEqual(ERROR_MESSAGES.EMAIL_EXIST);
    });
  });

  describe('signIn', () => {
    test('should sign in successfully', async () => {
      mockSignIn.mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      await signInWithEmail(MOCK_SIGN_IN_PAYLOAD);

      waitFor(() => {
        expect(mockSignIn).toHaveBeenCalledWith(
          AUTH_METHODS.CREDENTIALS,
          MOCK_SIGN_IN_PAYLOAD,
        );
      });
    });

    test('should sign in failed with email or password incorrect', async () => {
      mockSignIn.mockRejectedValueOnce(
        new AuthError(ERROR_TYPES.CREDENTIALS_SIGN_IN),
      );

      const res = await signInWithEmail(MOCK_SIGN_IN_PAYLOAD);

      waitFor(() => {
        expect(res).toEqual(ERROR_MESSAGES.INVALID_CREDENTIALS);
      });
    });
  });
});
