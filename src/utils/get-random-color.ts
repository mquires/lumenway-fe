/**
 * Generates a random hexadecimal color code
 * @returns {string} Random color in format '#RRGGBB'
 */

export const getRandomColor = (): string => {
  let color = '#';
  const letters = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
