import React, { useState } from 'react';
import SectionTitle from './SectionTitle.tsx';
import { motion, AnimatePresence } from 'motion/react';

interface InvestmentData {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  year?: string;
  slogan?: string;
  description: string;
  whyInvested?: string;
  status?: string;
  url: string;
  urlLabel: string;
  gradient: string;
}

const investments: InvestmentData[] = [
  {
    id: 'volta',
    name: 'Volta Solar',
    tag: 'Renewables',
    tagColor: 'bg-green-50 text-green-700',
    year: '2018',
    slogan: 'מהפכת האנרגיה המבוזרת על הגגות.',
    description: 'חברת אנרגיה סולארית מובילה המקימה, מתחזקת ומתפעלת מערכות סולאריות מסחריות וביתיות. החברה מנגישה את האנרגיה הירוקה במגוון מודלי מימון גמישים – רכישה, ליסינג ושותפות.',
    whyInvested: 'כי בכל יום שעובר ומותקן עוד גג, מצב הכדור שלנו משתפר.',
    status: 'החברה פעילה וצומחת עם מאות התקנות בשנה. נמצאת בתהליכי צמיחה משמעותיים לקראת הנפקה (IPO) קרובה, כחלק מביסוס מעמדה כשחקנית מרכזית בשוק האנרגיה המתחדשת.',
    url: 'https://Volta.Solar',
    urlLabel: 'לאתר החברה',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'coreteel',
    name: 'Coreteel',
    tag: 'Infrastructure',
    tagColor: 'bg-slate-100 text-slate-700',
    year: '2018',
    slogan: 'הגנה על תשתיות ומתכת ללא פליטות ורעלים.',
    description: 'פיתוח טכנולוגיה פורצת דרך (Corrizon) להגנה על מתכות ותשתיות מפני קורוזיה. בשונה מהפתרונות המסורתיים המבוססים על חומרים רעילים ומזהמים, המוצרים של Coreteel הם על בסיס מים, ידידותיים לסביבה ולאדם, ומאריכים דרמטית את חיי התשתית.',
    whyInvested: 'כי קורוזיה היא "הרוצח השקט" של תשתיות. האמנתי שאפשר להגן על העולם הבנוי שלנו בלי להרעיל את האדמה והמים סביבו. זה פתרון תעשייתי חיוני עם אפס פשרות סביבתיות.',
    status: 'החברה פעילה גלובלית, מספקת פתרונות לתעשיות הנפט והגז, התחבורה והתשתיות, ומסייעת לארגונים לעמוד ביעדי ה-ESG שלהם.',
    url: 'https://coreteel.com/',
    urlLabel: 'לאתר החברה',
    gradient: 'from-slate-400 to-slate-600'
  },
  {
    id: 'nextenna',
    name: 'Nextenna',
    tag: 'Connectivity',
    tagColor: 'bg-green-50 text-green-700',
    year: '2021',
    slogan: 'תקשורת לוויינית חכמה בצריכת אנרגיה אפסית.',
    description: 'פיתוח אנטנות Phased Array דקות ומתקדמות המאפשרות חיבור לאינטרנט מכל נקודה על הגלובוס. הטכנולוגיה הייחודית של החברה (AI-based VDP) מאפשרת תקשורת מהירה ויציבה תוך הפחתה דרמטית של עלויות הייצור וצריכת האנרגיה של הטרמינלים.',
    whyInvested: 'כי אי אפשר לנהל את משבר האקלים בלי נתונים. Nextenna בונה את התשתית שמאפשרת לנטר ולחבר כל פינה בעולם – מהאוקיינוסים ועד החוות המרוחקות – בצורה היעילה והנקייה ביותר.',
    status: 'החברה צומחת במהירות, עם פתרונות המיועדים לשוק ה-LEO (לוויינים נמוכי מסלול) ולחיבור הדור הבא של עולם ה-IoT והניידות.',
    url: 'https://www.nextenna.com/',
    urlLabel: 'לאתר החברה',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'carbonblue',
    name: 'CarbonBlue',
    tag: 'Deep Tech',
    tagColor: 'bg-green-50 text-green-700',
    year: '2026',
    slogan: 'ספיחת פחמן מהאוקיינוס וייצור סיד ירוק ללא פליטות.',
    description: 'טכנולוגיה פורצת דרך (תהליך ה-EcoLime) המשתמשת במי ים כדי לספוח CO2 מהאטמוספירה בצורה יעילה וסקיילבילית. המערכת מייצרת סיד ירוק כתוצר לוואי בתהליך סגור, ובכך נותנת מענה כפול: ניקוי פחמן קיים ומניעת פליטות עתידיות בתעשייה.',
    whyInvested: 'כי ייצור סיד ומלט אחראי לכ-8% מהפליטות בעולם. CarbonBlue מפצחת את המלכוד הזה – היא הופכת את האוקיינוס למשאב ספיחה ומייצרת חומר גלם נקי לתעשייה בו זמנית.',
    status: 'החברה נמצאת בשלבי פיתוח והרחבה מתקדמים, עם פוטנציאל להפוך לאחד הכלים המרכזיים בעולם לספיחת פחמן מאסיבית. לחברה מוצר עובד עם התיכנות מוכחת',
    url: 'https://carbonblue.earth',
    urlLabel: 'לאתר החברה',
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    id: 'gravity',
    name: 'Gravity',
    tag: 'Climate Fund',
    tagColor: 'bg-slate-100 text-slate-700',
    year: '2026',
    slogan: 'הבית לבניית חברות ה-Climate-Tech של המחר.',
    description: 'קרן הון סיכון ומודל Venture Studio ייחודי המתמקד בפתרונות טכנולוגיים למשבר האקלים. Gravity לא רק משקיעה, היא בונה ומלווה חברות (כמו CarbonBlue) משלב הרעיון ועד לסקייל עולמי.',
    whyInvested: 'כדי לתת גם למומחים אחרים לעזור לי לבחור את הטכנולוגיות המשמעותיות ביותר. אני מאמין בכוח של קבוצה ובניסיון שנצבר ב-Venture Studio כדי למקסם את האימפקט של הכסף שלי.',
    status: 'הקרן פעילה בבנייה והשקעה בפורטפוליו של חברות פורצות דרך בתחומי האנרגיה והפחמן.',
    url: 'https://www.gravityclimatech.com',
    urlLabel: 'לאתר הקרן',
    gradient: 'from-slate-500 to-slate-700'
  }
];

const InvestmentCard: React.FC<{ 
  item: InvestmentData; 
  isExpanded: boolean; 
  onToggle: () => void; 
}> = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col transition-all duration-300">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={onToggle}
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
                  <div className="text-xs font-bold text-slate-400 mb-2">שנת השקעה: {item.year}</div>
                )}
                {item.slogan && (
                  <div className="text-sm font-bold text-slate-800 mb-3 italic">"{item.slogan}"</div>
                )}
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.whyInvested && (
                  <div className="mb-4">
                    <h5 className="text-xs font-bold text-slate-800 mb-1">למה השקעתי?</h5>
                    <p className="text-sm text-slate-600 italic">{item.whyInvested}</p>
                  </div>
                )}
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="השקעות אימפקט" 
          subtitle=" השקעות כלכליות שמשנות מציאות. מחפש פתרונות אמיתיים וסקיילביליים למשבר האקלים"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16 items-start">
          {investments.map((item) => (
            <InvestmentCard 
              key={item.id} 
              item={item} 
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-6">פילוסופיית ההשקעה שלי</h4>
            <p className="text-slate-600 leading-relaxed">
              אני מחפש בהשקעות חברות שיכולות להזיז את המחוג של המצב האקולוגי אפילו בקצת, אבל להזיז!
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
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
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
