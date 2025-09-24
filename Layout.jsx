import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Home, User, Briefcase, Mail, Code, Award, FileText } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: Home },
    { name: "About", url: createPageUrl("About"), icon: User },
    { name: "Projects", url: createPageUrl("Projects"), icon: Code },
    { name: "Experience", url: createPageUrl("Experience"), icon: Briefcase },
    { name: "Certifications", url: createPageUrl("Certifications"), icon: Award },
    { name: "Contact", url: createPageUrl("Contact"), icon: Mail },
    { name: "Resume", url: "/resume.pdf", icon: FileText, external: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="font-bold text-xl text-gray-900">
              Michel Herrera
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.url
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <Code className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="flex flex-wrap gap-2">
              {navigationItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.url
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Michel Herrera</h3>
              <p className="text-gray-400">
                Full Stack Developer passionate about building innovative software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>michelhm22@icloud.com</p>
                <p>(786) 319-6002</p>
                <p>Miami, Florida</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Michel Herrera. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
