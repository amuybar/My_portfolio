import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import ProjectDetail from './components/ProjectDetail.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Testimonials from './components/Testimonials.js';
import NotFound from './components/NotFound.js';

import './App.css'

function App() {

    const [theme, setTheme] = useState('light');



    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };
  return (
    <Router>
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About/>
        <Portfolio />
        <ProjectDetail />
        <Contact />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
       <Routes>
         <Route component={NotFound} />
       </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
