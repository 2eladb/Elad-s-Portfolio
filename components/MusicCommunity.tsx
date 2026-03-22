import React from 'react';

const MusicCommunity: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Music Section */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="p-3 bg-purple-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">EBEAT</h3>
            </div>
            <p className="text-slate-300 mb-6 text-lg">
              הצד היצירתי שבי. הפקות מוזיקליות שמטרתן היא לא רק לבדר, אלא לעורר מחשבה, מודעות ושינוי. המוזיקה היא שפה בינלאומית שמחברת בין אנשים לרעיונות גדולים.
            </p>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Latest Release</h4>
                  <p className="text-sm text-slate-400">Earth Rhythm - 2024 Mix</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="p-3 bg-yellow-500 rounded-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">קהילה והתנדבות</h3>
            </div>
            <p className="text-slate-300 mb-6 text-lg">
              אי אפשר לעשות שינוי לבד. פעילות מתמדת לשיקום הטבע המקומי ויצירת חיבורים בקהילה. כי האקולוגיה מתחילה בבית, באנשים שסביבנו.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
                <span className="block text-2xl font-bold text-yellow-500">20+</span>
                <span className="text-sm text-slate-400">פרויקטים קהילתיים</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
                <span className="block text-2xl font-bold text-yellow-500">100%</span>
                <span className="text-sm text-slate-400">התנדבות</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MusicCommunity;
