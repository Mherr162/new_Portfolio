import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile, stats } from "../../src/data/portfolio.js";

const ROLES = [
  "Full-Stack Developer",
  "React & TypeScript Engineer",
  "Frontend-Leaning Engineer",
  "Problem Solver",
];

function useCountUp(target, duration = 1000) {
  const numericTarget = parseFloat(target);
  const isFloat = String(target).includes(".");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(numericTarget)) {
      setCount(numericTarget);
      return;
    }
    const steps = 50;
    const increment = numericTarget / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [numericTarget, duration, isFloat]);

  return isFloat ? count.toFixed(2) : count;
}

function StatCard({ stat }) {
  const displayValue = useCountUp(stat.value);

  return (
    <div
      className="rounded-xl p-4 border"
      style={{
        background: "var(--bg-surface-2)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="font-mono text-2xl font-semibold"
        style={{ color: "var(--color-accent)" }}
      >
        {displayValue}{stat.suffix}
      </div>
      <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
        {stat.label}
      </div>
      {stat.sub && (
        <div className="text-xs mt-0.5" style={{ color: "var(--text-subtle)" }}>
          {stat.sub}
        </div>
      )}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Summary: first ~120 chars
  const summaryShort = profile.summary.length > 120
    ? profile.summary.slice(0, 120).trimEnd() + "…"
    : profile.summary;

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          top: "-10%",
          right: "-8%",
          width: "480px",
          height: "480px",
          background: "rgba(232, 176, 75, 0.18)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "-12%",
          left: "-8%",
          width: "400px",
          height: "400px",
          background: "rgba(74, 222, 128, 0.12)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="eyebrow">// available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-display text-6xl lg:text-8xl font-light leading-none"
                style={{ color: "var(--text-primary)" }}
              >
                Michel<br />Herrera
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div variants={itemVariants} className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="block font-mono text-lg"
                  style={{ color: "var(--color-accent)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {summaryShort}
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                📍 {profile.location}
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 items-start"
            >
              <Link
                to="/Contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-accent)",
                  color: "#0a0a0a",
                }}
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              {/* Social icons */}
              <div className="flex gap-2 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-2.5 rounded-lg border transition-colors hover:bg-white/5"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-lg border transition-colors hover:bg-white/5"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  title="Email"
                  className="p-2.5 rounded-lg border transition-colors hover:bg-white/5"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — terminal block ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Terminal card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-surface-2)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Mac-style header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "var(--bg-surface)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#ff5f57" }} />
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#febc2e" }} />
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#28c840" }} />
                <span
                  className="ml-auto font-mono text-xs"
                  style={{ color: "var(--text-subtle)" }}
                >
                  portfolio.tsx
                </span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-7">
                <div>
                  <span style={{ color: "#c678dd" }}>const</span>{" "}
                  <span style={{ color: "#e5c07b" }}>michel</span>
                  <span style={{ color: "#abb2bf" }}>: </span>
                  <span style={{ color: "#e06c75" }}>Developer</span>
                  <span style={{ color: "#abb2bf" }}> = {"{"}</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>name: </span>
                  <span style={{ color: "#98c379" }}>"Michel Herrera"</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>role: </span>
                  <span style={{ color: "#98c379" }}>"Full-Stack Developer"</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>skills: [</span>
                </div>
                <div className="ml-12">
                  <span style={{ color: "#e8b04b" }}>"TypeScript"</span>
                  <span style={{ color: "#abb2bf" }}>, </span>
                  <span style={{ color: "#e8b04b" }}>"React"</span>
                  <span style={{ color: "#abb2bf" }}>, </span>
                  <span style={{ color: "#4ade80" }}>"Java"</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div className="ml-12">
                  <span style={{ color: "#e8b04b" }}>"Node.js"</span>
                  <span style={{ color: "#abb2bf" }}>, </span>
                  <span style={{ color: "#4ade80" }}>"Spring Boot"</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>],</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>location: </span>
                  <span style={{ color: "#98c379" }}>"Miami, FL"</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div className="ml-6">
                  <span style={{ color: "#abb2bf" }}>available: </span>
                  <span style={{ color: "#c678dd" }}>true</span>
                  <span style={{ color: "#abb2bf" }}>,</span>
                </div>
                <div>
                  <span style={{ color: "#abb2bf" }}>{"};"}</span>
                </div>
                <div className="mt-4">
                  <span style={{ color: "#c678dd" }}>export default</span>
                  <span style={{ color: "#abb2bf" }}> michel;</span>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div
              className="absolute -top-4 -right-3 px-3 py-1.5 rounded-full text-xs font-mono font-semibold shadow-lg animate-float"
              style={{
                background: "rgba(232,176,75,0.15)",
                border: "1px solid rgba(232,176,75,0.35)",
                color: "#e8b04b",
                transform: "rotate(3deg)",
                animationDelay: "0s",
              }}
            >
              TypeScript
            </div>
            <div
              className="absolute top-1/3 -left-5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold shadow-lg animate-float"
              style={{
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.3)",
                color: "#4ade80",
                transform: "rotate(-4deg)",
                animationDelay: "1.2s",
              }}
            >
              React
            </div>
            <div
              className="absolute -bottom-3 right-10 px-3 py-1.5 rounded-full text-xs font-mono font-semibold shadow-lg animate-float"
              style={{
                background: "rgba(232,176,75,0.1)",
                border: "1px solid rgba(232,176,75,0.25)",
                color: "#e8b04b",
                transform: "rotate(2deg)",
                animationDelay: "2.1s",
              }}
            >
              Java
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
