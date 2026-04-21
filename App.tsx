import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>לזכרו של רונאל בן משה | אתר הנצחה ופעילות חברתית</title>
        <meta name="description" content="אתר הנצחה המוקדש לזכרו של רונאל בן משה הי״ד. כאן תוכלו להכיר את חייו, דרכו והפרויקטים שהוקמו לזכרו - חיים ברונאל, גמ״ח הצעות נישואים ועוד." />
        <meta name="keywords" content="רונאל בן משה, חיים ברונאל, דף הנצחה רונאל בן משה, הנצחת חללי צהל, גמח הצעות נישואים, פרויקטים חברתיים" />
        <link rel="canonical" href="https://remember-ronel.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="לזכרו של רונאל בן משה | אתר הנצחה" />
        <meta property="og:description" content="מנציחים את האור והחיוך של רונאל דרך עשייה ונתינה. מוזמנים להכיר את המורשת שהשאיר אחריו." />
        <meta property="og:image" content="https://drive.google.com/thumbnail?id=1Bk7rc-bXN-aa2EpASnY6T3UHuO0rPW7w&sz=w1200" />
      </Helmet>
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
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding-proposals" element={<WeddingProposalsPage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
