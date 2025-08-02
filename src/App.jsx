import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import LearningTracks from './pages/LearningTracks';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import InnovationTech from './pages/InnovationTech';
import Guidelines from './pages/Guidelines';
import MediaCenter from './pages/MediaCenter';
import ContactUs from './pages/ContactUs';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-all duration-500">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/learning-tracks" element={<LearningTracks />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/innovation-tech" element={<InnovationTech />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/media-center" element={<MediaCenter />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;