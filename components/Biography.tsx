
import React, { useState } from 'react';
import { SectionId } from '../types';
import { BookOpen, ExternalLink, Star, Award, Play, X } from 'lucide-react';

export const Biography: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Using a representative high-quality portrait for the biography section
  const bioImage = "https://lh3.googleusercontent.com/pw/AP1GczPLT0t13adW5vlvQtELtJbpPVqFHPOaeVQd8UdMKkOjNqTUibQfslXt_JmZukNW_5Y0Q2B5Xg0E_1PJT8q_uMuY0J_mte3FQN7fEuYuLph-OHG1E5vWe0MwM3B0l08jH0KO4MV38CBz2aDx7mpAbpWd7A=w1502-h1462-s-no-gm?authuser=0";

  return (
    <section id={SectionId.BIO} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Media Side (Image with Play Button) */}
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
                 <div className="absolute -inset-4 bg-memorial-gold/10 rounded-2xl transform -rotate-2"></div>
                 <div className="absolute -inset-4 bg-memorial-blue/5 rounded-2xl transform rotate-2"></div>
                 
                 {/* Image Container with Play Trigger */}
                 <div 
                  className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-200 aspect-[3/4] group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                    <img 
                      src={bioImage} 
                      alt="רונאל בן משה" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Noticeable Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-ping scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative bg-white text-memorial-gold p-6 rounded-full shadow-2xl transform transition-transform duration-500 group-hover:scale-125 flex items-center justify-center">
                          <Play size={40} className="fill-current ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Instruction Text */}
                    <div className="absolute bottom-6 left-0 right-0 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold text-lg drop-shadow-md">לחצו לצפייה בסרטון ההנצחה</p>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-r-4 border-memorial-gold max-w-xs z-10 hidden md:block">
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
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Video Iframe */}
            <div className="relative aspect-video">
              <iframe 
                src="https://drive.google.com/file/d/1_CwdPVMy7209KWnl-fACeQImwbOzyAmo/preview?autoplay=1" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                title="רונאל בן משה - סרטון הנצחה"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
