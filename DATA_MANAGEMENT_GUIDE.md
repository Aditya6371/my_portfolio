# Portfolio Data Management Guide

## Overview
This portfolio project now uses a centralized data structure located in `/src/data/portfolioData.js`. This makes it easy to update your personal information, projects, experience, and other content throughout the entire application from a single location.

## Data Structure

### Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  greeting: "Your greeting text",
  description: "Your bio description",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your City, State/Country",
  profileImage: profilePic, // Import your profile image
  resumeUrl: "https://your-resume-url.com"
};
```

### Social Media Links
```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "mailto:your.email@example.com",
  whatsapp: "https://wa.me/1234567890"
};
```

### Skills
```javascript
export const skills = {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  "Another Category": ["Skill A", "Skill B", "Skill C"]
};
```

### Education
```javascript
export const education = [
  {
    school: "University Name",
    degree: "Degree Title",
    duration: "Start Year - End Year",
    gpa: "Your GPA (optional)",
    highlights: ["Achievement 1", "Achievement 2"] // Optional
  }
];
```

### Experience
```javascript
export const experiences = [
  {
    company: "Company Name",
    position: "Job Title",
    duration: "Start Date - End Date",
    logo: companyLogo, // Import company logo
    description: [
      "Responsibility/Achievement 1",
      "Responsibility/Achievement 2",
      "Responsibility/Achievement 3"
    ]
  }
];
```

### Projects
```javascript
export const majorProjects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    playStore: "https://play.google.com/store/apps/details?id=com.example", // Optional
    appStore: "https://apps.apple.com/app/example/id123456789", // Optional
    github: "https://github.com/user/repo", // Optional
    demo: "https://example.com", // Optional
    category: "Project Category",
    icon: projectIcon, // Import project icon
    bgColor: "from-[#color1] to-[#color2]" // Tailwind gradient
  }
];
```

## How to Update Your Data

### 1. Personal Information
Edit the `personalInfo` object in `/src/data/portfolioData.js`:
- Update your name, title, and description
- Change your email and phone number
- Update your resume URL
- Replace the profile image (add new image to `/src/assets/` and update the import)

### 2. Social Links
Update the `socialLinks` object with your actual social media URLs:
- GitHub profile URL
- LinkedIn profile URL
- Email address
- WhatsApp number (in international format)

### 3. Skills
Modify the `skills` object to reflect your actual skills:
- Add new skill categories
- Update existing skills
- Remove irrelevant skills

### 4. Education
Update the `education` array:
- Add new educational institutions
- Update degrees and dates
- Add or remove highlights

### 5. Experience
Update the `experiences` array:
- Add new work experiences
- Update job descriptions
- Add company logos to `/src/assets/` and import them

### 6. Projects
Update the `majorProjects` and `minorProjects` arrays:
- Add new projects
- Update project descriptions
- Add project icons to `/src/assets/` and import them
- Update store links and other URLs

## Asset Management

### Adding New Images
1. Add your image files to `/src/assets/`
2. Import them at the top of `portfolioData.js`
3. Reference them in your data objects

```javascript
// At the top of portfolioData.js
import newImage from "../assets/new-image.png";

// In your data object
icon: newImage,
```

### Supported Image Formats
- PNG
- JPG/JPEG
- SVG
- WebP

## Theme Customization

### Colors
Update the `themeColors` object to change the color scheme:
```javascript
export const themeColors = {
  primary: "#64ffda",        // Accent color
  primaryDark: "#0a192f",    // Dark background
  secondary: "#112240",      // Secondary background
  text: "#ccd6f6",          // Primary text
  textSecondary: "#8892b0",  // Secondary text
  background: "#0a192f"      // Main background
};
```

### Animations
Customize animation settings in the `animations` object:
```javascript
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }
};
```

## Best Practices

1. **Consistent Formatting**: Keep your data consistently formatted for better maintainability
2. **Image Optimization**: Optimize images for web before adding them to assets
3. **URL Validation**: Ensure all URLs are valid and working
4. **Content Length**: Keep descriptions concise but informative
5. **Regular Updates**: Update your data regularly to keep your portfolio current

## File Structure
```
src/
├── data/
│   └── portfolioData.js      # Central data file
├── assets/                   # Images and other assets
│   ├── profile.jpg
│   ├── company-logos/
│   └── project-icons/
└── components/               # React components
    ├── Home.jsx
    ├── About.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    └── Contact.jsx
```

## Tips for Easy Maintenance

1. **Backup Your Data**: Keep a backup of your `portfolioData.js` file
2. **Version Control**: Use git to track changes to your data
3. **Testing**: Test your portfolio after making changes
4. **Mobile-First**: Ensure your content looks good on mobile devices
5. **SEO**: Keep your descriptions SEO-friendly with relevant keywords

## Troubleshooting

### Common Issues:
- **Image not displaying**: Check the import path and file name
- **Link not working**: Verify the URL format and ensure it's accessible
- **Data not updating**: Clear browser cache and restart development server
- **Layout breaking**: Check for long text that might overflow containers

### Getting Help:
If you encounter issues, check:
1. Browser console for errors
2. File paths and imports
3. Data structure consistency
4. Component prop usage

Remember to save your changes and refresh your browser to see updates in your portfolio!
