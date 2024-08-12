'use server';

import { AuthError } from 'next-auth';

// Auth configs
import { signIn } from '@configs';

// Constants
import {
  API_PATH,
  AUTH_METHODS,
  ERROR_MESSAGES,
  ERROR_TYPES,
} from '@constants';

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
    await signIn(AUTH_METHODS.CREDENTIALS, payload);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case ERROR_TYPES.CREDENTIALS_SIGN_IN:
          return ERROR_MESSAGES.INVALID_CREDENTIALS;
        default:
          return ERROR_MESSAGES.UNKNOWN_ERROR;
      }
    }

    throw error;
  }
};
