import React from 'react';
import '../styles/ProjectDetail.css'
function ProjectDetail() {

  const githubUrl = 'https://github.com/amuybar/My_portfolio.git'; 

  return (
    <div className="project-detail">
      <h2>Project Detail</h2>
      <p>
      This portfolio web app serves as a showcase of my skills, experiences, and projects. It provides visitors with an overview of my background, including my education, work experience, and testimonials. The portfolio section highlights various projects I have worked on, each displayed as a card with a brief description and a link to view more details. The app also features a dark/light mode toggle for user preference. Additionally, visitors can download my resume and view my certificates directly from the website.
      Tech used:React,Axios,Git/Github/Netlify and Node js
      </p>
      <a href={githubUrl} className="cta-button" target="_blank" rel="noopener noreferrer">Get the Code</a>
     </div>
  );
}

export default ProjectDetail;
