# 🚀 Quick Start Guide

## View Your Redesigned Portfolio

### Development Server (Currently Running)
Your portfolio is running at:
```
http://localhost:5173/my_portfolio/
```

Open this URL in your browser to see the redesigned portfolio.

### First-Time Setup (if needed)
```bash
cd /Users/adityaranjandas/Desktop/FunWorld/Projects/my_portfolio
npm install
npm run dev
```

## Build for Production

### Create Production Build
```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## Deploy to GitHub Pages

### Option 1: Using npm script (Recommended)
```bash
npm run deploy:docs
```

This will:
1. Build the project
2. Copy build files to `docs/` folder
3. Commit and push to GitHub

### Option 2: Manual deployment
```bash
# Build
npm run build

# Copy to docs
rm -rf docs
cp -r dist docs

# Commit and push
git add docs
git commit -m "Deploy updated portfolio"
git push origin main
```

Then enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages section
3. Set source to `main` branch, `/docs` folder
4. Save

Your site will be live at:
```
https://aditya6371.github.io/my_portfolio/
```

## Project Structure

```
my_portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Premium navigation
│   │   ├── Home.jsx            # Hero with refined profile
│   │   ├── About.jsx           # Developer snapshot + skills
│   │   ├── Projects.jsx        # Featured work showcase
│   │   ├── Experience.jsx      # Professional timeline
│   │   ├── Contact.jsx         # Contact form + social
│   │   ├── Footer.jsx          # Minimal footer
│   │   └── ChatBot.jsx         # Subtle assistant
│   ├── data/
│   │   └── portfolioData.js    # All content (unchanged)
│   ├── assets/                 # Images and icons
│   ├── index.css               # Global styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── index.html                  # HTML template with SEO
├── package.json                # Dependencies
├── vite.config.js             # Build config
├── REDESIGN_SUMMARY.md        # Detailed redesign documentation
├── REQUIREMENTS_CHECKLIST.md  # Complete requirements verification
└── QUICK_START.md             # This file
```

## Key Features

### ✨ Premium Design
- Dark navy + teal accent color scheme
- Subtle layered background
- Clean typography with Inter font
- Sophisticated animations

### 🎯 Technical Identity
Shows platforms, languages, and APIs prominently

### 📱 Fully Responsive
Tested on mobile (320px+), tablet, and desktop

### ♿ Accessible
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Reduced motion support
- Good contrast

### ⚡ Performance
- Optimized animations
- Fast load times
- Clean code

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Linting
npm run lint            # Check code quality

# Deployment
npm run deploy:docs     # Build and deploy to GitHub Pages
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## Making Content Changes

All content is centralized in:
```
src/data/portfolioData.js
```

### Update Personal Info
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your@email.com",
  resumeUrl: "your-resume-url"
  // ...
}
```

### Add a Project
```javascript
export const majorProjects = [
  {
    title: "Project Name",
    description: "Description",
    technologies: ["Tech1", "Tech2"],
    icon: projectIcon,
    // ...
  }
  // ...
]
```

### Update Experience
```javascript
export const experiences = [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Start - End",
    logo: companyLogo,
    description: ["Point 1", "Point 2"]
  }
  // ...
]
```

After updating `portfolioData.js`, the changes will automatically reflect throughout the site.

## Troubleshooting

### Port already in use
If port 5173 is busy:
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### GitHub Pages not updating
1. Check GitHub Actions status
2. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
3. Wait 2-3 minutes for deployment

### Broken images after deployment
Ensure images are in `src/assets/` and imported correctly in `portfolioData.js`

## Support & Documentation

- **Full Redesign Details**: `REDESIGN_SUMMARY.md`
- **Requirements Checklist**: `REQUIREMENTS_CHECKLIST.md`
- **Original Features**: `FEATURES.md`

## Next Steps

1. ✅ Review the portfolio in your browser
2. ✅ Test on mobile device
3. ✅ Update any personal content in `portfolioData.js`
4. ✅ Deploy to GitHub Pages
5. ✅ Share your portfolio!

## Pro Tips

### Optimize Profile Image
Your profile image is quite large (5.9MB). Consider optimizing:
```bash
# Using ImageMagick (if installed)
convert profile.jpg -quality 85 -resize 800x800 profile_optimized.jpg
```

Or use online tools like:
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)

### Test Performance
```bash
npm run build
npm run preview
```
Then use Chrome DevTools > Lighthouse to check performance.

### Add Analytics (Optional)
Consider adding:
- Google Analytics
- Plausible Analytics
- Simple Analytics

### Monitor
After deployment, test:
- All links work
- Forms function correctly
- Mobile responsiveness
- Load times
- Browser compatibility

### Animation Toggle

Set animation toggle in different section to happen everytime or only once
```
viewport={{ once: true }}  // Animates only the first time
```
```
viewport={{ once: false }}  // Animates every time you scroll
```

---

**Your premium portfolio is ready! 🎉**

The redesigned portfolio now positions you as a senior Flutter/mobile engineer with real production experience at Ultraviolette and NewKommerce. The clean, minimal design lets your actual work shine through.
