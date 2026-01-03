import React from 'react';
import { SectionId } from '../types';
import { Instagram, Heart, MessageCircle, Play } from 'lucide-react';

export const Gallery: React.FC = () => {
  const ronelPics = [
    "https://lh3.googleusercontent.com/pw/AP1GczN7Y9pzA9_SFUUYeSDG7wcyQ923HsKC-9e3qCo9P7-G17iP1Kxh7-udFavakooz6424RRDsAnXrhjgoGqqsPaQk5PsZNT2JsmQguAG3lMQ8G5XnSMGXbDvBWsbqB1Ooqk5K4uHSOeTv5XtIbPniuQC2cA=w1440-h1440-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMeivy8wIjcGceZlBAhgujdwiLaRbL_xXUee4fnnyvWJZLMV2Y7BleW7xcwXYDdrK0DVkR26lQn3PAVm3SBvtwqFHgJIHhNLHsJWV-cWaT3VcCs0Aoyf_TBqhi19o1qigrPEd1gwYJeq5vtGlYm4LXu=w1462-h1462-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMFVPH7B8g6S1tcTouhstP1HE5odxslpaYlreXbt-mTr3hUfTYI5isEdWn_zdJNdhkfVh_4u5gjubD03oUAI6JLRAWuGt3eCCCnCAcSvrGV3Jf6WHcUu4TNcDsqXhx67StWUjb5xYrIsnsPHqSsoxFk5Q=w1108-h1478-s-no-gm?authuser=0",
    "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.82787-15/517990561_17844766023530763_2568575564013564879_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&cb=8438d1d6-0aee74db&ig_cache_key=MzY3NDM3NDg3ODg3ODI3NDA3Mg%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=rpVxV1q9f3gQ7kNvwFv73wz&_nc_oc=AdnS1FnP8RMwPGcH11qMVk4KV-EGVh1pOr-C3EHL6ofwcnPSi105jJ0xR2YDkIM27Ts&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsdv1-2.fna&_nc_gid=QmjOT4ABBu6s0sYvF3IXCQ&oh=00_AfnEmMjZDiQW53DsVIZuNLFaWAkSHhF-bjlPmvgPozpwcg&oe=69350A03",
    "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.82787-15/524465569_17849023854530763_501201549501157707_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&cb=8438d1d6-0aee74db&ig_cache_key=MzY4ODkyMDIwNDgxMzMwNzIwNg%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=t1hzehx1x7EQ7kNvwH5sQQh&_nc_oc=Adl6DJ128VjxKUHXLd0DdzU2WHUlJpkR1o9duiloMPfYbuysvwD9UxxcRy8K20zSiEk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsdv1-2.fna&_nc_gid=5cUy8Tplq7HmQ7_LOd2UOw&oh=00_AfkZXxHKUsHmIAeRvFQ8xYspvcBeeyq5JBBy3TvSff6g_w&oe=69352777",
    "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.82787-15/522411576_18067363649513349_8144640252583364472_n.webp?_nc_cat=101&cb=8438d1d6-0aee74db&ig_cache_key=MzY4MzQ1ODE1OTcyMDIzOTIyMg%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=rPtJ6O7REMMQ7kNvwHkUcfK&_nc_oc=AdnSOLqG3Bz1PoDJmQmlA0zLJeIQHdmDiEsiC0qtVmysPVGZUOHjPUX4ghAmjvmLaek&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsdv1-2.fna&_nc_gid=DUIOLr-CybtaAZPAloBnfQ&oh=00_Afn15q5X8QI31yh5WnpDB5-oyBg-zNpKbbj_S1J82q-B2g&oe=69353288",
    "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.75761-15/510402059_17842711902530763_304987861620274281_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&cb=8438d1d6-0aee74db&ig_cache_key=MzY2NjEzOTc0ODk4NDQ4Njk2NQ%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=W_S-MECcHK4Q7kNvwE4x1ic&_nc_oc=Adnr8DJ6Ksm2qc0rwqGIU5P21_gdJgki0_k2sSn-c9kZfbmITbTs4-2MkokuXK_E3UQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsdv1-2.fna&_nc_gid=QmjOT4ABBu6s0sYvF3IXCQ&oh=00_AfkhH-TPcEcgcAeRTCmBkBvwQGplN6kdTZ3FPBu8rQInUg&oe=69352CF0"
  ];

  const ronelPortrait = "https://lh3.googleusercontent.com/pw/AP1GczN7Y9pzA9_SFUUYeSDG7wcyQ923HsKC-9e3qCo9P7-G17iP1Kxh7-udFavakooz6424RRDsAnXrhjgoGqqsPaQk5PsZNT2JsmQguAG3lMQ8G5XnSMGXbDvBWsbqB1Ooqk5K4uHSOeTv5XtIbPniuQC2cA=w1440-h1440-s-no-gm?authuser=0";
  
  // Simulating authentic recent posts using available authentic images
  // Varied stats, media types (Reels), and crop positions to create a realistic feed look
  const posts = [
    { id: 1, likes: '734', comments: '11', src: ronelPics[0], isReel: false, position: 'object-center' },
    { id: 2, likes: '2,891', comments: '112', src: ronelPics[1], isReel: false, position: 'object-top' },
    { id: 3, likes: '757', comments: '14', src: ronelPics[2], isReel: false, position: 'object-top' },
    { id: 4, likes: '1,567', comments: '63', src: ronelPics[3], isReel: false, position: 'object-center' },
    { id: 5, likes: '3,102', comments: '95', src: ronelPics[4], isReel: false, position: 'object-center' },
    { id: 6, likes: '1,205', comments: '34', src: ronelPics[5], isReel: false, position: 'object-top' },
    { id: 7, likes: '1,890', comments: '76', src: ronelPics[6], isReel: false, position: 'object-bottom' },
    { id: 8, likes: '2,450', comments: '89', src: ronelPics[7], isReel: false, position: 'object-center' },
  ];

  return (
    <section id={SectionId.GALLERY} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
         {/* Instagram Profile Header */}
         <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 mb-12 border-b border-gray-200 pb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur-sm"></div>
              <div className="relative bg-white p-1 rounded-full">
                <img 
                  src={ronelPortrait}
                  alt="Ronel Ben Moshe Profile" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dir-ltr">remember_ronel</h2>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/remember_ronel/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-memorial-blue text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-800 transition shadow-md flex items-center gap-2 text-sm"
                  >
                    <Instagram size={18} />
                    אינסטגרם
                  </a>
                  <a 
                    href="https://www.tiktok.com/@remember_ronel?_r=1&_t=ZS-91v85se8uEH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-800 transition shadow-md flex items-center gap-2 text-sm"
                  >
                     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    טיקטוק
                  </a>
                </div>
              </div>
              
              <div className="text-gray-600 max-w-lg">
                <p className="font-bold text-gray-900">לזכרו של רונאל בן משה הי"ד 🕯️</p>
                <p>עמוד לזכרו של סמ”ר רונאל בן משה הי”ד</p>
                <p>לוחם גיבור בגדוד 605 הנדסה קרבית, פלוגת דולב.</p>
                <p>נפל באסון הפומה בחאן יונס, בתאריך כ"ח סיוון 24.6.25</p>
              </div>
            </div>
         </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
          {posts.map((post) => (
            <a 
              href="https://www.instagram.com/remember_ronel/"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id} 
              className="relative group overflow-hidden aspect-square bg-gray-100 block"
            >
              <img 
                src={post.src} 
                alt={`Instagram memory ${post.id}`} 
                className={`w-full h-full object-cover transition duration-500 group-hover:scale-110 ${post.position}`}
              />
              
              {/* Type Indicator (Reel) */}
              {post.isReel && (
                <div className="absolute top-2 right-2 text-white drop-shadow-md">
                    <Play size={20} className="fill-white" />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white gap-6">
                 <div className="flex items-center gap-2 font-bold">
                    <Heart className="fill-white" size={24} />
                    <span>{post.likes}</span>
                 </div>
                 <div className="flex items-center gap-2 font-bold">
                    <MessageCircle className="fill-white" size={24} />
                    <span>{post.comments}</span>
                 </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/remember_ronel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-memorial-dark hover:text-memorial-blue font-bold border-b-2 border-transparent hover:border-memorial-blue transition pb-1"
            >
              צפו בגלריה המלאה באינסטגרם
              <Instagram size={20} />
            </a>
        </div>
      </div>
    </section>
  );
};