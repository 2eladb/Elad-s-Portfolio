import React from 'react';
import { Music, Users, ExternalLink, Heart, Waves, Compass, BookOpen } from 'lucide-react';

const MusicCommunity: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Music Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/20 overflow-hidden flex items-center justify-center">
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
                <h3 className="text-3xl font-bold tracking-tight">EBEAT</h3>
                <p className="text-purple-400 font-medium">הפקות מוזיקה | אימפקט</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              הצד היצירתי שבי. הפקות מוזיקליות שמטרתן היא לא רק לבדר, אלא לעורר מחשבה, מודעות ושינוי. המוזיקה היא שפה בינלאומית שמחברת בין אנשים לרעיונות גדולים.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-100">האזינו ושמרו על קשר:</h4>
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

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className="w-12 h-12 bg-purple-900/50 text-purple-400 rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 tracking-tight">נחשף לאחרונה</h4>
                  <p className="text-sm text-slate-400">צפוף וחם - EBEAT</p>
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

          {/* Community Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-3 bg-yellow-500 rounded-lg text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold">קהילה והתנדבות</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                אי אפשר לעשות שינוי לבד. מאמין שכל יוזמה - קטנה כגדולה - מתחילה בחיבור אנושי פשוט ובערבות הדדית. תומך ומלווה מיזמים חברתיים וסביבתיים השואפים ליצור אימפקט אמיתי בשטח.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <span className="block text-3xl font-bold text-yellow-500">עשרות</span>
                <span className="text-sm text-slate-400 font-medium">רשתות רפאים שפונו</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <span className="block text-3xl font-bold text-yellow-500">מאות</span>
                <span className="text-sm text-slate-400 font-medium">חניכים בתוכניות מנהיגות</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-100 mb-4 opacity-80">שותפויות ועזרה פרטנית:</h4>
              <p className="text-sm text-slate-400 italic">"לצד תמיכה במיזמים רחבים, אני מאמין גדול בכוחה של עזרה ישירה לאנשים בודדים בנקודות זמן קריטיות - לפעמים שם נוצר השינוי העמוק ביותר."</p>
              <div className="space-y-3">
                <div className="flex items-start space-x-4 space-x-reverse p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 flex items-center">
                      סיירת החוף
                      <a href="https://www.thecoastpatrol.org/" target="_blank" rel="noopener noreferrer" className="mr-2 text-slate-500 hover:text-blue-400">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </h5>
                    <p className="text-sm text-slate-400">תמיכה בבסיס הפעילות לשמירה על הסביבה הימית וחילוץ רשתות רפאים מהים.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 flex items-center">
                      מסע אל האופק
                      <a href="https://www.masaelhaofek.org/" target="_blank" rel="noopener noreferrer" className="mr-2 text-slate-500 hover:text-green-400">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </h5>
                    <p className="text-sm text-slate-400">סיוע בהתנעת התוכנית החינוכית והערכית בהובלת רם רוטברג.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-red-500/20 text-red-400 rounded-lg">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100">המרכז להצלת צבי ים</h5>
                    <p className="text-sm text-slate-400">תרומה והובלת הפקת סרטוני הסבר להעלאת מודעות והדרכה.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100">מתחם חינוכי ייחודי</h5>
                    <p className="text-sm text-slate-400">תרומה להקמת מרחב לימודי חדשני המעודד סקרנות ולמידה חווייתית.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MusicCommunity;
