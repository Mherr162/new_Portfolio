import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Zap,
  Award,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const skills = [
  { category: "Frontend", technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { category: "Backend", technologies: ["Java", "Spring Boot", "C#", "Python", "Node.js", "Express"] },
  { category: "Database", technologies: ["MySQL", "JDBC", "Wix Data", "Database Design", "SQL"] },
  { category: "Tools", technologies: ["Git", "Postman", "AWS", "Vercel", "Framer Motion", "Lucide Icons"] }
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Java Programming Certificate", issuer: "FIU", year: "2023" },
  { name: "Electrical License", issuer: "State of Florida", year: "2020" }
];

export default function About() {
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Full Stack Developer with a unique background in electrical engineering, 
            bringing systematic problem-solving and attention to detail to software development.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into software development began with a background in electrical engineering. 
                As a licensed electrician working at Baptist Health, I developed strong problem-solving 
                skills and attention to detail that now translate perfectly to software development.
              </p>
              <p>
                The transition from "electrical systems to software systems felt natural - both require 
                systematic thinking, debugging skills, and the ability to work with complex systems. 
                I bring the same precision and reliability from "electrical work to my code.
              </p>
              <p>
                Currently pursuing a Computer Science degree at FIU with a 3.72 GPA, I'm combining 
                formal education with hands-on experience to become a well-rounded developer.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Education</h3>
                    <p className="text-gray-600">Florida International University</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Bachelor of Science in Computer Science<br/>
                  Current GPA: 3.72
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600">Miami, Florida</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Available for remote work and local opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skill.category === "Frontend" && <Code className="w-5 h-5 text-blue-600" />}
                    {skill.category === "Backend" && <Server className="w-5 h-5 text-green-600" />}
                    {skill.category === "Database" && <Database className="w-5 h-5 text-purple-600" />}
                    {skill.category === "Tools" && <Zap className="w-5 h-5 text-orange-600" />}
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:michelhm22@icloud.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              michelhm22@icloud.com
            </a>
            <a 
              href="https://github.com/mherr162"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/michelherrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
