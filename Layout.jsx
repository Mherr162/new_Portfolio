import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  Award,
  FileText,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { profile } from "./src/data/portfolio.js";

const navigationItems = [
  { name: "Home", url: "/Home", icon: Home },
  { name: "About", url: "/About", icon: User },
  { name: "Projects", url: "/Projects", icon: Code },
  { name: "Experience", url: "/Experience", icon: Briefcase },
  { name: "Certifications", url: "/Certifications", icon: Award },
  { name: "Contact", url: "/Contact", icon: MessageSquare },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (url) => {
    if (url === "/Home") return location.pathname === "/" || location.pathname === "/Home";
    return location.pathname === url;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="grain min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Fixed Navigation Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(10,10,10,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link
              to="/Home"
              className="font-display text-warm-white text-xl tracking-tight hover:text-amber transition-colors duration-200"
            >
              Michel Herrera
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-mono tracking-wide transition-all duration-200 ${
                    isActive(item.url)
                      ? "text-amber border-b-2 border-amber bg-amber/5"
                      : "text-muted-text hover:text-warm-white hover:bg-surface-hover"
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.name}
                </Link>
              ))}
              {/* Resume — external link */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-mono tracking-wide transition-all duration-200 text-muted-text hover:text-warm-white hover:bg-surface-hover"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-muted-text hover:text-warm-white hover:bg-surface-hover transition-all duration-200"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="px-4 py-3 space-y-1" style={{ backgroundColor: "rgba(10,10,10,0.97)" }}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all duration-200 ${
                      isActive(item.url)
                        ? "text-amber bg-amber/8 border border-amber/20"
                        : "text-muted-text hover:text-warm-white hover:bg-surface-hover"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
                {/* Resume — external */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all duration-200 text-muted-text hover:text-warm-white hover:bg-surface-hover"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                  <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Col 1: Name + bio */}
            <div>
              <h3 className="font-display text-warm-white text-xl mb-3">{profile.name}</h3>
              <p className="text-muted-text text-sm leading-relaxed">{profile.tagline}</p>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-text hover:text-amber transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-text hover:text-amber transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-text hover:text-amber transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="font-mono text-xs tracking-widest text-muted-text uppercase mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-sm text-muted-text hover:text-amber transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-text hover:text-amber transition-colors duration-200"
                >
                  Resume <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h3 className="font-mono text-xs tracking-widest text-muted-text uppercase mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-muted-text">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-amber transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {profile.email}
                </a>
                <a
                  href={profile.phoneTel}
                  className="flex items-center gap-2 hover:text-amber transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  {profile.phone}
                </a>
                <p className="text-muted-text">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-8 text-center text-xs text-muted-text font-mono"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            &copy; 2026 Michel Herrera. Built with React &amp; Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
