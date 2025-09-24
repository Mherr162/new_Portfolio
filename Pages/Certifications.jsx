import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { 
  Award, 
  Calendar, 
  ExternalLink,
  CheckCircle,
  BookOpen,
  Code
} from "lucide-react";

const certifications = [
  {
    name: "Technical Interview Prep: CodePath",
    issuer: "CodePath",
    year: "",
    status: "Completed",
    description: "Structured preparation for technical coding interviews with data structures and algorithms.",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
    verificationUrl: "#",
    icon: "🧠"
  },
  {
    name: "Python Developer: SoloLearn",
    issuer: "SoloLearn",
    year: "",
    status: "Completed",
    description: "Foundational Python programming, syntax, and practical exercises.",
    skills: ["Python", "Scripting"],
    verificationUrl: "#",
    icon: "🐍"
  },
  {
    name: "Foundations of Cyber Operations: FIU",
    issuer: "Florida International University",
    year: "",
    status: "Completed",
    description: "Core concepts in cybersecurity and operational security practices.",
    skills: ["Cybersecurity", "Ops"],
    verificationUrl: "#",
    icon: "🛡️"
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    year: "",
    status: "Completed",
    description: "Introductory AWS cloud concepts, services, pricing, and architecture.",
    skills: ["AWS", "Cloud"],
    verificationUrl: "#",
    icon: "☁️"
  },
  {
    name: "Introduction to Node.js LFW111",
    issuer: "The Linux Foundation",
    year: "",
    status: "Completed",
    description: "Fundamentals of Node.js runtime, modules, and package ecosystem.",
    skills: ["Node.js", "JavaScript"],
    verificationUrl: "#",
    icon: "🧩"
  },
  {
    name: "Electrical Journeyman",
    issuer: "Broward County Government",
    year: "",
    status: "Active",
    description: "Journeyman-level electrical credential with emphasis on safety and code compliance.",
    skills: ["Electrical Systems", "NFPA", "Safety"],
    verificationUrl: "#",
    icon: "⚡"
  }
];

const courses = [
  {
    title: "Java Masterclass 2023",
    platform: "Udemy",
    instructor: "Tim Buchalka",
    duration: "130+ Hours",
    status: "Completed",
    year: "2023",
    description: "A complete Java course teaching core to advanced skills with real-world projects, certification prep, and lifetime updates.",
    skills: ["Core Java programming", "Object-oriented programming (OOP)", "Java fundamentals for Spring, Java EE, and Android", "Java API"]
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    platform: "Udemy",
    instructor: "Dr. Angela Yu",
    duration: "62+ hours",
    status: "Completed",
    year: "2021",
    description: "The Complete Web Development Bootcamp is a 62+ hour, beginner-friendly course by Angela Yu that teaches full-stack development with modern tools (HTML, CSS, JavaScript, React, Node.js, SQL, Web3, etc.), guiding students through 32+ real-world projects to build a professional portfolio and become job-ready developers.",
    skills: ["TypeScript", "React", "Generics", "Advanced Types", "Type Safety"]
  }
];

const skills = [
  { category: "Programming Languages", level: "Advanced", skills: ["JavaScript", "TypeScript", "Java", "C#", "Python"] },
  { category: "Frontend Development", level: "Advanced", skills: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { category: "Backend Development", level: "Intermediate", skills: ["Node.js", "Spring Boot", "Express.js", "REST APIs"] },
  { category: "Database", level: "Intermediate", skills: ["MySQL", "MongoDB", "Database Design", "SQL"] },
  { category: "Cloud & DevOps", level: "Beginner", skills: ["AWS", "Docker", "Vercel", "Git"] },
  { category: "Tools & Others", level: "Advanced", skills: ["Git", "Postman", "Framer Motion", "Figma"] }
];

export default function Certifications() {
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
            Certifications & Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development are key to staying current 
            in the rapidly evolving field of software development.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{cert.icon}</div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {cert.name}
                          </CardTitle>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge className={`${cert.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      {cert.year}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Gained:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {cert.verificationUrl !== "#" && (
                      <a 
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify Certificate
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Online Courses */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Online Courses & Learning</h2>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                            <p className="text-blue-600 font-semibold">{course.platform} • {course.instructor}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Badge className={course.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                              {course.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{course.year}</Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>Duration: {course.duration}</span>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {course.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Assessment */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills Assessment</h2>
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
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                      <Badge 
                        className={
                          skillGroup.level === 'Advanced' ? 'bg-green-100 text-green-700' :
                          skillGroup.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }
                      >
                        {skillGroup.level}
                      </Badge>
                    </div>
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

        {/* Learning Philosophy */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Philosophy</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Technology evolves rapidly, and I believe in staying current through continuous learning. 
            My approach combines formal certifications with hands-on practice, online courses, 
            and real-world project experience to build a comprehensive skill set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:michelhm22@icloud.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Discuss Learning Goals
            </a>
            <a 
              href="/Projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Code className="w-5 h-5" />
              See Applied Skills
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
