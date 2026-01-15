# CSS Structure & Best Practices

## File Organization

```
src/
├── index.css          # Main CSS file with Tailwind imports and base styles
├── components/        # Component-specific styles (if needed)
└── styles/           # Additional utility styles (if needed)
```

## Tailwind CSS v4 Setup

- **Main CSS**: `src/index.css` - Contains Tailwind imports and theme configuration
- **PostCSS Config**: `postcss.config.js` - Uses `@tailwindcss/postcss` plugin
- **Theme Variables**: Defined in `@theme` block in `index.css`

## Class Ordering Convention

When writing Tailwind classes, follow this order for consistency:

1. **Layout** (display, position, flex, grid)
2. **Spacing** (padding, margin)
3. **Sizing** (width, height)
4. **Typography** (font, text, line-height)
5. **Colors** (background, text, border)
6. **Effects** (shadow, opacity, transitions)
7. **Responsive** (sm:, md:, lg:)
8. **State** (hover:, focus:, active:)

### Example:
```jsx
<div className="flex items-center justify-between p-4 w-full text-lg font-semibold bg-white text-gray-900 shadow-md hover:shadow-lg transition-shadow md:p-6">
```

## Component Styling Guidelines

1. **Use Reusable Components**: Button, Card, etc. with variants
2. **Extract Repeated Styles**: Use `cn()` utility for class merging
3. **Consistent Spacing**: Use Tailwind spacing scale (4, 6, 8, 12, 16, etc.)
4. **Color Tokens**: Always use theme colors (accent-*, primary-*, gray-*)
5. **Responsive First**: Mobile-first approach with breakpoints

## Utility Functions

- `cn()` - Located in `src/utils/cn.js` - Merges class names safely

## Theme Colors

- **Primary**: Teal shades (primary-50 to primary-900)
- **Accent**: Blue shades (accent-50 to accent-900)
- **Gray**: Standard gray scale for text and backgrounds
