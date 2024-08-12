// Mocks
import { MOCK_ERROR_MESSAGES, MOCK_ERROR_RESPONSE, MOCK_USERS } from '@mocks';

// APIs
import { getUsers } from '../user';

// Services
import { httpClient, ResponseData } from '@services';

// Types
import { IUser } from '@types';

jest.mock('@configs', () => ({
  ...jest.requireActual('@configs'),
  auth: jest.fn(),
}));

describe('Users APIs', () => {
  describe('getUsers', () => {
    test('get the user list successfully', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue({ data: [...MOCK_USERS], totalCount: 1 });

      const res = await getUsers();

      expect(res.data).toEqual(MOCK_USERS);
    });

    test('get the user list with response is null value', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockResolvedValue(null as unknown as ResponseData<IUser[]>);

      const res = await getUsers();

      expect(res.data).toEqual([]);
    });

    test('get the user list failed', async () => {
      jest
        .spyOn(httpClient, 'getRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      await expect(getUsers()).rejects.toThrow(MOCK_ERROR_MESSAGES);
    });
  });
});
