// Types
import { Category } from '@types';

/**
 * Extracts names from a list of categories and joins them into a single comma-separated string.
 * @param list - An array of Category objects.
 * @returns A string containing all category names, separated by commas.
 */
export const getNamesFromList = (list: Category[]): string =>
  list.map((item) => item.name).join(', ');

/**
 * Converts a comma-separated string of category IDs into an array of numbers.
 * Filters out empty values and converts each ID to a number.
 * @param categoryIds - A comma-separated string of category IDs.
 * @returns An array of numbers representing the category IDs.
 */
export const parseCategoryIds = (categoryIds: string): number[] =>
  categoryIds
    .split(',')
    .filter((item) => item.toString() !== '')
    .map((item) => +item);
