import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { LegacyProjects } from './components/LegacyProjects';
import { Gallery } from './components/Gallery';
import { MemoryWall } from './components/MemoryWall';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';
import { WeddingProposalsPage } from './components/WeddingProposalsPage';

const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <LegacyProjects />
        <ThankYou />
        <Gallery />
        <MemoryWall />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding-proposals" element={<WeddingProposalsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
