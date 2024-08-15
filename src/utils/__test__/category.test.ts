import { getNamesFromList, parseCategoryIds } from '../category';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

describe('Utility Category', () => {
  describe('getNamesFromList', () => {
    it('should return a comma-separated string of category names', () => {
      const result = getNamesFromList(MOCK_CATEGORIES);

      expect(result).toBe(
        `${MOCK_CATEGORIES[0].name}, ${MOCK_CATEGORIES[1].name}, ${MOCK_CATEGORIES[2].name}, ${MOCK_CATEGORIES[3].name}, ${MOCK_CATEGORIES[4].name}, ${MOCK_CATEGORIES[5].name}`,
      );
    });
  });

  describe('parseCategoryIds', () => {
    it('should convert a comma-separated string of category IDs into an array of numbers', () => {
      const categoryIds = '1,2,3,4';
      const result = parseCategoryIds(categoryIds);

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
