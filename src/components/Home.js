import React  from 'react';

import '../styles/Home.css';





function Home() {

 


  const handleDownloadResume = () => {
    const resumeUrl = '';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home">
      <div className='left-child'><div className="description">
        <h1>Welcome to My Portfolio</h1>
        <p>
        Hello! I'm Barry, a passionate junior developer with a strong enthusiasm for coding and problem-solving. 
        </p>
      </div>
      <div className="cta-buttons">
      <button className="cta-button" onClick={handleDownloadResume}>Download Resume</button>
    
      </div></div>
      <div className="picture">
        <img src="images/home.jpeg" alt="" />
      </div>
     
   
    </div>
  );
}

export default Home;
