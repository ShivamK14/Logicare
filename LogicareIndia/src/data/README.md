# Data Files

## Contact Information

All contact information is centralized in `src/data/contact.js`.

### How to Update Contact Information

1. Open `src/data/contact.js`
2. Modify the values in the `contactInfo` object
3. Save the file
4. Changes will automatically apply to:
   - Footer component
   - Contact page
   - All other components using contact info

### Available Contact Fields

- `companyName` - Company name
- `email` - Main email address
- `phone` - Phone number (formatted for display)
- `phoneLink` - Phone number (for tel: links)
- `address` - Physical address
- `social` - Social media links (LinkedIn, Twitter, etc.)
- `support` - Support contact info
- `sales` - Sales contact info

### Example: Change Email

```javascript
export const contactInfo = {
  email: "newemail@logicareindia.com",  // Change this
  // ... rest of the config
};
```
