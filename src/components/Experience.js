import React from 'react';
import '../styles/Experience.css'
function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Internship - Rivatex Company</h3>
        <p>Duration: January/2022 - March/2022</p>
        <p>Description: Familiarizing with Industry environment and understanding business aspect of IT.</p>
      </div>
      <div className="experience-item">
        <h3>Remote Work - RemoteTask</h3>
        <p>Duration: December/2023 - February/2024</p>
        <p>Description: Training AI Model.</p>
      </div>
      <div className="experience-item">
        <h3>Online Work - CloudWorker</h3>
        <p>Duration: January/2024 - ...</p>
        <p>Description: Training AI Model.</p>
      </div>
    </div>
  );
}

export default Experience;
