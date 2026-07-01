import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Card, CardContent } from "../../Components/ui/card.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Code, Zap } from "lucide-react";
import { experience, stats } from "../../src/data/portfolio.js";

// Map icon names from data to lucide components
const iconMap = { Code, Zap };

// Count-up hook for numeric stats
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);

  function start() {
    if (triggered.current) return;
    triggered.current = true;
    const numericTarget = parseFloat(target);
    if (isNaN(numericTarget)) {
      setCount(numericTarget);
      return;
    }
    const targetStr = String(target);
    const isFloat = targetStr.includes(".");
    const decimals = isFloat ? targetStr.split(".")[1].length : 0;
    const steps = 40;
    const increment = numericTarget / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(interval);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      }
    }, duration / steps);
  }

  return [count, start];
}

function StatCard({ stat }) {
  const [count, startCount] = useCountUp(stat.value);
  const isFloat = stat.value.includes(".");
  const displayValue = isFloat ? count.toFixed(2) : Math.floor(count);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={startCount}
    >
      <Card>
        <CardContent className="p-6 pt-6 text-center">
          <div className="font-display text-4xl text-amber font-light mb-1">
            {displayValue}{stat.suffix}
          </div>
          <div className="font-mono text-xs text-warm-white uppercase tracking-widest mb-1">
            {stat.label}
          </div>
          <div className="text-xs text-muted-text">{stat.sub}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ExperiencePreview() {
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
          <p className="eyebrow mb-4">// experience</p>
          <h2 className="font-display text-4xl md:text-5xl text-warm-white font-light">
            Where I've Worked
          </h2>
        </motion.div>

        {/* Experience cards — 2 col */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {experience.map((exp, index) => {
            const IconComponent = iconMap[exp.icon] || Code;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 pt-6">
                    {/* Header row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2.5 rounded-lg bg-surface-2 border border-[rgba(255,255,255,0.06)] shrink-0">
                        <IconComponent className="w-5 h-5 text-amber" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                          <h3 className="font-display text-lg text-warm-white font-light">
                            {exp.role}
                          </h3>
                          {exp.status === "Current" && (
                            <Badge variant="emerald" className="shrink-0">
                              {exp.status}
                            </Badge>
                          )}
                        </div>
                        <p className="text-amber text-sm font-mono">{exp.company}</p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-text mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                          <span className="mx-1">·</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mt-4 border-t border-[rgba(255,255,255,0.06)] pt-4">
                      {exp.achievements.slice(0, 3).map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-text leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-amber shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row — count-up */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to={createPageUrl("Experience")}>
            <Button variant="outline" className="group">
              View Full Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
