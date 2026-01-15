# Theme Color Changelog

## How to Change Theme Colors

### Quick Start
1. Open `src/theme/theme.css`
2. Modify the CSS variable hex codes
3. Save the file
4. Changes apply automatically!

### Example: Change Primary Color to Blue

**Before:**
```css
--color-primary-400: #ff6b35;  /* Orange */
--color-primary-500: #ff5722;
```

**After:**
```css
--color-primary-400: #3b82f6;  /* Blue */
--color-primary-500: #2563eb;
```

### Color Scale Explanation

Each color has shades from 50 (lightest) to 900 (darkest):
- **50-100**: Very light, for backgrounds
- **200-300**: Light, for hover states
- **400-500**: Main brand color
- **600-700**: Darker, for hover/active states
- **800-900**: Very dark, for text on light backgrounds

### Recommended Changes

To match a different brand:
1. Find your brand's primary color hex code
2. Use a color palette generator (like https://tailwindcss.com/docs/customizing-colors)
3. Replace the primary color values
4. Keep the same shade structure (50-900)
