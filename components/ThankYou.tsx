import React from 'react';
import { SectionId } from '../types';
import { Scroll } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <section id={SectionId.THANK_YOU} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-memorial-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row md:min-h-[600px]">
           {/* Image Section */}
           <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-auto bg-gray-100 order-1 md:order-2">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMuJJJy9PKcig8nPs7e7rPHV0ERYLw_J_xUi6wG4tLIZtDl5Pcjvv5ZuwY-RfG0-jIii_NVAXVU0LV3gxbKQTyqMQptZM16_GGldmroFBRCqr1bZ2GHkKZHqYWU2rX-GbYZ0K_FaybamY2owGFKnP7G4A=w721-h961-s-no-gm?authuser=0" 
                alt="רונאל מחזיק ספר תורה"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
           
           {/* Content Section */}
           <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-right order-2 md:order-1 relative">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                 <div className="p-3 bg-memorial-gold/10 rounded-full text-memorial-gold">
                   <Scroll size={28} />
                 </div>
                 <span className="text-sm font-bold tracking-widest text-memorial-gold uppercase">הוקרה ותודה</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
                ספר תורה לזכרו
              </h3>
              
              <div className="w-20 h-1.5 bg-memorial-gold mx-auto md:mx-0 mb-8 rounded-full"></div>

              <div className="flex justify-center md:justify-start mb-6">
                <img 
                  src="https://www.cal-online.co.il/media/c1ddvwgs/logo_cal-01.svg" 
                  alt="Cal Logo" 
                  className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                חברת <strong>כאל</strong> בראשות יו"ר הדירקטוריון <strong>עדי קפלן</strong> והמנכ"ל <strong>לוי הלוי</strong>, תרמה ספר תורה לזכרו של רונאל, הנמצא בשלבי כתיבה מתקדמים.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};