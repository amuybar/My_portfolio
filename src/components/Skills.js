import React from 'react';
import '../styles/Skills.css'

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Dart</li>
          <li>C++</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Frontend Development</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Flutter</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Backend Development</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Skills;
