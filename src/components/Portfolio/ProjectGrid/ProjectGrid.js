'use client';

import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ProjectGrid({ projects, activeCategory }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.id === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              No Projects Found
            </h3>
            <p 
              className="text-lg"
              style={{ color: themeColors.textSecondary }}
            >
              Try selecting a different category to see more projects.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: themeColors.text }}
              >
                {activeCategory === 'all' ? 'All Projects' : `${filteredProjects[0]?.category.name} Projects`}
              </h2>
              <p 
                className="text-lg"
                style={{ color: themeColors.textSecondary }}
              >
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </>
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}