import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users,
  Zap,
  Code,
  Award
} from "lucide-react";

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Miami Therapy Group, LLC",
    location: "Miami, Florida",
    period: "January 2025 - Present",
    status: "Current",
    type: "Software Development",
    icon: Code,
    color: "green",
    description: "Developing modern web applications using React, TypeScript, and Vite. Building responsive UIs with Radix UI and shadcn/ui components, and implementing robust form validation with React Hook Form and Zod.",
    achievements: [
      "Built modern web app with React, TypeScript, and Vite",
      "Developed responsive UI with Radix UI and shadcn/ui",
      "Implemented form validation with React Hook Form and Zod",
      "Created scalable component architecture",
      "Optimized performance and user experience"
    ],
    technologies: ["React", "TypeScript", "Vite", "Radix UI", "shadcn/ui", "React Hook Form", "Zod"]
  },
  {
    title: "Licensed Electrician",
    company: "Baptist Health",
    location: "South Miami, Florida",
    period: "April 2020 - Present",
    status: "Current",
    type: "Electrical Engineering",
    icon: Zap,
    color: "blue",
    description: "Maintaining critical power infrastructure in a healthcare environment. Ensuring 100% compliance with NFPA 110 and 99 standards while maintaining a 98% first-time fix rate for complex electrical issues.",
    achievements: [
      "100% compliance with NFPA 110 and 99 standards",
      "98% first-time fix rate for complex electrical issues",
      "Maintained critical power infrastructure",
      "Trained junior technicians on safety protocols",
      "Implemented preventive maintenance programs"
    ],
    technologies: ["Electrical Systems", "NFPA Standards", "Power Distribution", "Safety Protocols", "Preventive Maintenance"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Florida International University",
    location: "Miami, Florida",
    period: "2022 - Present",
    status: "In Progress",
    gpa: "3.72",
    description: "Pursuing a comprehensive computer science education with focus on software engineering, algorithms, and data structures."
  }
];

const skills = [
  { category: "Programming Languages", skills: ["JavaScript", "TypeScript", "Java", "C#", "Python", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", skills: ["React", "Node.js", "Spring Boot", "Express.js", "Framer Motion"] },
  { category: "Tools & Technologies", skills: ["Git", "Vite", "Vercel", "AWS", "Postman", "MySQL", "Tailwind CSS"] },
  { category: "Soft Skills", skills: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Attention to Detail"] }
];

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey from "electrical engineering to software development, 
            combining hands-on experience with formal education.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-lg bg-${exp.color}-100 flex-shrink-0`}>
                        <exp.icon className={`w-8 h-8 text-${exp.color}-600`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                            <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                            <div className="flex items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Badge className={`bg-${exp.color}-100 text-${exp.color}-700`}>
                              {exp.status}
                            </Badge>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start gap-2 text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                              >
                                <div className={`w-2 h-2 bg-${exp.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-lg bg-purple-100 flex-shrink-0">
                        <Award className="w-8 h-8 text-purple-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                            <p className="text-xl text-blue-600 font-semibold mb-1">{edu.school}</p>
                            <div className="flex items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Badge className="bg-purple-100 text-purple-700">
                              {edu.status}
                            </Badge>
                            <Badge variant="outline">GPA: {edu.gpa}</Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            My unique combination of electrical engineering experience and software development skills 
            allows me to approach problems from "multiple angles and deliver robust solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:michelhm22@icloud.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Users className="w-5 h-5" />
              Let's Connect
            </a>
            <a 
              href="/Projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Code className="w-5 h-5" />
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
