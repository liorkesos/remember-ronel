import React from 'react';
import { SectionId } from '../types';
import { Heart, Users, ArrowLeft, ExternalLink } from 'lucide-react';

export const LegacyProjects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-memorial-gold/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-memorial-blue/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-memorial-blue font-bold tracking-wider uppercase text-sm mb-2 block">המורשת של רונאל</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-memorial-dark mb-6">ממשיכים את האור</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            החיוך של רונאל ממשיך להאיר את העולם דרך מיזמים חברתיים של אהבה ונתינה שהוקמו על ידי משפחתו וחבריו.
          </p>
          <div className="w-24 h-1.5 bg-memorial-gold mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Matchmaking Project */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 group border border-gray-100 flex flex-col">
            <div className="relative h-64 bg-gradient-to-br from-pink-500 via-rose-500 to-red-600 overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute bottom-0 right-0 opacity-20 transform translate-y-1/4 translate-x-1/4">
                 <Heart size={200} className="fill-white" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6 text-center">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4 group-hover:scale-110 transition duration-500">
                    <Heart className="w-12 h-12 fill-white" />
                  </div>
                  <h3 className="text-3xl font-bold shadow-sm">השידוכים של רונאל</h3>
                  <p className="text-pink-100 mt-2 font-medium">בונים בתים נאמנים בישראל</p>
               </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                רונאל אהב לחבר בין לבבות. לזכרו הוקם מיזם השידוכים 
                <span className="font-bold text-rose-500 mx-1">"Ronel Lovely"</span>
                שנועד לעזור לרווקים ורווקות למצוא את החצי השני שלהם, מתוך אמונה שאהבה היא הכוח החזק ביותר.
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    <span>מאגר שידוכים איכותי ומסונן</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    <span>ליווי אישי ורגיש</span>
                 </div>
              </div>

              <a 
                href="https://ronel-lovely.softr.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-8 py-4 rounded-xl font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                לכניסה לאתר השידוכים
                <ArrowLeft size={20} />
              </a>
            </div>
          </div>

          {/* Amuta Project */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 group border border-gray-100 flex flex-col">
            <div className="relative h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-memorial-blue overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute bottom-0 left-0 opacity-20 transform translate-y-1/4 -translate-x-1/4">
                 <Users size={200} className="fill-white" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-6 text-center">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4 group-hover:scale-110 transition duration-500">
                    <Users className="w-12 h-12 fill-white" />
                  </div>
                  <h3 className="text-3xl font-bold shadow-sm">העמותה להנצחה</h3>
                  <p className="text-blue-100 mt-2 font-medium">ע"ר 580827871</p>
               </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                העמותה הוקמה במטרה להנציח את מורשתו ודרכו של רונאל. אנו פועלים לקידום עשייה חברתית, תמיכה בחיילים, סיוע למשפחות נזקקות וקיום אירועי הנצחה וזיכרון.
              </p>

              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>הנצחת זכרו ומורשתו</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>פעילות חברתית ותרומה לקהילה</span>
                 </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a 
                  href="https://www.guidestar.org.il/organization/580827871" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-memorial-blue bg-blue-50 hover:bg-blue-100 border border-blue-200 px-8 py-4 rounded-xl font-bold transition"
                >
                  לפרטי העמותה (גיידסטאר)
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};