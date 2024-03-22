import React, { useState } from 'react';
import Certificates from './Certificate';

import '../styles/Home.css';





function Home() {

  const [showCertificates, setShowCertificates] = useState(false);

  const certificates = [
    { name: 'Certificate 1', url: '/files/certificate1.pdf' },
    { name: 'Certificate 2', url: '/files/certificate2.pdf' },
    // Add more certificates as needed
  ];

  const handleToggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  const handleCloseCertificates = () => {
    setShowCertificates(false);
  };


  const handleDownloadResume = () => {
    const resumeUrl = 'src/files/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home">
      <div className="description">
        <h1>Welcome to My Portfolio</h1>
        <p>
        Hello! I'm Barry, a passionate junior developer with a strong enthusiasm for coding and problem-solving. 
        </p>
      </div>
      <div className="cta-buttons">
      <button className="cta-button" onClick={handleDownloadResume}>Download Resume</button>
         <button className="cta-button" onClick={handleToggleCertificates}>View Certificates</button>
      </div>
      <div className="picture">
        <img src="images/home.jpeg" alt="" />
      </div>
      {showCertificates && <Certificates certificates={certificates} onClose={handleCloseCertificates} />}
   
    </div>
  );
}

export default Home;
