// Libs
import { AxiosError } from 'axios';

// Constants
import { ERROR_MESSAGES } from '@constants';

export const getErrorMessageFromApi = (error: unknown): string => {
  let message = '';

  if (error instanceof AxiosError) {
    message = error.response?.data;
  }

  // Set default message if unknown error
  if (!message) {
    message = ERROR_MESSAGES.REQUEST;
  }

  return message;
};
