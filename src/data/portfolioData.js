// Import assets
import profilePic from "../assets/profile.jpg";
import appscripLogo from "../assets/appscrip.jpeg";
import conceptLogo from "../assets/concept.jpeg";
import zerologo from "../assets/zero.svg";
import wediumlogo from "../assets/wedium.png";
import letschatlogo from "../assets/letschat.png";
import greenwavelogo from "../assets/greenwave.png";
import michibotImage from "../assets/michi_bot.jpeg";

// Personal Information
export const personalInfo = {
    name: "Aditya Ranjan Das",
    title: "I build things for mobile and web.",
    greeting: "Hi, my name is",
    description: "I'm a software developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
    email: "adityadas9439@gmail.com",
    phone: "+91 8260625276",
    location: "Bhubaneswar, Odisha, India",
    profileImage: profilePic,
    resumeUrl: "https://drive.google.com/file/d/1mFTE_MPDoPUbykQ3UHHJ8VWC85U8dIbL/view?usp=share_link"
};

// Social Media Links
export const socialLinks = {
    github: "https://github.com/Aditya6371",
    linkedin: "https://www.linkedin.com/in/aditya-ranjan-das",
    email: "mailto:adityadas9439@gmail.com",
    whatsapp: "https://wa.me/918260625276"
};

// About Me Content
export const aboutContent = {
    bio: [
        "I'm a Software Developer with hands-on experience in Swift, Python, Java, and Flutter, currently engaged in application development at Appscrip Pvt Ltd for web and mobile platforms. I'm passionate about creating scalable, user-friendly applications, with a strong foundation in both professional and personal project development.",
        "I'm constantly seeking opportunities to further leverage my skills in innovative and challenging environments, with a particular focus on mobile development and emerging technologies."
    ]
};

// Skills Data
export const skills = {
    "Programming Languages": ["Swift", "Python", "Java", "Dart"],
    "Frameworks & Tools": ["Flutter", "Xcode", "Arduino IDE", "RESTful APIs", "GetX"],
    "Technologies": ["iOS Development", "Bluetooth Communication", "API Integration"],
    "Soft Skills": ["Team Collaboration", "Problem-Solving", "Adaptability"]
};

// Career Milestones Data
export const careerMilestones = [
    {
        year: '2020',
        achievement: 'Started B.Tech in Computer Science at Gandhi Engineering College',
        skills: 'Computer Science Fundamentals, Member of Robotics Club'
    },
    {
        year: '2021',
        achievement: 'Started Learning Mobile Development',
        skills: 'Swift, Flutter, Mobile Development Basics'
    },
    {
        year: '2024 (Jan-Jun)',
        achievement: 'Intern iOS Developer at Concept Infoway',
        skills: 'iOS Development, Swift, Xcode'
    },
    {
        year: '2024 (Jun-Jan)',
        achievement: 'Junior iOS Developer at Concept Infoway',
        skills: 'iOS Apps: Helping Hand, To Heart, Health Care'
    },
    {
        year: '2025',
        achievement: 'Flutter Developer at Appscrip',
        skills: 'Flutter, AI Integration, ML Models'
    }
];

// Education Data
export const education = [
    {
        school: "Gandhi Engineering College",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        duration: "2020 - 2024",
        gpa: "8.29",
        highlights: [
            "Member of the Robotics Club",
            "Captain of the Volleyball Team"
        ]
    },
    {
        school: "Eastern Academy of Higher Secondary School",
        degree: "+2 Science",
        duration: "2018 - 2020"
    },
    {
        school: "Venkateswar English Medium School",
        degree: "Matriculation",
        duration: "2017 - 2018"
    }
];

// Experience Data
export const experiences = [
    {
        company: "Appscrip Pvt Ltd",
        position: "Flutter Developer",
        duration: "January 2025 - Present",
        logo: appscripLogo,
        description: [
            "Developed Flutter web admin portal for restaurant management with AI-powered features including content generation, menu optimization, and review analytics",
            "Integrated real-time analytics dashboard for monitoring restaurant performance metrics",
            "Implemented automated content generation system for menu descriptions and promotional materials",
            "Implemented secure authentication and role-based access control for admin users",
            "Designed and implemented scalable database architecture for multi-tenant system"
        ]
    },
    {
        company: "Concept Infoway Pvt Ltd",
        position: "Junior iOS Developer",
        duration: "June 2024 - January 2025",
        logo: conceptLogo,
        description: [
            "Contributed to the development of various iOS applications, enhancing user experience and functionality",
            "Developed Helping Hand - a donation management app for NGOs using Swift",
            "Worked on To Heart - a social media app for posting photos and videos",
            "Assisted in developing Health Care - a hospital management app",
            "Implemented secure payment gateway integration for donation processing",
            "Created custom UI components and animations for enhanced user experience",
            "Implemented offline data persistence using Core Data"
        ]
    },
    {
        company: "Concept Infoway Pvt Ltd",
        position: "Intern iOS Developer",
        duration: "January 2024 - June 2024",
        logo: conceptLogo,
        description: [
            "Gained practical experience in iOS development using Swift and Xcode",
            "Worked closely with senior developers on various projects",
            "Learned and implemented best practices in iOS development",
            "Participated in code reviews and team discussions",
            "Assisted in bug fixing and application maintenance",
            "Learned version control with Git and collaborative development workflows",
            "Gained experience in working with REST APIs and JSON parsing",
            "Contributed to UI/UX improvements and app optimization"
        ]
    }
];

// Projects Data
export const majorProjects = [
    {
        title: "GreenWave Terratech",
        description: "A comprehensive society management application developed using Flutter. Features include resident management, maintenance tracking, and community announcements. Implemented complete UI/UX design and seamless API integration.",
        technologies: ["Flutter", "API Integration", "UI/UX Design", "State Management"],
        playStore: "https://play.google.com/store/apps/details?id=com.greenwave",
        appStore: "https://apps.apple.com/in/app/greenwave-terratech/id6479568781",
        category: "Major Project",
        icon: greenwavelogo,
        bgColor: "from-[#1a2f2c] to-[#2a3f3c]",
        year: "2024",
        status: "Published",
        features: [
            "Resident management system with profile creation and verification",
            "Maintenance tracking with automated billing and payment reminders",
            "Community announcements and event management",
            "Real-time notifications for important updates",
            "Secure payment gateway integration",
            "Admin dashboard for society management"
        ],
        challenges: [
            {
                challenge: "Real-time Data Synchronization",
                solution: "Implemented efficient state management using GetX and optimized API calls to ensure real-time updates across all user devices."
            },
            {
                challenge: "Payment Integration",
                solution: "Integrated multiple payment gateways with proper error handling and transaction verification for secure payments."
            }
        ]
    },
    {
        title: "Wedium",
        description: "An event professionals booking platform focusing on seamless user experience. Currently in development, with emphasis on intuitive UI design and robust API integration for efficient event planning and booking.",
        technologies: ["Flutter", "API Integration", "UI Design", "Booking System"],
        playStore: "https://play.google.com/store/apps/details?id=com.wedium.customer",
        appStore: "https://apps.apple.com/in/app/wedium/id6444660891",
        category: "Major Project",
        icon: wediumlogo,
        bgColor: "from-[#2d1a2b] to-[#3d2a3b]",
        year: "2024",
        status: "Published",
        features: [
            "Professional vendor discovery and booking system",
            "Advanced search and filtering capabilities",
            "Secure booking and payment processing",
            "Real-time availability checking",
            "Review and rating system for vendors",
            "Event planning tools and timeline management"
        ],
        challenges: [
            {
                challenge: "Complex Booking Logic",
                solution: "Developed a sophisticated booking system that handles vendor availability, pricing, and scheduling conflicts with real-time updates."
            },
            {
                challenge: "User Experience Design",
                solution: "Created an intuitive UI/UX that simplifies the complex process of event planning and vendor selection."
            }
        ]
    },
    {
        title: "Zero EV",
        description: "A comprehensive companion app for electric vehicle users, designed to simplify EV ownership and provide access to essential services. Features include charging station finder with real-time availability, smart parking solutions, EV marketplace, and user-friendly experience with secure digital payments.",
        technologies: ["Flutter", "Maps Integration", "Real-time Data", "Digital Payments", "OTP Authentication"],
        playStore: "https://play.google.com/store/apps/details?id=com.zeroapp.ev",
        appStore: "https://apps.apple.com/in/app/zero-ev/id6745718772",
        category: "Major Project",
        icon: zerologo,
        bgColor: "from-[#1a1f38] to-[#2a2f4c]",
        year: "2024",
        status: "Published",
        features: [
            "Real-time charging station finder with availability status",
            "Smart parking solutions for EV owners",
            "EV marketplace for buying/selling electric vehicles",
            "Digital wallet with secure payment processing",
            "OTP-based authentication for enhanced security",
            "Trip planning with charging stops optimization"
        ],
        challenges: [
            {
                challenge: "Real-time Location Data",
                solution: "Integrated multiple mapping APIs and implemented efficient caching mechanisms for real-time charging station data."
            },
            {
                challenge: "Payment Security",
                solution: "Implemented multi-layer security with OTP verification, encrypted transactions, and secure digital wallet functionality."
            }
        ]
    },
    {
        title: "Chat Application",
        description: "A fully functional chat application developed as part of my final semester major project. Built using Flutter for the frontend and Firebase for backend services, enabling real-time messaging and secure user authentication.",
        technologies: ["Flutter", "Firebase", "Real-time Database", "Authentication"],
        category: "Major Project",
        icon: letschatlogo,
        bgColor: "from-[#1a1f38] to-[#2a2f4c]",
        year: "2024",
        status: "Completed",
        github: "https://github.com/Aditya6371/chat-app",
        features: [
            "Real-time messaging with instant delivery",
            "Secure user authentication and authorization",
            "Group chat functionality with admin controls",
            "File and media sharing capabilities",
            "Online/offline status indicators",
            "Message encryption for privacy"
        ],
        challenges: [
            {
                challenge: "Real-time Message Delivery",
                solution: "Utilized Firebase Realtime Database with optimized listeners to ensure instant message delivery and synchronization."
            },
            {
                challenge: "Scalable Architecture",
                solution: "Designed a modular architecture using Firebase services that can handle increasing user load and message volume."
            }
        ]
    }
];

export const minorProjects = [
    {
        title: "Multi-Tools Application",
        technologies: ["Flutter"],
        description: "A utility application combining multiple tools for everyday use.",
        category: "Mobile App",
        year: "2023",
        status: "Completed",
        icon: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png", // Wrench and screwdriver tools icon
        features: [
            "Calculator with scientific functions",
            "QR code generator and scanner",
            "Unit converter for various measurements",
            "Color picker and palette generator",
            "Text tools for formatting and conversion"
        ]
    },
    {
        title: "Virtual Assistance (Jarvis)",
        technologies: ["Python"],
        description: "A voice-controlled virtual assistant inspired by Iron Man's JARVIS.",
        category: "AI Project",
        year: "2022",
        status: "Completed",
        github: "https://github.com/Aditya6371/jarvis-assistant",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // Python icon placeholder
        features: [
            "Voice recognition and text-to-speech",
            "Weather updates and news briefings",
            "Web search and automation",
            "System control and file management",
            "Email sending and calendar integration"
        ]
    },
    {
        title: "Instagram UI Clone",
        technologies: ["Flutter"],
        description: "A pixel-perfect recreation of Instagram's user interface.",
        category: "UI/UX Project",
        year: "2023",
        status: "Completed",
        github: "https://github.com/Aditya6371/instagram-clone",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram icon placeholder
        features: [
            "Responsive design matching Instagram's layout",
            "Story viewer with swipe functionality",
            "Feed with like and comment interactions",
            "Profile page with grid view",
            "Search and discovery interface"
        ]
    },
    {
        title: "Michi Bot (Robo Car)",
        technologies: ["Arduino"],
        description: "A programmable robotic car built using Arduino.",
        category: "Hardware Project",
        year: "2021",
        status: "Completed",
        icon: michibotImage,
        features: [
            "Obstacle detection and avoidance",
            "Remote control via Bluetooth",
            "Line following capabilities",
            "LED indicators and sound alerts",
            "Programmable movement patterns"
        ]
    }
];

// Contact Information
export const contactInfo = {
    title: "Get In Touch",
    description: [
        "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        "As a passionate developer with experience in mobile and web development, I'm particularly interested in roles that involve Flutter, iOS development, or full-stack opportunities. I bring strong problem-solving skills and a collaborative mindset to every project."
    ],
    email: personalInfo.email,
    phone: personalInfo.phone,
    whatsapp: socialLinks.whatsapp
};

// Theme Colors
export const themeColors = {
    primary: "#64ffda",
    primaryDark: "#0a192f",
    secondary: "#112240",
    text: "#ccd6f6",
    textSecondary: "#8892b0",
    background: "#0a192f"
};

// Animation Variants
export const animations = {
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    },
    fadeInLeft: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    },
    fadeInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    }
};

// Navigation Items
export const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
];

export default {
    personalInfo,
    socialLinks,
    aboutContent,
    skills,
    careerMilestones,
    education,
    experiences,
    majorProjects,
    minorProjects,
    contactInfo,
    themeColors,
    animations,
    navItems
};
