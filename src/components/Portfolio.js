import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Portfolio.css'
function Portfolio() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Burned Meat Website',
      imageUrl: '/images/Screenshot from 2024-02-28 10-43-22.png',
      projectUrl: 'https://roastymeat.netlify.app/'
    },
    {
      id: 2,
      title: 'Computer Accessories Website',
      imageUrl: '/images/Screenshot from 2024-02-28 10-44-45.png',
      projectUrl: 'https://computeraccessories.netlify.app'
    },
  
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
