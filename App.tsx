import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { LegacyProjects } from './components/LegacyProjects';
import { Gallery } from './components/Gallery';
import { MemoryWall } from './components/MemoryWall';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <LegacyProjects />
        <Gallery />
        <MemoryWall />
      </main>
      <Footer />
    </div>
  );
}

export default App;
