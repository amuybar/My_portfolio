import React from 'react';

function ProjectCard({ title, imageUrl, projectUrl }) {
  return (
    <div className="project-card">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;
