import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

/**
 * Header Component
 * Main navigation header with logo and menu items
 * Organized with consistent class ordering: layout → spacing → typography → colors → effects
 */
export default function Header() {
  // Reusable nav link styles with glass hover effect
  const navLinkStyles =
    "text-gray-700 hover:text-accent-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/40 hover:backdrop-blur-md hover:backdrop-saturate-150 hover:shadow-sm";

  return (
    <header className="sticky top-0 z-50  backdrop-blur-sm bg-black/5 backdrop-saturate-150 border-b border-white/30 shadow-md shadow-black/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-600 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LC</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              LogiCare India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkStyles}>
              Home
            </Link>
            <Link to="/services" className={navLinkStyles}>
              Services
            </Link>
            <Link to="/pricing" className={navLinkStyles}>
              Pricing
            </Link>
            <Link to="/about" className={navLinkStyles}>
              About
            </Link>
            <Link to="/contact" className={navLinkStyles}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-colors font-medium"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-accent-600 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
