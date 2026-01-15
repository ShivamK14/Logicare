import { cn } from "../utils/cn";

/**
 * Card Component
 * Reusable card component for displaying content sections
 *
 * @param {boolean} hover - Enable hover shadow effect
 * @param {string} className - Additional CSS classes
 */
export default function Card({ children, className = "", hover = true }) {
  // Base styles: background, border radius, shadow, padding - Delhivery style
  const baseStyles = "bg-red-200 rounded-2xl shadow-lg p-8  ";

  // Conditional hover styles - Enhanced for Delhivery style
  const hoverStyles = hover
    ? "hover:shadow-2xl transition-all duration-300"
    : "";

  return (
    <div className={cn(baseStyles, hoverStyles, className)}>{children}</div>
  );
}
