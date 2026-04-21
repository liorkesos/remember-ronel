
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Heart, ArrowRight, Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WeddingProposalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  const images = [
    "https://drive.google.com/thumbnail?id=1tbPP-RWgSvWaHeLr4GMTj2FDMeXmXmHn&sz=w1200",
    "https://drive.google.com/thumbnail?id=1fOqpp9qsLq8DuHk5PKwPkFJ6w3uOChf6&sz=w1200",
    "https://drive.google.com/thumbnail?id=1pC_9Cjq4E4ggb-YMyWSIjlGRFC9ZszpX&sz=w1200",
    "https://drive.google.com/thumbnail?id=1frX9fn8jnEX5TxkCpPHYO_zAaENnzpXZ&sz=w400"
  ];
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-6 animate-bounce">
                <Heart size={16} className="fill-current" />
                <span>מיזם של אהבה ונתינה</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight">
                גמ״ח הצעות נישואים <br />
                <span className="text-memorial-blue">לזכרו של רונאל בן משה</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                רונאל אהב לחבר בין לבבות ולהפיץ אור בכל מקום. לזכרו, הקמנו את הגמ״ח כדי להעניק לכם רגע קסום של פעם בחיים. אנחנו כאן כדי לעזור לכם להפוך את הצעת הנישואים שלכם למושלמת, עוטפת ומלאה באהבה - בדיוק כפי שרונאל היה עושה.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="space-y-6">
                <img 
                  src={images[0]} 
                  alt="עיצוב הצעת נישואים" 
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={images[2]} 
                  alt="פרטים קטנים של אהבה" 
                  className="w-full h-[300px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6 md:pt-12">
                <img 
                  src={images[1]} 
                  alt="לב מעץ בעיצוב" 
                  className="w-full h-[300px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={images[3]} 
                  alt="הפקה מלאה" 
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">מה אנחנו מספקים?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Heart className="text-memorial-blue w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">ריהוט</h3>
                      <p className="text-gray-600 leading-relaxed">שטיח גדול, מעמד מדפים מעץ, כיסאות, שולחן וכל מה שצריך כדי ליצור את התפאורה המושלמת.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Calendar className="text-memorial-blue w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">תאורה ואווירה</h3>
                      <p className="text-gray-600 leading-relaxed">נרות, כוסות יין, עציץ, מפה, מסגרות לתמונות, גרילנדות ואלמנטים עיצוביים שיוצרים רגע קסום ובלתי נשכח.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageCircle className="text-memorial-blue w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">הכל בחינם</h3>
                      <p className="text-gray-600 leading-relaxed">השירות ניתן כגמ״ח מלא, ללא כל עלות, לזכרו של רונאל האהוב שלנו.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-gray-100 text-center">
                  <h3 className="text-2xl font-bold mb-6">רוצים לתאם הצעת נישואים?</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="https://wa.me/972523283573" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg transform hover:-translate-y-1"
                    >
                      <MessageCircle size={20} />
                      דברו איתנו בוואטסאפ
                    </a>
                    <a 
                      href="tel:0523283573" 
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg transform hover:-translate-y-1"
                    >
                      <Phone size={20} />
                      טלפון 052-3283573
                    </a>
                  </div>
                  <p className="mt-6 text-gray-500 text-sm italic">
                    * מומלץ ליצור קשר לפחות שבוע מראש כדי להבטיח זמינות של הציוד. איסוף מנס ציונה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Memorial Section */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold mb-8">רוצים להכיר את רונאל?</h2>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-memorial-blue hover:text-blue-700 font-bold text-lg group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              חזרה לאתר ההנצחה הראשי
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
