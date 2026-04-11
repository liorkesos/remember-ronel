
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SectionId } from '../types';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ראשי', href: isHomePage ? `#${SectionId.HERO}` : `/#${SectionId.HERO}` },
    { label: 'סיפור חייו', href: isHomePage ? `#${SectionId.BIO}` : `/#${SectionId.BIO}` },
    { label: 'פרויקטים', href: isHomePage ? `#${SectionId.PROJECTS}` : `/#${SectionId.PROJECTS}` },
    { label: 'תודות', href: isHomePage ? `#${SectionId.THANK_YOU}` : `/#${SectionId.THANK_YOU}` },
    { label: 'גלריה', href: isHomePage ? `#${SectionId.GALLERY}` : `/#${SectionId.GALLERY}` },
    { label: 'זכרונות', href: isHomePage ? `#${SectionId.MEMORIES}` : `/#${SectionId.MEMORIES}` },
  ];

  const donationUrl = "https://pay.grow.link/150759c42b410ce5bafdeddd861594f3-MzAxMDczMg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-display font-bold text-xl transition-colors ${isScrolled || !isHomePage ? 'text-memorial-dark' : 'text-white'}`}
        >
          רונאל בן משה ז"ל
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-300 hover:text-memorial-gold ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-200'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a 
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-memorial-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 shadow-lg"
          >
            <Heart size={14} className="fill-current" />
            לתרומה
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || !isHomePage ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled || !isHomePage ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-4 flex flex-col gap-4 border-t">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-800 text-lg py-2 border-b border-gray-100 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-memorial-gold text-white text-center py-3 rounded-xl font-bold mt-2 flex items-center justify-center gap-2"
          >
            <Heart size={18} className="fill-current" />
            לתרומה להנצחת רונאל
          </a>
        </div>
      )}
    </nav>
  );
};
