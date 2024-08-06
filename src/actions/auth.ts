'use server';

// Constants
import { API_PATH, ERROR_MESSAGES } from '@constants';

// Services
import { httpClient } from '@services';

// Types
import { IUser } from '@types';

type ISignUpPayload = Omit<IUser, 'id'>;

type ISignUpResponse = { user: Omit<IUser, 'password'> };

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
