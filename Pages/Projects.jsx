import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { Button } from "../Components/ui/button.jsx";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Star,
  Calendar,
  Code
} from "lucide-react";

const projects = [
  {
    title: "Crypto Trading Bot",
    description: "Full-stack crypto trading bot using React and TypeScript, integrating the Coinbase API for real-time trading. Features secure data handling and scalable architecture.",
    longDescription: "A comprehensive cryptocurrency trading application built with modern web technologies. The bot integrates with Coinbase's API to provide real-time market data and execute trades based on customizable strategies. Features include secure authentication, real-time price monitoring, and a responsive dashboard for portfolio management.",
    technologies: ["React", "TypeScript", "Coinbase API", "Vercel", "Tailwind CSS"],
    liveUrl: "https://coin-base-trading-bot-neon.vercel.app",
    githubUrl: "https://github.com/mherr162/crypto-trading-bot",
    featured: true,
    gradient: "from-blue-500 to-purple-600",
    date: "December 2024",
    status: "Live",
    image: "/CBTradingBot.png"
  },
  {
    title: "Database Management & CMS",
    description: "Dynamic, scalable content platform for Christ Fellowship using Wix. Features structured database with real-time updates and enhanced navigation.",
    longDescription: "Developed a comprehensive content management system for a local church organization. The platform includes a structured database for sermon management, event scheduling, and member directory. Features real-time updates, responsive design, and intuitive admin interface for content management.",
    technologies: ["Wix", "Database Design", "CMS", "Real-time Updates", "JavaScript"],
    liveUrl: "https://www.cfmiami.org/sermons",
    githubUrl: "#",
    featured: false,
    gradient: "from-green-500 to-teal-600",
    date: "November 2024",
    status: "Live",
    image: "/volunteering-placeholder.png"
  },
  {
    title: "Movie Tracker App",
    description: "React application with real-time movie search using TMDB API. Includes responsive UI, local storage favorites system, and React 19 optimizations.",
    longDescription: "A modern movie discovery and tracking application built with React 19. Users can search for movies, view detailed information, and save favorites to local storage. The app features a responsive design, smooth animations, and optimized performance using React's latest features.",
    technologies: ["React", "TMDB API", "Local Storage", "Responsive Design", "React 19"],
    liveUrl: "https://react-app-green-nine.vercel.app/",
    githubUrl: "https://github.com/mherr162/movie-tracker",
    featured: true,
    gradient: "from-purple-500 to-pink-600",
    date: "October 2024",
    status: "Live",
    image: "/Movie-Tracker.png"
  },
  
];

export default function Projects() {
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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from "frontend applications to backend systems and database design.
          </p>
        </motion.div>

        

        {/* Featured Projects */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-56 object-cover rounded-md mb-4 border border-gray-200"
                        loading="lazy"
                      />
                    )}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                          Live Demo
                        </Button>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="group">
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transform rotate-45 translate-x-6 -translate-y-6`}></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteering</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.title === "Database Management & CMS")
              .map((project) => (
                <Card key={project.title} className="hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">Volunteering</Badge>
                        <Badge variant="outline" className="text-xs">{project.status}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-56 object-cover rounded-md mb-4 border border-gray-200"
                        loading="lazy"
                      />
                    )}
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="group">
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </motion.div>

        

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-gray-600 mb-6">
            I'm always excited to work on new projects and collaborate with other developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:michelhm22@icloud.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Code className="w-5 h-5" />
              Start a Project
            </a>
            <a 
              href="https://github.com/mherr162"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
