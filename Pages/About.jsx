import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import {
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { profile, skills, education } from "../src/data/portfolio.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeUpView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  const edu = education[0];

  return (
    <div className="min-h-screen py-20 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeUp(0)}
        >
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // about me
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
            About Me
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Electrician turned full-stack developer — precision wired into every line of code.
          </p>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          {...fadeUp(0.15)}
        >
          {/* Story prose */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">My Journey</h2>
            <p className="text-text-secondary leading-relaxed text-base">
              I started my career as a licensed electrician at Baptist Health in South Miami, where I
              managed critical power infrastructure for over four years. During that time, I discovered
              a passion for technology and software. I enrolled at Florida International University and
              pivoted — earning a 3.72 GPA in Computer Science while continuing to work full-time.
              Today I build full-stack applications with React, TypeScript, and Java, combining the
              same attention to precision and reliability I learned in the field.
            </p>
          </div>

          {/* Sidebar cards */}
          <div className="space-y-5">
            {/* Education card */}
            <Card className="bg-surface-1 border-border-subtle">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-amber-400/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">Education</h3>
                    <p className="text-sm text-text-muted">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">
                  {edu.degree}<br />
                  GPA: {edu.gpa} &middot; <span className="text-amber-400">{edu.status}</span>
                </p>
              </CardContent>
            </Card>

            {/* Location card */}
            <Card className="bg-surface-1 border-border-subtle">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-400/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">Location</h3>
                    <p className="text-sm text-text-muted">{profile.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-20" {...fadeUp(0.3)}>
          <div className="text-center mb-10">
            <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-3">
              // skills
            </p>
            <h2 className="font-serif text-4xl font-bold text-text-primary">
              Technical Skills
            </h2>
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

                    {/* Animated progress bar */}
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

        {/* Connect Section */}
        <motion.div {...fadeUpView}>
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-text-primary">Let's Connect</h2>
            <p className="text-text-muted mt-3">Reach out via any of these channels.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 px-6 py-4 bg-surface-1 border border-border-subtle rounded-xl text-text-primary hover:border-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-mono">{profile.email}</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-surface-1 border border-border-subtle rounded-xl text-text-primary hover:border-amber-400 transition-colors"
            >
              <Github className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-mono">{profile.githubHandle}</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-surface-1 border border-border-subtle rounded-xl text-text-primary hover:border-amber-400 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-mono">{profile.linkedinHandle}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
