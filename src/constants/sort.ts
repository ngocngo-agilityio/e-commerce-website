// Types
import { SortOption } from '@types';

export const SORT_OPTIONS: SortOption[] = [
  { value: '', label: 'Default' },
  { value: 'asc', label: 'Increment by name' },
  { value: 'desc', label: 'Decrement by name' },
];

export const SORT_BY = {
  NAME: 'name',
};
