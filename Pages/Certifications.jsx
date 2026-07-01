import React from "react";
import { Card, CardContent } from "../Components/ui/card.jsx";
import { Badge } from "../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { CheckCircle, Code } from "lucide-react";
import { certifications, skills } from "../src/data/portfolio.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Certifications() {
  return (
    <div className="min-h-screen py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // credentials
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-warm-white mb-6">
            Certifications
          </h1>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Formal credentials and continuous learning that sharpen my technical edge.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <motion.div className="mb-20" {...fadeUp(0.15)}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              >
                <Card className="bg-surface-1 border-white/[0.06] hover:border-amber-400/40 transition-colors h-full group">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon + Active badge row */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl leading-none">{cert.icon}</span>
                      {cert.status === "Active" && (
                        <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                          Active
                        </Badge>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-lg font-bold text-warm-white mb-1 group-hover:text-amber-400 transition-colors">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs font-mono text-amber-400/70 mb-3">{cert.issuer}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-text leading-relaxed flex-1">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Proficiency Section */}
        <motion.div className="mb-20" {...fadeUp(0.3)}>
          <div className="text-center mb-10">
            <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-3">
              // proficiency
            </p>
            <h2 className="font-display text-4xl font-bold text-warm-white">
              Skill Levels
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
                <Card className="bg-surface-1 border-white/[0.06] h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-warm-white">{skill.category}</h3>
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
                          className="text-xs bg-surface-2 text-muted-text border-0"
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

        {/* Continuous Learning CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-surface-1 border border-white/[0.06] rounded-2xl p-10 text-center">
            <h3 className="font-display text-3xl font-bold text-warm-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-text mb-8 max-w-2xl mx-auto leading-relaxed">
              Technology evolves fast — and so do I. I combine formal certifications with
              hands-on projects and real-world problem solving to stay sharp and keep
              delivering quality software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:michelhm22@icloud.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-charcoal font-semibold rounded-lg hover:bg-amber-300 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Discuss Learning Goals
              </a>
              <a
                href="/Projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-2 text-warm-white border border-white/[0.06] rounded-lg hover:border-amber-400/60 transition-colors"
              >
                <Code className="w-5 h-5" />
                See Applied Skills
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
