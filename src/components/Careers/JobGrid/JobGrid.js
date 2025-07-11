'use client';

import { useState } from 'react';
import JobCard from '../JobCard/JobCard';
import JobModal from '../JobModal/JobModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function JobGrid({ jobs, activeFilter }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase() === activeFilter.toLowerCase());

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
      id="open-positions"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Open Positions
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Find your next opportunity with us
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💼</div>
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              No Positions Found
            </h3>
            <p 
              className="text-lg"
              style={{ color: themeColors.textSecondary }}
            >
              Try selecting a different department or check back soon for new opportunities.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: themeColors.text }}
              >
                {activeFilter === 'all' ? 'All Departments' : `${activeFilter} Department`}
              </h3>
              <p 
                className="text-lg"
                style={{ color: themeColors.textSecondary }}
              >
                {filteredJobs.length} open position{filteredJobs.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={handleJobClick}
                />
              ))}
            </div>
          </>
        )}

        {selectedJob && (
          <JobModal
            job={selectedJob}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}