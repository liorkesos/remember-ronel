import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ראשי', href: `#${SectionId.HERO}` },
    { label: 'סיפור חייו', href: `#${SectionId.BIO}` },
    { label: 'פרויקטים', href: `#${SectionId.PROJECTS}` },
    { label: 'תודות', href: `#${SectionId.THANK_YOU}` },
    { label: 'גלריה', href: `#${SectionId.GALLERY}` },
    { label: 'זכרונות', href: `#${SectionId.MEMORIES}` },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-display font-bold text-xl ${isScrolled ? 'text-memorial-dark' : 'text-white'}`}>
          רונאל בן משה ז"ל
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium text-sm transition-colors duration-300 hover:text-memorial-gold ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
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
        </div>
      )}
    </nav>
  );
};