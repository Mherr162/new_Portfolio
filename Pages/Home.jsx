import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "../Components/ui/button.jsx";

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
      <section className="py-24 bg-surface-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-sm text-amber-400 tracking-widest uppercase mb-4">
            // let's work together
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Let's Build Something
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Have an idea or an open role? I'm ready to collaborate and ship something great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact">
              <Button
                size="lg"
                className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-semibold"
              >
                Get In Touch
              </Button>
            </Link>
            <Link to="/Projects">
              <Button
                size="lg"
                variant="outline"
                className="border-text-muted text-text-primary hover:bg-surface-2"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
