import { formatCurrency } from '../currency';

describe('Format currency', () => {
  test('returns $0.00 when currency is not provided', () => {
    const currency = undefined;

    const result = formatCurrency(currency);

    expect(result).toBe('$0.00');
  });

  test('returns formatted currency', () => {
    const currency = 1000;

    const result = formatCurrency(currency);

    expect(result).toBe('$1,000.00');
  });
});
