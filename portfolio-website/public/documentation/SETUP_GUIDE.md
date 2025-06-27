
# Portfolio Website Setup Guide

## Quick Start

### 1. Clone or Download
```bash
# If using Git
git clone <repository-url>
cd portfolio-website

# Or download and extract ZIP file
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## Customization Steps

### Personal Information

#### 1. Update Hero Section
Edit `src/components/Hero.jsx`:
```jsx
// Line 15-20
<h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
  Your Name Here
</h1>
<div className="text-xl md:text-2xl text-muted-foreground mb-8">
  <TypewriterText text="Your Title • Your Specialization • Your Focus" />
</div>
```

#### 2. Update About Section
Edit `src/components/About.jsx`:
- Replace professional summary (lines 25-35)
- Update core competencies (lines 40-80)
- Add your professional photo

#### 3. Update Skills
Edit `src/components/Skills.jsx`:
- Modify skill categories (lines 8-50)
- Add/remove technologies
- Update proficiency levels

#### 4. Update Projects
Edit `src/components/Projects.jsx`:
- Replace project data (lines 8-40)
- Update project images
- Add your GitHub and live demo links

#### 5. Update Experience
Edit `src/components/Experience.jsx`:
- Add your work experience
- Update education details
- Modify timeline entries

#### 6. Update Contact Information
Edit `src/components/Contact.jsx`:
- Update contact details
- Modify social media links
- Configure contact form

### Resume Setup

1. Replace `public/resume-momen-kelany.pdf` with your resume
2. Update the filename in `src/components/Hero.jsx`:
```jsx
<a href="/your-resume-filename.pdf" download>
```

### Styling Customization

#### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #2563eb;        /* Main brand color */
  --secondary: #10b981;      /* Accent color */
  --background: #0f172a;     /* Dark background */
  --card: #1e293b;          /* Card background */
}
```

#### Fonts
Update font imports in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@400;500;600;700&display=swap');
```

#### Layout
Modify container widths and spacing in components using Tailwind classes.

## Advanced Configuration

### Environment Variables
Create `.env` file for sensitive data:
```
VITE_CONTACT_FORM_API=your-api-endpoint
VITE_ANALYTICS_ID=your-analytics-id
```

### PWA Configuration
Edit `public/manifest.json`:
```json
{
  "name": "Your Name - Portfolio",
  "short_name": "Your Portfolio",
  "description": "Personal portfolio website",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2563eb",
  "background_color": "#0f172a"
}
```

### SEO Optimization
Update `index.html`:
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Your professional description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
```

## Deployment Options

### Replit (Recommended)
1. Push changes to your Replit project
2. Click "Deploy" in the Deployments tab
3. Your site will be live at your Replit URL

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Configure build settings if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Troubleshooting

### Common Issues

#### Build Errors
- Check Node.js version (16+ required)
- Clear node_modules and reinstall
- Check for syntax errors in components

#### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify CSS imports

#### Image Loading
- Ensure images are in `public` folder
- Use correct paths (start with `/`)
- Optimize image sizes for web

#### Contact Form
- Configure form handling service
- Add proper validation
- Test form submission

### Performance Optimization

#### Image Optimization
```jsx
// Use WebP format with fallback
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Description" />
</picture>
```

#### Code Splitting
```jsx
// Lazy load components
const LazyComponent = React.lazy(() => import('./Component'));
```

#### Bundle Analysis
```bash
npm run build
npx vite-bundle-analyzer dist
```

## Maintenance

### Regular Updates
1. Update dependencies monthly
2. Test on different devices/browsers
3. Update content regularly
4. Monitor performance metrics

### Security
1. Keep dependencies updated
2. Use HTTPS in production
3. Sanitize form inputs
4. Implement CSP headers

## Support

### Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Radix UI Components](https://radix-ui.com)

### Getting Help
1. Check the documentation
2. Search existing issues
3. Ask in community forums
4. Contact support

---

*Happy coding! 🚀*
