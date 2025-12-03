import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <p className="text-xl font-display text-white font-bold mb-2">רונאל בן משה ז"ל</p>
          <p>נפל על הגנת המולדת</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-sm">
          <a href="https://www.instagram.com/remember_ronel/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
          <a href="https://www.tiktok.com/@remember_ronel?_r=1&_t=ZS-91v85se8uEH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok</a>
          <a href="https://ronel-lovely.softr.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">אתר השידוכים</a>
          <a href="https://www.guidestar.org.il/organization/580827871" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">העמותה לזכרו</a>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 text-xs">
            נבנה באהבה <Heart size={12} className="text-red-500 fill-current" /> לזכרו של רונאל
          </p>
          <p className="text-xs text-gray-600">
            כל הזכויות שמורות למשפחה ולחברים © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};