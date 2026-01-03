import React from 'react';
import { SectionId } from '../types';
import { ChevronDown, ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden pt-20 md:pt-0">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-memorial-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-memorial-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative h-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center h-full">
          
          {/* Text Content (Right side in RTL) */}
          <div className="text-right space-y-8 order-2 md:order-1 pb-16 md:pb-0">
            {/* Dates Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg">
              <span className="text-memorial-gold font-bold text-lg font-display">2025</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              <span className="text-memorial-gold font-bold text-lg font-display">2004</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight">
                רונאל <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-yellow-200 via-memorial-gold to-yellow-600">
                  בן משה
                </span>
                <span className="text-2xl md:text-4xl mr-4 font-light text-gray-500 align-top">ז"ל</span>
              </h1>
            </div>

            <div className="border-r-4 border-memorial-gold pr-6 py-2 space-y-2">
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                גיבור ישראל שנפל בקרב ב-24 ביוני.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                איש של אהבה, נתינה וחיוך נצחי שנחרט בלב כולם.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href={`#${SectionId.BIO}`}
                className="group px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-gray-900 border border-white/20 rounded-xl transition duration-300 font-bold text-lg backdrop-blur-sm flex items-center justify-center gap-3"
              >
                <span>להכיר את רונאל</span>
              </a>
              <a 
                href={`#${SectionId.PROJECTS}`}
                className="group px-8 py-4 bg-memorial-gold text-white rounded-xl hover:bg-yellow-500 transition duration-300 font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2"
              >
                 <span>ממשיכים את דרכו</span>
                 <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image Content (Left side in RTL) */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
               {/* Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-memorial-gold/20 to-transparent rounded-full blur-3xl transform rotate-12 scale-110"></div>
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition duration-700 ease-out">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                 <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNuKrSjYmVc1-pGzS6aq7EABL4FAvilbl4GOW2qy4ZwWkyskNM1O4CnJV3L9KlsvcG1bw1ITTWOCpOc3LjvFOn819v13hRPeekdw8gErnI-3p3jkIawPkmzQriv5X3MmPMb65yqdy1FD6eGkSL_mO3-=w946-h1390-s-no-gm?authuser=0" 
                  alt="רונאל בן משה" 
                  className="w-full h-full object-cover transform scale-105"
                />
               </div>

               {/* Floating element for "Hero of Israel" */}
               <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white text-gray-900 p-4 md:p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border-l-4 border-memorial-gold hidden sm:block">
                 <p className="font-bold text-lg leading-tight">גיבור ישראל</p>
                 <p className="text-sm text-gray-600 mt-1">נפל בקרב גבורה</p>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};