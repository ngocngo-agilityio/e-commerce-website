import { Category } from '@types';

export const getNamesFromList = (list: Category[]): string =>
  list.map((item) => item.name).join(', ');
