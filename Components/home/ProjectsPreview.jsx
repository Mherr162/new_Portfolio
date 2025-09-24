import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Star,
  ArrowRight
} from "lucide-react";

const featuredProjects = [
  {
    title: "Crypto Trading Bot",
    description: "Full-stack crypto trading bot using React and TypeScript, integrating the Coinbase API for real-time trading. Features secure data handling and scalable architecture.",
    technologies: ["React", "TypeScript", "Coinbase API", "Vercel"],
    liveUrl: "https://coin-base-trading-bot-neon.vercel.app",
    githubUrl: "https://github.com/Mherr162/Crypto_Trading-Bot.git",
    featured: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Database Management & CMS",
    description: "Dynamic, scalable content platform for Christ Fellowship using Wix. Features structured database with real-time updates and enhanced navigation.",
    technologies: ["Wix", "Database Design", "CMS", "Real-time Updates"],
    liveUrl: "https://www.cfmiami.org/sermons",
    githubUrl: "#",
    featured: false,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Movie Tracker App",
    description: "React application with real-time movie search using TMDB API. Includes responsive UI, local storage favorites system, and React 19 optimizations.",
    technologies: ["React", "TMDB API", "Local Storage", "Responsive Design"],
    liveUrl: "https://react-app-green-nine.vercel.app/",
    githubUrl: "https://github.com/Mherr162/Movie_Tracker.git",
    featured: true,
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my latest work demonstrating full-stack development capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {featuredProjects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (techIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                          {tech}
                        </div>
                      </motion.div>
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
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="group">
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transform rotate-45 translate-x-6 -translate-y-6`}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteering subsection under Featured */}
        <motion.div 
          className="mt-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteering</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects
              .filter(p => p.title === "Database Management & CMS")
              .map((project) => (
                <Card key={project.title} className="hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">Volunteering</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                          Live Demo
                        </Button>
                      </a>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="group">
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transform rotate-45 translate-x-6 -translate-y-6`}></div>
                  </div>
                </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Interested in seeing more of my work and technical deep-dives?
          </p>
          <Link to={createPageUrl("Projects")}>
            <Button className="bg-blue-600 hover:bg-blue-700 group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
