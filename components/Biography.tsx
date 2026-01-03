import React from 'react';
import { SectionId } from '../types';
import { BookOpen, ExternalLink, Shield, Star, Award } from 'lucide-react';

export const Biography: React.FC = () => {
  return (
    <section id={SectionId.BIO} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
                 <div className="absolute -inset-4 bg-memorial-gold/10 rounded-2xl transform -rotate-2"></div>
                 <div className="absolute -inset-4 bg-memorial-blue/5 rounded-2xl transform rotate-2"></div>
                 <img 
                   src="https://lh3.googleusercontent.com/pw/AP1GczMFVPH7B8g6S1tcTouhstP1HE5odxslpaYlreXbt-mTr3hUfTYI5isEdWn_zdJNdhkfVh_4u5gjubD03oUAI6JLRAWuGt3eCCCnCAcSvrGV3Jf6WHcUu4TNcDsqXhx67StWUjb5xYrIsnsPHqSsoxFk5Q=w1134-h1512-s-no-gm?authuser=0" 
                   alt="Ronel Ben Moshe" 
                   className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                 />
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-r-4 border-memorial-gold max-w-xs z-10 hidden md:block">
                    <div className="flex items-center gap-3 text-memorial-dark mb-2">
                      <div className="bg-memorial-gold/20 p-2 rounded-full">
                        <Award className="text-memorial-gold w-6 h-6" />
                      </div>
                      <span className="font-bold text-lg">גיבור ישראל</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      נפל בקרב גבורה ב-24.6.2025 בעת שהגן על המולדת.
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
                    רונאל נפל בקרב גבורה ביום כ"ח בסיוון תשפ"ה (24.06.2025).
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
    </section>
  );
};