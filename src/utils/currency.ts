/**
 * @description This function to format currency
 * @param {number} currency - Currency is needed format
 * @returns {string} - Currency have been formatted
 */
export const formatCurrency = (currency: number = 0): string => {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(currency);

  return formattedCurrency;
};
