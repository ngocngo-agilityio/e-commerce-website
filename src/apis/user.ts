// Services
import { httpClient } from '@services';

// Types
import { IUser } from '@types';

// Constants
import { API_PATH } from '@constants';

export const getUsers = async (): Promise<{ data: IUser[] }> => {
  try {
    const res = await httpClient.getRequest<IUser[]>({
      endpoint: API_PATH.USERS,
      configOptions: { next: { tags: [API_PATH.USERS] } },
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
