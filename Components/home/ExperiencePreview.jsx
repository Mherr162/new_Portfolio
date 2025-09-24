import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { 
  Calendar, 
  TrendingUp, 
  Zap,
  Users,
  ArrowRight
} from "lucide-react";

const experienceData = [
  {
    title: "Freelance Software Engineer",
    company: "Miami Therapy Group, LLC",
    location: "Miami, Florida",
    period: "January 2025 - Present",
    status: "Current",
    icon: Users,
    color: "green",
    achievements: [
      "Built modern web app with React, TypeScript, and Vite",
      "Developed responsive UI with Radix UI and shadcn/ui",
      "Implemented form validation with React Hook Form and Zod"
    ]
  },
  {
    title: "Licensed Electrician",
    company: "Baptist Health",
    location: "South Miami, Florida", 
    period: "April 2020 - Present",
    status: "Current",
    icon: Zap,
    color: "blue",
    achievements: [
      "100% compliance with NFPA 110 and 99 standards",
      "98% first-time fix rate for complex electrical issues",
      "Maintained critical power infrastructure"
    ]
  }
];

const stats = [
  { label: "Years Experience", value: "5+", icon: Calendar },
  { label: "First-time Fix Rate", value: "98%", icon: TrendingUp },
  { label: "NFPA Compliance", value: "100%", icon: Zap }
];

export default function ExperiencePreview() {
  const [animatedStats, setAnimatedStats] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => ({
            ...prev,
            [stat.label]: stat.value
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging electrical engineering expertise with modern software development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {animatedStats[stat.label] || "0"}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color}-400 to-${exp.color === 'green' ? 'emerald' : 'cyan'}-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg text-${exp.color}-600 bg-${exp.color}-100 flex-shrink-0`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                        </div>
                        <Badge className={`bg-${exp.color}-100 text-${exp.color}-700`}>
                          {exp.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-sm text-gray-600 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: (index * 0.1) + (achIndex * 0.1) 
                            }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0`}></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-300 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  transform: `translateY(-${Math.random() * 20}px)`
                }}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Electrical Systems to Software Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              My unique background in electrical engineering brings a systematic, problem-solving approach to software development. This combination of hardware understanding and software skills enables me to create robust, efficient solutions.
            </p>
            <Link to={createPageUrl("Experience")}>
              <Button className="bg-blue-600 hover:bg-blue-700 group">
                View Full Experience Timeline
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
