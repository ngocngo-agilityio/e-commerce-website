// Types
import { IUser } from '@types';

export const MOCK_SIGN_UP_PAYLOAD: Omit<IUser, 'id'> = {
  email: 'user+01@gmail.com',
  firstName: 'John',
  lastName: 'A',
  password: 'Abcd@12345',
};

export const MOCK_SUCCESS_SIGN_UP_RES = {
  data: { user: { ...MOCK_SIGN_UP_PAYLOAD, id: '1' } },
  totalCount: 0,
};

export const MOCK_SIGN_IN_PAYLOAD = {
  email: 'user+01@gmail.com',
  password: 'Abcd@12345',
};
