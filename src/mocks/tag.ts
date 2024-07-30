// Types
import { ITag } from '@types';

export const MOCK_TAG: ITag = {
  id: 1,
  label: 'Women',
};

export const MOCK_TAG_LIST: ITag[] = [
  {
    id: 1,
    label: 'Women',
  },
  {
    id: 2,
    label: 'Man',
  },
];

export const MOCK_TAGS_QUERY_CONFIGS = {
  name: 'test',
  sortDirection: 'desc',
  sortBy: 'name',
  ids: [1],
  page: '1',
  limit: 10,
};
