import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import NotFound from './components/NotFound.js';
import BlogPage from './pages/Blog.js';

import './App.css'
import Homepage from './pages/Homepage.js';
import Blog from './components/blog.js';
import CreatePost from './components/CreatePost.js';

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
       
       <Routes>
         <Route element={<NotFound/>} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/blogdetail" element={<Blog />} />
         <Route path="/" element={<Homepage />} />
         <Route path="/blogdetail" element={<Blog />} />
         <Route path="/create-post" element={<CreatePost />} />
       </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
