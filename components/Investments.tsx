import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { motion, AnimatePresence } from 'motion/react';

interface InvestmentData {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  year?: string;
  description: string;
  status?: string;
  url: string;
  urlLabel: string;
  gradient: string;
}

const investments: InvestmentData[] = [
  {
    id: 'carbonblue',
    name: 'CarbonBlue',
    tag: 'Deep Tech',
    tagColor: 'bg-blue-100 text-blue-800',
    description: 'טכנולוגיה פורצת דרך שמוציאה פחמן מהים ומייצרת סיד נקי לתעשייה. דוגמה מושלמת לסינרגיה בין צורך תעשייתי לשיקום אקולוגי.',
    url: 'https://carbonblue.earth',
    urlLabel: 'לאתר החברה',
    gradient: 'from-blue-600 to-green-600'
  },
  {
    id: 'volta',
    name: 'Volta Solar',
    tag: 'Renewables',
    tagColor: 'bg-yellow-100 text-yellow-800',
    year: '2018',
    description: 'וולטה סולאר היא חברת אנרגיה סולארית. היא מקימה, מתחזקת ומתפעלת מערכות סולאריות מסחריות וביתיות במגוון מודלי מימון - רכישה, ליסינג ושותפות.',
    status: 'החברה פעילה, מתקינה מאות גגות סולרים בשנה, ומתרחבת.',
    url: 'https://Volta.Solar',
    urlLabel: 'לאתר החברה',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'gravity',
    name: 'Gravity',
    tag: 'Climate Fund',
    tagColor: 'bg-emerald-100 text-emerald-800',
    year: '2026',
    description: 'השקעה ערכית בקרן הירוקה Gravity, המתמקדת בטכנולוגיות אקלים (Climate Tech) ופתרונות סביבתיים פורצי דרך.',
    url: 'https://www.gravityclimatech.com',
    urlLabel: 'לאתר הקרן',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'nextenna',
    name: 'Nextenna',
    tag: 'Connectivity',
    tagColor: 'bg-purple-100 text-purple-800',
    description: 'טכנולוגיית אנטנות מתקדמת המאפשרת קישוריות רחבת פס וזמינה בכל מקום, תוך אופטימיזציה של צריכת אנרגיה וביצועים.',
    url: 'https://www.nextenna.com/',
    urlLabel: 'לאתר החברה',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'cortel',
    name: 'Cortel',
    tag: 'Communication',
    tagColor: 'bg-rose-100 text-rose-800',
    description: 'חברת תקשורת מתקדמת המתמקדת בפתרונות קישוריות חכמים ויעילים.',
    url: '#',
    urlLabel: 'בקרוב',
    gradient: 'from-rose-500 to-pink-500'
  }
];

const InvestmentCard: React.FC<{ item: InvestmentData }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100 h-full flex flex-col transition-all duration-300">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
            <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold w-fit ${item.tagColor}`}>
              {item.tag}
            </span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-slate-50">
                {item.year && (
                  <div className="text-xs font-bold text-slate-400 mb-3">שנת השקעה: {item.year}</div>
                )}
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.status && (
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-green-800 font-medium">
                      <span className="font-bold">מצב נוכחי:</span> {item.status}
                    </p>
                  </div>
                )}
                <div className="mt-auto">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {item.urlLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Investments: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="השקעות אימפקט" 
          subtitle=" השקעות כלכליות שמשנה מציאות. מחפש פתרונות אמיתיים וסקיילביליים למשבר האקלים"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {investments.map((item) => (
            <InvestmentCard key={item.id} item={item} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-6">פילוסופיית ההשקעה שלי</h4>
            <p className="text-slate-600 leading-relaxed">
              אני מאמין שהון הוא כלי לשינוי. ההשקעות שלי מתמקדות במיזמים שמשלבים היתכנות כלכלית גבוהה עם אימפקט סביבתי עמוק ומדיד.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-slate-800">מדידות ודאטה</h5>
                <p className="text-sm text-slate-600">כל השקעה חייבת להציג אימפקט מדיד. לא סיסמאות, מספרים.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-slate-800">טכנולוגיה עמוקה</h5>
                <p className="text-sm text-slate-600">מתמקד בפתרונות הנדסיים ומדעיים לבעיות שורש.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investments;
