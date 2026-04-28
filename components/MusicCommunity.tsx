import React from 'react';
import { Music, Users, ExternalLink, Heart, Waves, Compass, BookOpen } from 'lucide-react';

const MusicCommunity: React.FC = () => {
  return (
    <>
      {/* EBEAT Section - Light Background */}
      <section id="ebeat" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Music Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative w-24 h-24 bg-white shadow-sm rounded-2xl p-2 border border-slate-200 overflow-hidden flex items-center justify-center">
                    <img 
                      src="/ebeat_logo.png" 
                      alt="EBEAT Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/100?text=EBEAT';
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900">EBEAT</h3>
                  <p className="text-purple-600 font-medium">הפקות מוזיקה | אימפקט</p>
                </div>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                הצד היצירתי שבי. הפקות מוזיקליות שמטרתן היא לא רק לבדר, אלא לעורר מחשבה, מודעות ושינוי. המוזיקה היא שפה בינלאומית שמחברת בין אנשים לרעיונות גדולים.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800">האזינו ושמרו על קשר:</h4>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://open.spotify.com/artist/6Ym47UOAQNTHuYBuqbCNHi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-sm"
                  >
                    <Music className="h-4 w-4" />
                    <span>Spotify</span>
                  </a>
                  <a 
                    href="https://linktr.ee/EBeat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Linktree</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/ebeat.music?igsh=MW1qM3Q2czN5bDE3cQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1AV5zFEaPy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Player Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
              <div className="flex items-center gap-8 mb-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Music className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 tracking-tight">נחשף לאחרונה</h4>
                  <p className="text-sm text-slate-500">צפוף וחם - EBEAT</p>
                </div>
              </div>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/20ql5hsIis65zDpasGverw?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Dark Background */}
      <section id="community" className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Community Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-8">
                  <div className="p-3 bg-yellow-500 rounded-xl text-white shadow-lg shadow-yellow-500/20 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold">קהילה והתנדבות</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  אי אפשר לעשות שינוי לבד. מאמין שכל יוזמה - קטנה כגדולה - מתחילה בחיבור אנושי פשוט ובערבות הדדית. תומך ומלווה מיזמים חברתיים וסביבתיים השואפים ליצור אימפקט אמיתי בשטח.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center hover:border-yellow-500/30 transition-colors">
                  <span className="block text-4xl font-bold text-yellow-500 mb-1">עשרות</span>
                  <span className="text-sm text-slate-400 font-medium">רשתות רפאים שפונו</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center hover:border-yellow-500/30 transition-colors">
                  <span className="block text-4xl font-bold text-yellow-500 mb-1">מאות</span>
                  <span className="text-sm text-slate-400 font-medium">חניכים בתוכניות מנהיגות</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/30 border-r-4 border-yellow-500 rounded-l-xl italic text-slate-400">
                "לצד תמיכה במיזמים רחבים, אני מאמין גדול בכוחה של עזרה ישירה לאנשים בודדים בנקודות זמן קריטיות - לפעמים שם נוצר השינוי העמוק ביותר."
              </div>
            </div>

            {/* Partners List */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <span className="w-8 h-px bg-yellow-500 ml-3"></span>
                שותפויות ועזרה פרטנית
              </h4>
              <div className="space-y-4">
                <PartnerCard 
                  icon={<Waves className="h-5 w-5" />}
                  title="סיירת החוף"
                  description="תמיכה בבסיס הפעילות לשמירה על הסביבה הימית וחילוץ רשתות רפאים מהים."
                  link="https://www.thecoastpatrol.org/"
                  color="blue"
                />
                <PartnerCard 
                  icon={<Compass className="h-5 w-5" />}
                  title="מסע אל האופק"
                  description="סיוע בהתנעת התוכנית החינוכית והערכית בהובלת רם רוטברג."
                  link="https://www.masaelhaofek.org/"
                  color="green"
                />
                <PartnerCard 
                  icon={<Heart className="h-5 w-5" />}
                  title="המרכז להצלת צבי ים"
                  description="תרומה והובלת הפקת סרטוני הסבר להעלאת מודעות והדרכה."
                  color="red"
                />
                <PartnerCard 
                  icon={<BookOpen className="h-5 w-5" />}
                  title="מתחם חינוכי ייחודי"
                  description="תרומה להקמת מרחב לימודי חדשני המעודד סקרנות ולמידה חווייתית."
                  color="yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PartnerCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  color: 'blue' | 'green' | 'red' | 'yellow';
}> = ({ icon, title, description, link, color }) => {
  const colorMap = {
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/10',
    green: 'bg-green-500/20 text-green-400 border-green-500/10',
    red: 'bg-red-500/20 text-red-400 border-red-500/10',
    yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/10',
  };

  return (
    <div className="flex items-start gap-8 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all group">
      <div className={`p-3 rounded-xl flex-shrink-0 ${colorMap[color]}`}>
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-slate-100 flex items-center">
          {title}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="mr-2 text-slate-500 hover:text-white transition-colors">
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </h5>
        <p className="text-sm text-slate-400 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default MusicCommunity;
