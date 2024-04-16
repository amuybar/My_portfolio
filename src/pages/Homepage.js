import React from 'react'
import Home from '../components/Home.js';
import About from '../components/About.js';
import Portfolio from '../components/Portfolio.js';
import ProjectDetail from '../components/ProjectDetail.js';
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Experience from '../components/Experience.js';
import Education from '../components/Education.js';
import Testimonials from '../components/Testimonials.js';
function Homepage() {
  return (
    <div>
        <Home />
        <About/>
        <Portfolio />
        <ProjectDetail />
        <Contact />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <div className="auth-btn">
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>
    </div>
  )
}

export default Homepage
