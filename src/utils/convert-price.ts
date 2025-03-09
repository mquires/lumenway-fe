/**
 * Converts a price value to a formatted currency string
 * @param price - Number to be formatted
 * @returns Formatted currency string
 */

export const convertPrice = (price: number) => {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
};
