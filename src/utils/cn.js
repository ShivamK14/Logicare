/**
 * Utility function to merge class names
 * Helps with conditional classes and prevents issues with undefined/null values
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
