import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS classnames generator
 *
 * @param inputs - Classnames to be merged
 * @returns Tailwind CSS classnames
 * 
 * @example
 * ```tsx
 * import { cn } from 'lib/utils';
 *
 * const className = cn('text-red-500', 'bg-blue-500');
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
