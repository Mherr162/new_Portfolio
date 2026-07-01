import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../../src/data/portfolio.js";

export default function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured === true);
  const volunteeringProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#111112' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">// projects</p>
          <h2 className="font-display text-4xl md:text-5xl text-warm-white font-light">
            Selected Work
          </h2>
        </motion.div>

        {/* Featured projects — 2-col grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                {/* Project image */}
                {project.image && (
                  <div className="h-44 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                <CardContent className="p-6 pt-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-display text-xl text-warm-white font-light mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-text text-sm leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full group/btn">
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Live Demo
                      </Button>
                    </a>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Volunteering subsection */}
        {volunteeringProjects.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-6">// volunteering</p>

            <div className="grid md:grid-cols-2 gap-6">
              {volunteeringProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 pt-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display text-xl text-warm-white font-light">
                          {project.title}
                        </h3>
                        <Badge variant="default" className="shrink-0">
                          Volunteer
                        </Badge>
                      </div>

                      <p className="text-muted-text text-sm leading-relaxed mb-4 flex-1">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
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
                          <Button variant="outline" className="w-full group/btn">
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                            Live Site
                          </Button>
                        </a>
                        {/* GitHub button suppressed when githubUrl === "#" */}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to={createPageUrl("Projects")}>
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
