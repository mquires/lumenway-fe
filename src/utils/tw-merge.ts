import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class names using clsx and tailwind-merge
 * @param inputs - Array of class values to merge
 * @returns Merged class names
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
