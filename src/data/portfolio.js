// src/data/portfolio.js
// Single source of truth — sourced from Michel Herrera's resume

export const profile = {
  name: "Michel Herrera",
  title: "Full-Stack Developer",
  tagline: "Building innovative, user-friendly software",
  summary:
    "Full Stack Developer who made the shift from being a licensed electrician to building innovative software. I work with React, TypeScript, JavaScript, C#, and Java to create responsive, user-friendly apps. I'm passionate about solving problems creatively and collaborating to deliver software that really helps clients succeed.",
  email: "michelhm22@icloud.com",
  phone: "(786) 319-6002",
  phoneTel: "tel:+17863196002",
  location: "Miami, Florida",
  github: "https://github.com/mherr162",
  githubHandle: "mherr162",
  linkedin: "https://linkedin.com/in/michelherrera/",
  linkedinHandle: "michelherrera",
};

export const experience = [
  {
    id: "miami-therapy",
    company: "Miami Therapy Group, LLC",
    role: "Freelance Software Engineer",
    location: "Miami, Florida",
    period: "Jan 2025 – Jan 2026",
    status: "Completed",
    icon: "Code",
    color: "green",
    technologies: [
      "React", "TypeScript", "Vite", "Radix UI", "shadcn/ui",
      "React Hook Form", "Zod", "Recharts", "ESLint",
    ],
    achievements: [
      "Built a modern web application using React, TypeScript, and Vite to improve client management and user experience",
      "Developed responsive UI components with Radix UI and shadcn/ui for a clean, accessible interface",
      "Implemented form handling and validation using React Hook Form and Zod for reliable data input",
      "Created interactive data dashboards with Recharts to support insights and reporting",
      "Improved app performance and code quality with ESLint and best development practices",
      "Collaborated with stakeholders to roll out features that enhanced client engagement and streamlined operations",
    ],
  },
  {
    id: "baptist-health",
    company: "Baptist Health",
    role: "Licensed Electrician",
    location: "South Miami, Florida",
    period: "Apr 2020 – Present",
    status: "Current",
    icon: "Zap",
    color: "blue",
    technologies: [
      "NFPA 110", "NFPA 99", "Power Distribution",
      "Emergency Power Systems", "Preventive Maintenance", "Safety Protocols",
    ],
    achievements: [
      "Ensured 100% compliance with NFPA 110 and 99 standards for emergency power systems",
      "Diagnosed and resolved complex electrical issues with a 98% first-time fix rate",
      "Performed routine inspections and testing of critical power infrastructure",
      "Partnered with engineering teams to improve power distribution efficiency",
      "Maintained detailed documentation of all maintenance and system modifications per regulatory guidelines",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "Florida International University",
    location: "Miami, Florida",
    period: "2022 – Present",
    gpa: "3.72 / 4.00",
    status: "In Progress",
  },
];

export const skills = [
  {
    category: "Languages",
    color: "blue",
    level: 88,
    items: ["TypeScript", "JavaScript", "Java", "C", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    color: "green",
    level: 85,
    items: ["React.js", "React Router DOM", "Vite", "Tailwind CSS", "Radix UI", "shadcn/ui", "Framer Motion"],
  },
  {
    category: "Backend & DB",
    color: "purple",
    level: 75,
    items: ["Spring Boot", "Node.js", "MySQL", "JDBC", "Wix Data", "REST APIs", "OOP"],
  },
  {
    category: "Tools & Platforms",
    color: "orange",
    level: 90,
    items: ["Git", "Postman", "AWS", "Vercel", "Hostinger", "Wix", "CMS", "TMDB API"],
  },
];

export const projects = [
  {
    id: "crypto-bot",
    title: "Crypto Trading Bot",
    shortDescription: "Full-stack crypto trading bot with real-time Coinbase API integration",
    longDescription:
      "Developed a full-stack crypto trading bot using React and TypeScript, integrating the Coinbase API for real-time trading. Implemented secure data handling, reliable API communication, and a scalable architecture designed for future features like user authentication.",
    technologies: ["React", "TypeScript", "Coinbase API", "Vite", "Node.js"],
    liveUrl: "https://coin-base-trading-bot-neon.vercel.app",
    githubUrl: "https://github.com/mherr162/crypto-trading-bot",
    image: "/CBTradingBot.png",
    featured: true,
    date: "Dec 2024",
    status: "Live",
  },
  {
    id: "movie-tracker",
    title: "Movie Tracker App",
    shortDescription: "React app with real-time movie search via TMDB API and local favorites",
    longDescription:
      "Created a React app with real-time movie search using the TMDB API. Designed a responsive UI, added a local storage-based favorites system, and optimized performance using React 19 features.",
    technologies: ["React 19", "JavaScript", "TMDB API", "Local Storage", "CSS"],
    liveUrl: "https://react-app-green-nine.vercel.app/",
    githubUrl: "https://github.com/mherr162/movie-tracker",
    image: "/Movie-Tracker.png",
    featured: true,
    date: "Oct 2024",
    status: "Live",
  },
  {
    id: "cms-christ-fellowship",
    title: "Database Management & CMS",
    shortDescription: "Scalable content platform for Christ Fellowship built with Wix",
    longDescription:
      "Built a dynamic, scalable content platform for Christ Fellowship using Wix. Structured a database with Wix Data for real-time updates and enhanced site navigation for improved user experience.",
    technologies: ["Wix", "Wix Data", "CMS", "JavaScript"],
    liveUrl: "https://www.cfmiami.org/sermons",
    githubUrl: "#",
    image: "/volunteering-placeholder.png",
    featured: false,
    date: "Nov 2024",
    status: "Live",
    category: "Volunteering",
  },
];

export const certifications = [
  {
    id: "codepath",
    name: "Technical Interview Prep",
    issuer: "CodePath",
    icon: "🧠",
    description: "Comprehensive technical interview preparation covering data structures, algorithms, and system design.",
  },
  {
    id: "sololearn",
    name: "Python Developer",
    issuer: "SoloLearn",
    icon: "🐍",
    description: "Python programming fundamentals through advanced topics including OOP and data manipulation.",
  },
  {
    id: "fiu-cyber",
    name: "Foundations of Cyber Operations",
    issuer: "Florida International University",
    icon: "🛡️",
    description: "Core concepts in cybersecurity operations, threat analysis, and defensive strategies.",
  },
  {
    id: "aws",
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    icon: "☁️",
    description: "Cloud computing fundamentals, AWS core services, security, architecture, and pricing.",
  },
  {
    id: "nodejs",
    name: "Introduction to Node.js LFW111",
    issuer: "The Linux Foundation",
    icon: "🧩",
    description: "Node.js runtime, async patterns, core modules, and building server-side JavaScript applications.",
  },
  {
    id: "electrical",
    name: "Electrical Journeyman License",
    issuer: "Broward County Government",
    icon: "⚡",
    description: "Licensed journeyman electrician with expertise in electrical systems, NFPA compliance, and safety.",
    status: "Active",
  },
];

export const stats = [
  { label: "GPA", value: "3.72", suffix: "", sub: "Computer Science, FIU" },
  { label: "First-Time Fix Rate", value: "98", suffix: "%", sub: "Baptist Health" },
  { label: "NFPA Compliance", value: "100", suffix: "%", sub: "Emergency Systems" },
];
