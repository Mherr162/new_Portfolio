import React from "react";
import { Card, CardContent } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience, education, skills } from "../src/data/portfolio.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Experience() {
  const edu = education[0];

  return (
    <div className="min-h-screen py-20 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // work history
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Experience
          </h1>
        </motion.div>

        {/* Work Experience */}
        <motion.div className="mb-16" {...fadeUp(0.15)}>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <Card className={`bg-surface-1 border-border-subtle border-l-4 border-l-${exp.color}-500`}>
                  <CardContent className="p-6">
                    {/* Top row: company / role / badges */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-text-primary mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-base text-amber-400 font-medium">{exp.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:text-right">
                        {exp.status === "Current" ? (
                          <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs">
                            Current
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="text-xs">
                            {exp.status}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Meta: location + period */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${exp.color}-500 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-surface-2 text-text-secondary border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="mb-16" {...fadeUp(0.35)}>
          <div className="mb-8">
            <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-3">
              // education
            </p>
            <h2 className="font-serif text-3xl font-bold text-text-primary">Education</h2>
          </div>

          <Card className="bg-surface-1 border-border-subtle border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-amber-400 font-medium">{edu.institution}</p>
                </div>
                <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs self-start">
                  {edu.status}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="font-mono text-amber-400">GPA: {edu.gpa}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div className="mb-16" {...fadeUp(0.5)}>
          <div className="mb-8">
            <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-3">
              // skills
            </p>
            <h2 className="font-serif text-3xl font-bold text-text-primary">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="bg-surface-1 border-border-subtle h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-text-primary">{skill.category}</h3>
                      <span className="text-xs font-mono text-amber-400">{skill.level}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 bg-surface-2 rounded-full mb-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="text-xs bg-surface-2 text-text-secondary border-0"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
