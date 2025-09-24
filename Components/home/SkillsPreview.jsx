import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Zap,
  ArrowRight
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "blue",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "Vite"],
    proficiency: 85
  },
  {
    title: "Backend", 
    icon: Server,
    color: "green",
    skills: ["Java", "Spring Boot", "C#", "Python", "Node.js"],
    proficiency: 80
  },
  {
    title: "Database",
    icon: Database,
    color: "purple", 
    skills: ["MySQL", "JDBC", "Wix Data", "Database Design"],
    proficiency: 75
  },
  {
    title: "Tools & Other",
    icon: Zap,
    color: "orange",
    skills: ["Postman", "Git", "AWS", "CMS", "OOP"],
    proficiency: 90
  }
];

export default function SkillsPreview() {
  const [animatedProficiencies, setAnimatedProficiencies] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach((category, index) => {
        setTimeout(() => {
          setAnimatedProficiencies(prev => ({
            ...prev,
            [category.title]: category.proficiency
          }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-${category.color}-500`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Proficiency</span>
                      <span className="text-sm font-medium text-gray-900">
                        {animatedProficiencies[category.title] || 0}%
                      </span>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-full bg-gray-200 h-2">
                      <motion.div
                        className={`h-full bg-${category.color}-500 transition-all duration-1000`}
                        initial={{ width: "0%" }}
                        animate={{ 
                          width: `${animatedProficiencies[category.title] || 0}%` 
                        }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-default">
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Want to see the complete list of technologies and certifications?
          </p>
          <Link to={createPageUrl("About")}>
            <Button variant="outline" className="group">
              View Full Skills & Certifications
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
