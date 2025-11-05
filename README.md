# Ebook Sales Website

A modern, responsive website for selling ebooks with clear call-to-action buttons and an engaging user experience.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Clear CTAs**: Prominent call-to-action buttons throughout the site
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling, hover effects, and fade-in animations
- **Ebook Showcase**: Grid layout displaying ebooks with covers, descriptions, and pricing
- **Contact Form**: Built-in contact form for customer inquiries
- **Hero Section**: Eye-catching hero section with primary CTAs

## Sections

1. **Navigation Bar**: Sticky navigation with links to all sections
2. **Hero Section**: Bold headline with primary CTAs
3. **Features Section**: Highlights key benefits (Instant Access, Expert Content, etc.)
4. **Ebooks Showcase**: Grid of 6 sample ebooks with buy buttons
5. **CTA Section**: Additional call-to-action for conversions
6. **Contact Form**: Easy way for customers to get in touch
7. **Footer**: Links and information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- SVG graphics for ebook covers

## Getting Started

Simply open `index.html` in a web browser to view the website.

```bash
# Open in default browser (macOS)
open index.html

# Open in default browser (Linux)
xdg-open index.html

# Or use a local server
python -m http.server 8000
```

## Customization

### Adding Your Own Ebooks

Edit the ebook cards in `index.html` within the `.ebooks-grid` section. Each card includes:
- Cover image (SVG - easily customizable)
- Title
- Description
- Metadata (pages, level)
- Price
- Buy button

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* Add your brand colors here */
}
```

### Integration with Payment Gateway

Replace the alert in `script.js` with actual payment gateway integration (Stripe, PayPal, etc.):

```javascript
// In script.js, update the buy button handler
button.addEventListener('click', function(e) {
    // Add your payment gateway code here
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
