# Theme Configuration

## Centralized Color Management

All colors for the LogiCare India website are defined in **`src/theme/theme.css`**.

### How to Change Colors

1. Open `src/theme/theme.css`
2. Modify the CSS variable values (hex codes)
3. Save the file
4. The changes will automatically apply across the entire application

### Color Structure

```css
:root {
  --color-primary-400: #ff6b35;  /* Main brand color */
  --color-primary-500: #ff5722;
  /* ... more shades */
}
```

All colors are defined as CSS custom properties (CSS variables) in `theme.css`.

### Usage in Components

Colors are automatically available in Tailwind classes:
- `bg-primary-500` - Primary background
- `text-primary-600` - Primary text
- `border-primary-300` - Primary border
- `hover:bg-primary-600` - Primary hover state

### Example: Changing Brand Color

To change from orange to blue:
1. Open `src/theme/theme.css`
2. Replace primary color CSS variables with your desired blue shades:
   ```css
   --color-primary-400: #3b82f6;  /* Change from #ff6b35 to blue */
   --color-primary-500: #2563eb;
   ```
3. Save - all components using `primary-*` classes will update automatically

### Current Theme

- **Primary**: Orange (#FF6B35) - Delhivery-inspired
- **Accent**: Blue (#0EA5E9)
- **Neutral**: Gray scale for text and backgrounds
