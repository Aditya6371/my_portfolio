// Data validation utilities for portfolio
export const validatePortfolioData = (data) => {
    const errors = [];

    // Validate personal info
    if (!data.personalInfo?.name) errors.push("Personal info: Name is required");
    if (!data.personalInfo?.email) errors.push("Personal info: Email is required");
    if (!data.personalInfo?.description) errors.push("Personal info: Description is required");

    // Validate social links
    if (!data.socialLinks?.github) errors.push("Social links: GitHub URL is required");
    if (!data.socialLinks?.linkedin) errors.push("Social links: LinkedIn URL is required");
    if (!data.socialLinks?.email) errors.push("Social links: Email is required");

    // Validate skills
    if (!data.skills || Object.keys(data.skills).length === 0) {
        errors.push("Skills: At least one skill category is required");
    }

    // Validate education
    if (!data.education || data.education.length === 0) {
        errors.push("Education: At least one education entry is required");
    }

    // Validate experience
    if (!data.experiences || data.experiences.length === 0) {
        errors.push("Experience: At least one experience entry is required");
    }

    // Validate projects
    if (!data.majorProjects || data.majorProjects.length === 0) {
        errors.push("Projects: At least one major project is required");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

export const checkRequiredFields = (obj, requiredFields, context) => {
    const errors = [];

    requiredFields.forEach(field => {
        if (!obj[field]) {
            errors.push(`${context}: ${field} is required`);
        }
    });

    return errors;
};

export const validateUrls = (urls) => {
    const errors = [];
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    Object.entries(urls).forEach(([key, url]) => {
        if (url && !urlPattern.test(url)) {
            errors.push(`Invalid URL format for ${key}: ${url}`);
        }
    });

    return errors;
};

export const validateEmailFormat = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

// Quick data summary for debugging
export const getDataSummary = (data) => {
    return {
        personalInfo: !!data.personalInfo,
        socialLinks: Object.keys(data.socialLinks || {}).length,
        skillCategories: Object.keys(data.skills || {}).length,
        educationEntries: data.education?.length || 0,
        experienceEntries: data.experiences?.length || 0,
        majorProjects: data.majorProjects?.length || 0,
        minorProjects: data.minorProjects?.length || 0
    };
};

export default {
    validatePortfolioData,
    checkRequiredFields,
    validateUrls,
    validateEmailFormat,
    getDataSummary
};
