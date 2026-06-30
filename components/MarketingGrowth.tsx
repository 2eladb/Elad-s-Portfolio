import React from 'react';
import { TrendingUp, Target, BookOpen, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle.tsx';

const MarketingGrowth: React.FC = () => {
  return (
    <section id="marketing-growth" className="py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-200">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="מערך שיווק בינלאומי וצמיחה" 
          subtitle="Marketing & Growth"
        />

        {/* Professional Quote */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <div className="inline-block relative">
            <span className="absolute -top-12 -right-8 text-8xl text-slate-200 pointer-events-none select-none font-serif">”</span>
            <p className="text-xl md:text-2xl font-medium text-slate-700 italic relative z-10 leading-relaxed">
              "מבניית אסטרטגיית ה-Growth של Plus500 משלב ההקמה ועד ליוניקורן גלובלי — פיצוח מנועי צמיחה לחברות."
            </p>
            <span className="absolute -bottom-16 -left-8 text-8xl text-slate-200 pointer-events-none select-none font-serif">“</span>
          </div>
        </div>

        {/* Subsections Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mb-16 items-stretch">
          {/* Subsection 1 */}
          <div className="relative group flex flex-col h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl pt-10 pb-8 px-8 shadow-xl border border-slate-100 flex flex-col h-full justify-between transition-all duration-300 overflow-hidden">
              {/* Premium Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-600"></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-100">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider bg-blue-50 px-2.5 py-1 rounded-full uppercase">The Past</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 leading-snug">
                  הובלת השיווק ב-Play65 והקמת המערך ב-Plus500
                </h4>
                
                {/* Visual Proof Images */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm aspect-[4/3] bg-slate-50">
                    <img 
                      src="/plus500_1.jpg" 
                      alt="Plus500 Growth Journey" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm aspect-[4/3] bg-slate-50">
                    <img 
                      src="/plus500_2.jpg" 
                      alt="Plus500 Sponsorship" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  הובלה מעשית של מערכי שיווק גלובליים משלב ההקמה. כשותף-מייסד (Co-Founder) וסמנכ"ל השיווק (CMO) של Plus500,, בניית המותג עם השותפים שלי, משלב הרעיון ועד להנפקה ושווי יוניקורן. הובלתי מהלכי שיווק בינלאומיים, כולל ניהול הסכם החסות הרשמי (Sponsorship) מול מועדון הכדורגל האירופי אטלטיקו מדריד. ניסיון מעשי בבניית מערכות מבוססות דאטה, ניהול תקציבי עתק וחדירה לשווקים תחרותיים ברחבי העולם.
                </p>
              </div>
            </div>
          </div>

          {/* Subsection 2 */}
          <div className="relative group flex flex-col h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl pt-10 pb-8 px-8 shadow-xl border border-slate-100 flex flex-col h-full justify-between transition-all duration-300 overflow-hidden">
              {/* Premium Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600"></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full uppercase">The Present</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 leading-snug">
                  הכוונה וייעוץ לחברות
                </h4>
                
                {/* Premium GTM & Growth Advisory Dashboard Visual */}
                <div className="my-4">
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm aspect-[16/9] bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/30 p-4 flex flex-col justify-between relative group/card">
                    {/* Background Grid Accent */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30"></div>
                    
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-bold text-indigo-600 tracking-wider bg-indigo-50 px-2 py-0.5 rounded uppercase">
                        GTM & Scale Engine
                      </span>
                      <div className="flex gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      </div>
                    </div>

                    {/* Chart & Mini Metrics */}
                    <div className="grid grid-cols-3 gap-2 my-2 relative z-10 flex-grow items-end">
                      {/* Interactive Graph Curve */}
                      <div className="col-span-2 h-20 relative flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                          {/* Gradient Area under the line */}
                          <defs>
                            <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M 0 35 Q 25 30 50 15 T 100 2" 
                            fill="none" 
                            stroke="url(#chart-grad)" 
                            strokeWidth="12" 
                          />
                          <path 
                            d="M 0 35 Q 25 30 50 15 T 100 2" 
                            fill="none" 
                            stroke="url(#chart-grad)" 
                            strokeWidth="6" 
                          />
                          <path 
                            d="M 0 35 Q 25 30 50 15 T 100 2" 
                            fill="none" 
                            stroke="url(#chart-grad)" 
                            strokeWidth="1" 
                            className="opacity-20"
                          />
                          <path 
                            d="M 0 35 Q 25 30 50 15 T 100 2" 
                            fill="none" 
                            stroke="url(#chart-grad)" 
                            strokeWidth="2" 
                            className="opacity-50"
                          />
                          {/* Animated line on hover */}
                          <path 
                            d="M 0 35 Q 25 30 50 15 T 100 2" 
                            fill="none" 
                            stroke="url(#chart-grad)" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                            className="stroke-indigo-600 transition-all duration-1000 group-hover/card:stroke-purple-600"
                          />
                          {/* Pulsing Dots */}
                          <circle cx="50" cy="15" r="2.5" className="fill-indigo-500 animate-pulse" />
                          <circle cx="100" cy="2" r="3" className="fill-purple-600 animate-ping" />
                          <circle cx="100" cy="2" r="2" className="fill-purple-500" />
                        </svg>
                      </div>

                      {/* Mini Key Metrics */}
                      <div className="flex flex-col gap-1.5 justify-end">
                        <div className="bg-white/80 backdrop-blur-xs border border-indigo-50 p-1.5 rounded-lg shadow-2xs text-right">
                          <p className="text-[8px] text-slate-400 font-medium">Product-Market Fit</p>
                          <p className="text-xs font-bold text-indigo-600">GTM Strategy</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xs border border-purple-50 p-1.5 rounded-lg shadow-2xs text-right">
                          <p className="text-[8px] text-slate-400 font-medium">Scale Multiplier</p>
                          <p className="text-xs font-bold text-purple-600">Unicorn Growth</p>
                        </div>
                      </div>
                    </div>

                    {/* Step Indicators Footer */}
                    <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 border-t border-slate-100 pt-1.5 relative z-10">
                      <span className="text-indigo-600">1. Ideation</span>
                      <span className="text-indigo-500">→</span>
                      <span className="text-indigo-600">2. GTM Launch</span>
                      <span className="text-indigo-500">→</span>
                      <span className="text-purple-600 font-extrabold animate-pulse">3. Global Scale</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  כיום, לצד ניהול השקעות ויוזמות סביבתיות, אני מציע הכוונה, ייעוץ וליווי אסטרטגי לחברות ומיזמים בתחומי העניין שלי (קלינטק, אימפקט וטכנולוגיה סביבתית). המטרה היא לעזור ליזמים לפצח את אסטרטגיית ה-Go-To-Market שלהם, לבנות מותג חזק ולייצר מנועי שיווק יעילים ומדידים.
                </p>
              </div>
            </div>
          </div>

          {/* Subsection 3 */}
          <div className="relative group flex flex-col h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl pt-10 pb-8 px-8 shadow-xl border border-slate-100 flex flex-col h-full justify-between transition-all duration-300 overflow-hidden">
              {/* Premium Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600"></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-100">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-purple-600 tracking-wider bg-purple-50 px-2.5 py-1 rounded-full uppercase">The Series</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 leading-snug">
                  סדרת הפוסטים: שיווק מאפס ליוניקורן
                </h4>
                
                {/* Visual Proof Image */}
                <div className="my-4">
                  <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm aspect-[16/9] bg-slate-50 p-1">
                    <img 
                      src="/elad_posts.png" 
                      alt="שיווק מאפס ליוניקורן בלינקדאין" 
                      className="w-full h-full object-contain hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  כדי להנגיש את הידע הזה ולתת ערך מעשי לקהילה, השקתי בלינקדאין את סדרת הפוסטים המקצועית 'שיווק מאפס ליוניקורן'. בסדרה אני מפרק את עולמות ה-Marketing וה-Growth לשלבים פרקטיים, ניתוחי עומק וכלים מעשיים המבוססים על קבלות וניסיון אמיתי מהתעשייה.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://www.linkedin.com/in/elad-ben-izhak-3a190a1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0a66c2] hover:bg-[#004182] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H11.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>לקריאת הסדרה בלינקדאין</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingGrowth;
