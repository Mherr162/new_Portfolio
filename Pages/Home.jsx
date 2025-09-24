import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "../Components/ui/button.jsx";
import { 
  Code, 
  Mail
} from "lucide-react";

import HeroSection from "../Components/home/HeroSection.jsx";
import SkillsPreview from "../Components/home/SkillsPreview.jsx";
import ProjectsPreview from "../Components/home/ProjectsPreview.jsx";
import ExperiencePreview from "../Components/home/ExperiencePreview.jsx";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link to={createPageUrl("Projects")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
