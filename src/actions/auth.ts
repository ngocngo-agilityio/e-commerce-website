'use server';

import { AuthError } from 'next-auth';

// Auth configs
import { signIn } from '@auth/index';

// Constants
import { API_PATH, ERROR_MESSAGES } from '@constants';

// Services
import { httpClient } from '@services';

// Types
import { IUser } from '@types';

type ISignUpPayload = Omit<IUser, 'id'>;

type ISignUpResponse = { user: Omit<IUser, 'password'> };

type ISignInPayload = {
  email: string;
  password: string;
};

export const signUp = async (
  payload: ISignUpPayload,
): Promise<{ error?: string; user?: Omit<IUser, 'password'> }> => {
  try {
    const res = await httpClient.postRequest<ISignUpPayload, ISignUpResponse>({
      endpoint: API_PATH.SIGN_UP,
      body: payload,
    });

    const { data } = res || {};
    const { user } = data || {};

    return { user };
  } catch (error) {
    return { error: ERROR_MESSAGES.EMAIL_EXIST };
  }
};

export const signInWithEmail = async (payload: ISignInPayload) => {
  try {
    await signIn('credentials', payload);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }
};
