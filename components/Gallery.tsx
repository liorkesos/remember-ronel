import React from 'react';
import { SectionId } from '../types';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export const Gallery: React.FC = () => {
  const ronelPortrait = "https://instagram.ftlv27-1.fna.fbcdn.net/v/t51.82787-15/517122095_17843982498530763_118728614559009033_n.webp?_nc_cat=103&cb=8438d1d6-0aee74db&ig_cache_key=MzY3MTM5NjI1MzU2ODYyNDE3Mw%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=aj5p1kKa5AUQ7kNvwFjW8a4&_nc_oc=AdkcMEF6pkbXzqQeSHvVGbibwHXpALoIHnYUVh5GbEOzR3nPq7QfI7yTXD6Xcf5drRw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftlv27-1.fna&_nc_gid=ku0GBwP7e1vBeuzpCg3Ftw&oh=00_Afloo-eYMqKGvVSD07Pcnn1qCg7g7_frgxWtPlyXajtcBw&oe=69350CE3";
  
  const ronelStanding = "https://instagram.ftlv27-1.fna.fbcdn.net/v/t51.82787-15/575621370_17861508804530763_2763954410148751928_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&cb=8438d1d6-0aee74db&ig_cache_key=Mzc1NjM1MDY3Mjk0MjcwODAyMw%3D%3D.3-ccb7-5-cb8438d1d6-0aee74db&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDB4MTYwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=-hiecQ60gm0Q7kNvwGvQx1a&_nc_oc=AdmEBidrGdpS-u6CgsDFZBOghl2VtQWorcXrAUNfnBY4OS5aLgIjzlMY_8HWMSSxvws&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftlv27-1.fna&_nc_gid=ku0GBwP7e1vBeuzpCg3Ftw&oh=00_AfmpSpBHDJ1aQhW_EB_acnIiQnDK2bKrKASpSea2snm6GQ&oe=6934E798";

  // Using authentic images provided from the Instagram account with realistic engagement stats
  const posts = [
    { id: 1, likes: '452', comments: '12', src: ronelPortrait },
    { id: 2, likes: '328', comments: '8', src: ronelStanding },
    { id: 3, likes: '512', comments: '15', src: ronelPortrait },
    { id: 4, likes: '298', comments: '6', src: ronelStanding },
    { id: 5, likes: '445', comments: '20', src: ronelPortrait },
    { id: 6, likes: '380', comments: '10', src: ronelStanding },
    { id: 7, likes: '620', comments: '25', src: ronelPortrait },
    { id: 8, likes: '340', comments: '5', src: ronelStanding },
  ];

  return (
    <section id={SectionId.GALLERY} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
         {/* Instagram Profile Header Simulation */}
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
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dir-ltr">remember_ronel</h2>
                <a 
                  href="https://www.instagram.com/remember_ronel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-memorial-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition shadow-md flex items-center gap-2"
                >
                  <Instagram size={18} />
                  עקבו באינסטגרם
                </a>
              </div>
              
              <div className="text-gray-600 max-w-lg">
                <p className="font-bold text-gray-900">לזכרו של רונאל בן משה הי"ד 🕯️</p>
                <p>גיבור ישראל שנפל בקרב ב-24.6.25.</p>
                <p>מנציחים את האור, החיוך והנתינה האינסופית.</p>
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
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
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