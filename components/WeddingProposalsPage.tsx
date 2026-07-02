
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Heart, ArrowRight, Phone, MessageCircle, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import proposalDeckSetup from '../src/assets/images/proposal_deck_setup_1781986333955.jpg';

export const WeddingProposalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const images = [
    {
      src: "https://drive.google.com/thumbnail?id=1tbPP-RWgSvWaHeLr4GMTj2FDMeXmXmHn&sz=w1200",
      alt: "שטיח לבן, מסגרת עץ דקורטיבית, שולחן וכיסאות מעץ"
    },
    {
      src: "https://drive.google.com/thumbnail?id=1fOqpp9qsLq8DuHk5PKwPkFJ6w3uOChf6&sz=w1200",
      alt: "לב דקורטיבי מעץ עם קישוטים רומנטיים"
    },
    {
      src: "https://drive.google.com/thumbnail?id=1pC_9Cjq4E4ggb-YMyWSIjlGRFC9ZszpX&sz=w1200",
      alt: "אלמנטים דקורטיביים לעיצוב הצעת נישואין מושלמת"
    },
    {
      src: "https://drive.google.com/thumbnail?id=1frX9fn8jnEX5TxkCpPHYO_zAaENnzpXZ&sz=w400",
      alt: "גמ״ח הצעות נישואים בהקמה"
    },
    {
      src: proposalDeckSetup,
      alt: "הצעת נישואין רומנטית במרפסת מול נוף כרמים פתוח"
    }
  ];
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Helmet>
        <title>גמ״ח הצעות נישואים לזכרו של רונאל בן משה | ציוד להצעת נישואין בחינם</title>
        <meta name="description" content="זקוקים לציוד להצעת נישואין? גמ״ח הצעות נישואים לזכרו של רונאל בן משה מציע ריהוט, תאורה ואווירה מדהימה להצעת נישואין מושלמת בחינם. איסוף מנס ציונה." />
        <meta name="keywords" content="גמ״ח הצעת נישואין, ציוד להצעת נישואין, הצעת נישואין בחינם, גמח הצעות נישואים, רונאל בן משה, השכרת ציוד להצעת נישואין" />
        <link rel="canonical" href="https://remember-ronel.com/wedding-proposals" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="גמ״ח הצעות נישואים לזכרו של רונאל בן משה" />
        <meta property="og:description" content="ציוד מלא, עיצוב ואווירה להצעת נישואין מושלמת. הכל בחינם לזכרו של רונאל בן משה. איסוף מנס ציונה." />
        <meta property="og:image" content={images[0].src} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "גמ״ח הצעות נישואים לזכרו של רונאל בן משה",
            "description": "השאלת ציוד ועיצוב להצעות נישואים בחינם לזכר רונאל בן משה.",
            "provider": {
              "@type": "Organization",
              "name": "עמותת רונאל בן משה"
            },
            "areaServed": "Israel",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://remember-ronel.com/wedding-proposals",
              "servicePhone": "0523283573"
            }
          })}
        </script>
      </Helmet>
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

        {/* Gallery Section with Premium Horizontal Scroll */}
        <section className="py-12 bg-white relative">
          <div className="container mx-auto px-4 relative max-w-6xl">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center md:text-right">
              גלריית תמונות מהציוד וההפקות שלנו
            </h2>
            
            <div className="relative group/gallery">
              {/* Desktop Slider Buttons (RTL adjusted) */}
              <button 
                onClick={() => scroll('left')}
                className="absolute top-1/2 -translate-y-1/2 -left-4 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 border border-gray-100 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition pointer-events-auto cursor-pointer opacity-0 group-hover/gallery:opacity-100 hidden md:flex"
                title="הבא"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={() => scroll('right')}
                className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 border border-gray-100 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition pointer-events-auto cursor-pointer opacity-0 group-hover/gallery:opacity-100 hidden md:flex"
                title="הקודם"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Horizontal Scrollable Row containing images with consistent vertical heights */}
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory flex-row max-w-full"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch' 
                }}
              >
                {images.map((img, idx) => (
                  <div 
                    key={idx}
                    className="snap-start shrink-0 w-[280px] sm:w-[450px] h-[400px] relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group/item hover:-translate-y-2"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-right h-1/2 opacity-90 sm:opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-bold text-lg leading-snug drop-shadow-md">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint for touch-swipe devices */}
            <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-400">
              <span className="animate-pulse">← החליקו או גוללו אופקית לצפייה בגלריה המלאה →</span>
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
