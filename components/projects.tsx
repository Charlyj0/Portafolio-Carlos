"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="
        px-6 py-24
        bg-white text-gray-900
        dark:bg-black dark:text-orange-500
        transition-colors duration-300
      "
    >
      {/* Title */}
      <h2
        className="
          text-4xl font-bold text-center mb-12
          text-gray-900
          dark:text-orange-500
        "
      >
        Portafolio
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}