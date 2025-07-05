// Data export/import utilities for portfolio management
import portfolioData from '../data/portfolioData.js';

export const exportPortfolioData = () => {
    const dataToExport = {
        personalInfo: portfolioData.personalInfo,
        socialLinks: portfolioData.socialLinks,
        aboutContent: portfolioData.aboutContent,
        skills: portfolioData.skills,
        education: portfolioData.education,
        experiences: portfolioData.experiences,
        majorProjects: portfolioData.majorProjects,
        minorProjects: portfolioData.minorProjects,
        contactInfo: portfolioData.contactInfo,
        navItems: portfolioData.navItems
    };

    const jsonData = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

export const generateDataTemplate = () => {
    const template = {
        personalInfo: {
            name: "Your Full Name",
            title: "Your Professional Title",
            greeting: "Hi, my name is",
            description: "Brief description about yourself and your work",
            email: "your.email@example.com",
            phone: "+1234567890",
            location: "Your City, State/Country",
            resumeUrl: "https://your-resume-url.com"
        },
        socialLinks: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourprofile",
            email: "mailto:your.email@example.com",
            whatsapp: "https://wa.me/1234567890"
        },
        aboutContent: {
            bio: [
                "First paragraph about your background and experience",
                "Second paragraph about your goals and interests"
            ]
        },
        skills: {
            "Programming Languages": ["Language 1", "Language 2", "Language 3"],
            "Frameworks & Tools": ["Framework 1", "Tool 1", "Tool 2"],
            "Technologies": ["Technology 1", "Technology 2", "Technology 3"]
        },
        education: [
            {
                school: "University/College Name",
                degree: "Degree Title",
                duration: "Start Year - End Year",
                gpa: "Your GPA (optional)",
                highlights: ["Achievement 1", "Achievement 2"]
            }
        ],
        experiences: [
            {
                company: "Company Name",
                position: "Job Title",
                duration: "Start Date - End Date",
                description: [
                    "Responsibility or achievement 1",
                    "Responsibility or achievement 2",
                    "Responsibility or achievement 3"
                ]
            }
        ],
        majorProjects: [
            {
                title: "Project Name",
                description: "Detailed description of the project",
                technologies: ["Tech 1", "Tech 2", "Tech 3"],
                playStore: "https://play.google.com/store/apps/details?id=com.example",
                appStore: "https://apps.apple.com/app/example/id123456789",
                github: "https://github.com/user/repo",
                demo: "https://example.com",
                category: "Project Category"
            }
        ],
        minorProjects: [
            {
                title: "Minor Project Name",
                technologies: ["Tech 1", "Tech 2"],
                description: "Brief description of the project"
            }
        ],
        contactInfo: {
            title: "Get In Touch",
            description: [
                "First paragraph about your availability and interest in opportunities",
                "Second paragraph about your skills and what you bring to projects"
            ]
        }
    };

    const jsonData = JSON.stringify(template, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data-template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

// Generate markdown version of portfolio data for easy editing
export const exportToMarkdown = () => {
    const data = portfolioData;

    let markdown = `# Portfolio Data\n\n`;

    // Personal Info
    markdown += `## Personal Information\n`;
    markdown += `- **Name**: ${data.personalInfo.name}\n`;
    markdown += `- **Title**: ${data.personalInfo.title}\n`;
    markdown += `- **Email**: ${data.personalInfo.email}\n`;
    markdown += `- **Phone**: ${data.personalInfo.phone}\n`;
    markdown += `- **Location**: ${data.personalInfo.location}\n`;
    markdown += `- **Resume**: ${data.personalInfo.resumeUrl}\n\n`;

    // About
    markdown += `## About\n`;
    data.aboutContent.bio.forEach(paragraph => {
        markdown += `${paragraph}\n\n`;
    });

    // Skills
    markdown += `## Skills\n`;
    Object.entries(data.skills).forEach(([category, skills]) => {
        markdown += `### ${category}\n`;
        skills.forEach(skill => {
            markdown += `- ${skill}\n`;
        });
        markdown += `\n`;
    });

    // Education
    markdown += `## Education\n`;
    data.education.forEach(edu => {
        markdown += `### ${edu.school}\n`;
        markdown += `- **Degree**: ${edu.degree}\n`;
        markdown += `- **Duration**: ${edu.duration}\n`;
        if (edu.gpa) markdown += `- **GPA**: ${edu.gpa}\n`;
        if (edu.highlights) {
            markdown += `- **Highlights**:\n`;
            edu.highlights.forEach(highlight => {
                markdown += `  - ${highlight}\n`;
            });
        }
        markdown += `\n`;
    });

    // Experience
    markdown += `## Experience\n`;
    data.experiences.forEach(exp => {
        markdown += `### ${exp.company}\n`;
        markdown += `**${exp.position}** | ${exp.duration}\n\n`;
        exp.description.forEach(desc => {
            markdown += `- ${desc}\n`;
        });
        markdown += `\n`;
    });

    // Projects
    markdown += `## Major Projects\n`;
    data.majorProjects.forEach(project => {
        markdown += `### ${project.title}\n`;
        markdown += `${project.description}\n\n`;
        markdown += `**Technologies**: ${project.technologies.join(', ')}\n\n`;
        if (project.playStore) markdown += `**Play Store**: ${project.playStore}\n`;
        if (project.appStore) markdown += `**App Store**: ${project.appStore}\n`;
        if (project.github) markdown += `**GitHub**: ${project.github}\n`;
        if (project.demo) markdown += `**Demo**: ${project.demo}\n`;
        markdown += `\n`;
    });

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

export default {
    exportPortfolioData,
    generateDataTemplate,
    exportToMarkdown
};
