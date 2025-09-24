# Michel Herrera Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my journey from electrical engineering to software development, featuring my projects, skills, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for maintainability

## 🛠️ Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- React Router DOM

### Development Tools
- Vite
- PostCSS
- Autoprefixer

## 📁 Project Structure

```
new_Portfolio/
├── src/
│   ├── main.jsx          # Application entry point
│   ├── App.jsx           # Main App component
│   └── index.css         # Global styles
├── Components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.js
│   │   ├── card.js
│   │   └── badge.js
│   └── home/             # Home page components
│       ├── HeroSection
│       ├── SkillsPreview
│       ├── ProjectsPreview
│       └── ExperiencePreview
├── Pages/                # Page components
│   ├── Home
│   ├── About
│   ├── Projects
│   ├── Experience
│   ├── Certifications
│   └── Contacts
├── utils/
│   └── index.js          # Utility functions
├── Layout.js             # Main layout component
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages

- **Home**: Landing page with hero section, skills preview, projects showcase, and experience overview
- **About**: Detailed information about my background, education, and skills
- **Projects**: Comprehensive showcase of my projects with detailed descriptions
- **Experience**: Professional experience and education timeline
- **Certifications**: Certifications, courses, and continuous learning
- **Contact**: Contact form and information

## 🎨 Design Features

- **Hero Section**: Animated typing effect, floating elements, and code preview
- **Skills Section**: Interactive progress bars and skill categories
- **Projects Section**: Project cards with hover effects and technology badges
- **Experience Section**: Timeline with achievements and technologies
- **Responsive Navigation**: Mobile-friendly navigation with smooth transitions
- **Smooth Animations**: Framer Motion animations throughout the site

## 🔧 Customization

### Adding New Projects
1. Edit `Components/home/ProjectsPreview` to add new featured projects
2. Update `Pages/Projects` to add detailed project information

### Modifying Skills
1. Update the `skillCategories` array in `Components/home/SkillsPreview`
2. Adjust proficiency percentages and technologies as needed

### Updating Experience
1. Modify the `experienceData` array in `Components/home/ExperiencePreview`
2. Update `Pages/Experience` for detailed experience information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: michelhm22@icloud.com
- **Phone**: (786) 319-6002
- **Location**: Miami, Florida
- **GitHub**: [mherr162](https://github.com/mherr162)
- **LinkedIn**: [michelherrera](https://linkedin.com/in/michelherrera/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons provided by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
