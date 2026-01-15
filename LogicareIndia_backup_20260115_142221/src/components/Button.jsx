import { cn } from '../utils/cn';

/**
 * Button Component
 * Reusable button component with variants and consistent styling
 * 
 * @param {string} variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {string} className - Additional CSS classes
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) {
  // Base styles: layout, typography, transitions, focus states
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles: colors and hover states
  const variants = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-50 focus:ring-accent-500',
    ghost: 'text-accent-600 hover:bg-accent-50 focus:ring-accent-500',
  };
  
  // Size styles: padding and typography
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
