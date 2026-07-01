import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skills } from "../../src/data/portfolio.js";

export default function SkillsPreview() {
  return (
    <section className="py-24 overflow-hidden bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">// skills</p>
          <h2 className="font-display text-4xl md:text-5xl text-warm-white font-light">
            What I Work With
          </h2>
        </motion.div>

        {/* Skills grid — 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 pt-6">
                  {/* Category name + level */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm text-amber uppercase tracking-widest">
                      {skill.category}
                    </span>
                    <span className="font-mono text-xs text-muted-text">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated level bar */}
                  <div className="w-full h-1 bg-surface-2 rounded-full mb-5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-1 bg-amber rounded-full"
                    />
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to={createPageUrl("About")}>
            <Button variant="outline" className="group">
              See Full Skill Set
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
