import { cn } from '../utils/cn';

/**
 * Card Component
 * Reusable card component for displaying content sections
 * 
 * @param {boolean} hover - Enable hover shadow effect
 * @param {string} className - Additional CSS classes
 */
export default function Card({ children, className = '', hover = true }) {
  // Base styles: background, border radius, shadow, padding
  const baseStyles = 'bg-white rounded-xl shadow-md p-6';
  
  // Conditional hover styles
  const hoverStyles = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  return (
    <div className={cn(baseStyles, hoverStyles, className)}>
      {children}
    </div>
  );
}
