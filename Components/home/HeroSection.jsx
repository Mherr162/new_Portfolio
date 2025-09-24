import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/button.jsx";
import { Badge } from "../../Components/ui/badge.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Zap
} from "lucide-react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = useMemo(() => [
    "Product-Focused Full-Stack Engineer",
    "Frontend-Leaning Full-Stack (React)",
    "Backend-Leaning Full-Stack (Node)",
    "Developer Experience (DX) Engineer",
    "AI Enthusiast"
  ], []);

  // Typing animation effect
  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    let isDeleting = false;

    const fullText = roles[currentRole];

    const typeWriter = () => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
      } else {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      if (!isDeleting && currentIndex === fullText.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
        timeoutId = setTimeout(typeWriter, 500);
      } else {
        timeoutId = setTimeout(typeWriter, isDeleting ? 50 : 100);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentRole]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(-${Math.random() * 100}px) scale(${1 + Math.random() * 0.5})`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"
        style={{ transform: `scale(${1 + Math.random() * 0.1}) rotate(${Math.random() * 360}deg)` }}
      />
      <div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-20"
        style={{ transform: `scale(${1 + Math.random() * 0.1}) rotate(${Math.random() * 360}deg)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 animate-pulse">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for New Opportunities
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Michel Herrera
              </h1>
              
              <div className="h-8 md:h-10 mt-2">
                <h2 className="text-xl md:text-2xl text-blue-600 font-semibold">
                  {typedText}
                  <span className="inline-block w-0.5 h-6 md:h-8 bg-blue-600 ml-1 animate-pulse" />
                </h2>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full Stack Developer who made the shift from "being a licensed electrician to building innovative software. I work with React, TypeScript, JavaScript, C#, and Java to create responsive, user-friendly apps.
            </motion.p>

            <motion.div 
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Miami, Florida</span>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">3.72 GPA</div>
                <div className="text-sm text-gray-600">Computer Science, FIU</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">First-time Fix Rate</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link to={createPageUrl("Contact")}>
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 group">
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get In Touch
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a 
                href="https://github.com/mherr162" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a 
                href="https://linkedin.com/in/michelherrera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="mailto:michelhm22@icloud.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Mail className="w-6 h-6 text-green-600" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-auto text-xs text-gray-400">portfolio.tsx</div>
                </div>
                
                {/* Code Content */}
                <div className="p-4 text-sm font-mono">
                  <div className="text-blue-400">const developer = {"{"}</div>
                  <div className="ml-4 text-white">
                    name: <span className="text-green-400">"Michel Herrera"</span>,
                  </div>
                  <div className="ml-4 text-white">
                    role: <span className="text-green-400">"Full Stack Developer"</span>,
                  </div>
                  <div className="ml-4 text-white">skills: [</div>
                  <div className="ml-8 text-green-400">"React", "TypeScript", "Java"</div>
                  <div className="ml-4 text-white">],</div>
                  <div className="ml-4 text-white">
                    passion: <span className="text-green-400">"Building innovative software"</span>
                  </div>
                  <div className="text-blue-400">;</div>
                  <div className="mt-4 text-purple-400">
                    <span className="text-blue-400">export default</span> developer;
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <div className="absolute top-1/2 -left-4 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs">JS</span>
            </div>
            <div className="absolute -bottom-4 right-8 w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">React</span>
            </div>
            
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );

}
