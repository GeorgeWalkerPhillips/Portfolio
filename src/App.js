import './App.css';
import './components/Cursor.css'
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './components/pages/Home.js';
import About from './components/AboutSection.js';
import Education from './components/EducationSection';
import Project from './components/ProjectsSection';
import Contact from './components/ContactSection';
import BulletInferno from './components/BulletInferno';
import Game from './components/pages/Game';

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes> 
    </Router>
    </>
  );
}

export default App;
