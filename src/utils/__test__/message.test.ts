// Constants
import { ERROR_MESSAGES } from '@constants';

// Utils
import { getErrorMessageFromApi } from '../message';

describe('getErrorMessageFromApi', () => {
  test('returns the default error message if unknown error', () => {
    const unknownError = {};

    const result = getErrorMessageFromApi(unknownError);

    expect(result).toBe(ERROR_MESSAGES.REQUEST);
  });
});
