// Types
import { Category } from '@types';

export const MOCK_CATEGORIES: Category[] = [
  {
    name: 'Women',
    id: 1,
  },
  {
    name: 'Men',
    id: 2,
  },
  {
    name: 'Polo',
    id: 3,
  },
  {
    name: 'Jacket',
    id: 4,
  },
  {
    name: 'Casual',
    id: 5,
  },
  {
    name: 'Formal',
    id: 6,
  },
];

export const MOCK_TAGS = [
  {
    name: 'Modern',
    id: '1',
  },
  {
    name: 'Classic',
    id: '2',
  },
  {
    name: 'Design',
    id: '3',
  },
  {
    name: 'Cotton',
    id: '4',
  },
];

export const MOCK_CATEGORIES_QUERY_CONFIGS = {
  name: 'test',
  sortDirection: 'desc',
  sortBy: 'name',
  categoryIds: [1],
  page: '1',
  limit: 10,
};
