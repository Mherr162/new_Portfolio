import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../src/data/portfolio.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <Card className="bg-surface-1 border-border-subtle hover:border-amber-400 transition-colors duration-300 h-full overflow-hidden group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
          {/* Amber hover overlay */}
          <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/8 transition-colors duration-300 pointer-events-none" />
        </div>

        <CardContent className="p-6 flex flex-col gap-4">
          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-text-primary group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed flex-1">
            {project.longDescription || project.shortDescription}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-surface-2 text-text-secondary border-0"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-charcoal text-sm font-semibold rounded-lg hover:bg-amber-400/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-surface-2 text-text-primary text-sm font-semibold rounded-lg border border-border-subtle hover:border-amber-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured === true);
  const volunteering = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen py-20 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // my work
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Projects
          </h1>
        </motion.div>

        {/* Featured Projects */}
        <motion.div className="mb-20" {...fadeUp(0.15)}>
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-text-primary">Featured</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <motion.div className="mb-20" {...fadeUp(0.3)}>
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-text-primary">Volunteering</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {volunteering.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center py-16 border-t border-border-subtle"
          {...fadeUp(0.45)}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Interested in working together?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            I'm always open to new projects and collaborations. Let's build something great.
          </p>
          <Link
            to="/Contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-charcoal font-semibold rounded-lg hover:bg-amber-400/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
