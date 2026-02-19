
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { BookOpen, ExternalLink, Star, Award, Play, X, ExternalLink as OutLink } from 'lucide-react';

export const Biography: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // High-quality portrait for the biography section
  const bioImage = "https://lh3.googleusercontent.com/pw/AP1GczPLT0t13adW5vlvQtELtJbpPVqFHPOaeVQd8UdMKkOjNqTUibQfslXt_JmZukNW_5Y0Q2B5Xg0E_1PJT8q_uMuY0J_mte3FQN7fEuYuLph-OHG1E5vWe0MwM3B0l08jH0KO4MV38CBz2aDx7mpAbpWd7A=w1502-h1462-s-no-gm?authuser=0";

  // Google Drive preview link
  const videoId = "1_CwdPVMy7209KWnl-fACeQImwbOzyAmo";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
  const directLink = `https://drive.google.com/file/d/${videoId}/view?usp=sharing`;

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id={SectionId.BIO} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Media Side (Image with Enhanced Play Button) */}
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
                 <div className="absolute -inset-4 bg-memorial-gold/10 rounded-2xl transform -rotate-2"></div>
                 <div className="absolute -inset-4 bg-memorial-blue/5 rounded-2xl transform rotate-2"></div>
                 
                 {/* Image Container with Play Trigger */}
                 <div 
                  className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-200 aspect-[3/4] group cursor-pointer"
                  onClick={handleOpenModal}
                >
                    <img 
                      src={bioImage} 
                      alt="רונאל בן משה" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay with transition */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

                    {/* Noticeable & Dynamic Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group/btn">
                        {/* Orbiting Ring */}
                        <div className="absolute -inset-8 border border-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                        
                        {/* Pulsing Aura */}
                        <div className="absolute inset-0 bg-memorial-gold rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                        
                        {/* Main Button */}
                        <div className="relative bg-white text-memorial-dark w-24 h-24 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-memorial-gold group-hover:text-white">
                          <Play size={44} className="fill-current ml-2" />
                        </div>

                        {/* Text Label above button */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                           <span className="text-white font-bold text-sm tracking-widest uppercase">לחצו להפעלה</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <p className="font-display font-bold text-2xl mb-1">סרטון לזכרו של רונאל</p>
                      <p className="text-memorial-gold/90 font-medium">לצפייה בסיפורו של הגיבור</p>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-r-4 border-memorial-gold max-w-xs z-10 hidden md:block">
                    <div className="flex items-center gap-3 text-memorial-dark mb-2">
                      <div className="bg-memorial-gold/20 p-2 rounded-full">
                        <Award className="text-memorial-gold w-6 h-6" />
                      </div>
                      <span className="font-bold text-lg">גיבור ישראל</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      נפל בקרב גבורה ב-24.6.2024 בעת שהגן על המולדת.
                    </p>
                 </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-memorial-gold font-bold uppercase tracking-wider text-sm mb-2">
                    <Star size={16} />
                    <span>סיפור חייו</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-memorial-dark leading-tight">
                    הלב הגדול שנדם<br/>
                    אך ממשיך לפעום
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    סמ"ר <strong>רונאל בן משה ז"ל</strong>, בן 20 מרחובות, היה איש של אנשים, שמחה ונתינה אינסופית.
                    רונאל נפל בקרב גבורה ביום כ"ח בסיוון תשפ"ד (24.06.2024).
                  </p>
                  <p>
                    בכל מקום אליו הגיע, הפיץ אור ואהבה. חבריו מספרים על אדם שתמיד ראה את האחר, שתמיד היה שם כדי להושיט יד, לחייך ולעודד.
                    מותו הוא אבדה כבדה למשפחתו, לחבריו ולכל עם ישראל.
                  </p>
                  <p>
                    סיפור גבורתו מהדהד בליבם של רבים, והמורשת שהשאיר אחריו ממשיכה לחיות דרך המפעלים הרבים שהוקמו לזכרו.
                  </p>
                </div>

                <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-memorial-dark mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-memorial-blue" />
                    כתבות ומאמרים בתקשורת
                  </h3>
                  <div className="grid gap-4">
                    <a href="https://www.inn.co.il/news/672578" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300">
                       <span className="bg-blue-100 text-blue-600 p-2 rounded shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                         <ExternalLink size={18} />
                       </span>
                       <div>
                         <span className="font-bold text-gray-900 block group-hover:text-blue-600 transition">ערוץ 7</span>
                         <span className="text-sm text-gray-600">הותר לפרסום שמו של רונאל בן משה שנפל בקרב</span>
                       </div>
                    </a>

                    <a href="https://www.ynet.co.il/news/article/s1jbgxfexe" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300">
                       <span className="bg-red-100 text-red-600 p-2 rounded shrink-0 group-hover:bg-red-600 group-hover:text-white transition">
                         <ExternalLink size={18} />
                       </span>
                       <div>
                         <span className="font-bold text-gray-900 block group-hover:text-red-600 transition">Ynet</span>
                         <span className="text-sm text-gray-600">סיפורו של רונאל בן משה</span>
                       </div>
                    </a>

                    <a href="https://www.israelhayom.co.il/news/local/article/18276165" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300">
                       <span className="bg-indigo-100 text-indigo-600 p-2 rounded shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
                         <ExternalLink size={18} />
                       </span>
                       <div>
                         <span className="font-bold text-gray-900 block group-hover:text-indigo-600 transition">ישראל היום</span>
                         <span className="text-sm text-gray-600">על הגיבורים: רונאל בן משה</span>
                       </div>
                    </a>
                  </div>
                </div>
            </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with extra blur */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500 animate-in fade-in"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content container */}
          <div className="relative w-full max-w-5xl bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-500 flex flex-col border border-white/10">
            {/* Custom Header Bar */}
            <div className="p-4 bg-zinc-800/50 flex justify-between items-center border-b border-white/5">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                 <h4 className="text-white/80 font-display font-bold text-sm md:text-base">לזכרו של רונאל בן משה ז"ל</h4>
               </div>
               <button 
                  className="text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                  onClick={handleCloseModal}
                  aria-label="סגור"
                >
                  <X size={28} />
                </button>
            </div>

            {/* Video Player Section */}
            <div className="relative aspect-video w-full bg-black group/video">
              <iframe 
                src={embedUrl} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                title="רונאל בן משה - סרטון הנצחה"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              
              {/* Fallback Overlay (shown briefly or if clicked) */}
              <div className="absolute inset-0 pointer-events-none bg-transparent flex items-center justify-center">
                 <div className="hidden group-hover/video:flex flex-col items-center gap-4 bg-black/60 p-6 rounded-2xl backdrop-blur-md border border-white/10 transition-opacity">
                    <p className="text-white font-medium text-center">הווידאו לא נטען? </p>
                    <a 
                      href={directLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto bg-memorial-gold text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-600 transition shadow-lg"
                    >
                      פתחו ישירות ב-Google Drive
                      <OutLink size={18} />
                    </a>
                 </div>
              </div>
            </div>

            {/* Footer / Instruction Bar */}
            <div className="p-4 bg-zinc-800/80 text-center border-t border-white/5">
              <p className="text-white/60 text-xs md:text-sm flex items-center justify-center gap-2">
                מכיוון שהסרטון מאוחסן ב-Google Drive, ייתכן שיידרש ללחוץ על כפתור ההפעלה שבמרכז הנגן.
                <a href={directLink} target="_blank" rel="noopener noreferrer" className="text-memorial-gold hover:underline font-bold mr-2">
                  לצפייה במסך מלא ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
