import React from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../styles/Home.css';

function Home() {
  const handleDownloadResume = () => {
    const resumeUrl = ''; // Provide the URL for your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <div className="left-child">
        <div className="picture">
          <img src="/images/cash-macanaya-ykO7Nb5pQt8-unsplash.jpg" alt="" />
        </div>
      </div>
      <div className="right-child">
        <div className="description" >
          <h1>Welcome Barrack To Amuyunzu Portfolio</h1>
          <p>
          Hello, I am Barrack, a enthusiastic junior developer with great interest in React and Node js. Currently learning the development spectrum, From Python django and Dart Flutter to Automation with Selenium . Open to more exploration as i Learn more on this Industry.
          </p>
        </div>
        <div className="cta-buttons">
          <button className="cta-button" onClick={handleDownloadResume}>
            <FaDownload /> Download Resume
          </button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/barrack-amuyunzu-7414142b9" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/amuybar?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/baraq_odari" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
