import React, { useState } from 'react';
import SectionTitle from './SectionTitle.js';
import { motion, AnimatePresence } from 'motion/react';

const investments = [
  {
    id: 'volta',
    name: 'Volta Solar',
    tag: 'Renewables',
    tagColor: 'bg-yellow-100 text-yellow-800',
    year: '2018',
    slogan: 'מהפכת האנרגיה המבוזרת על הגגות.',
    description: 'חברת אנרגיה סולארית מובילה המקימה, מתחזקת ומתפעלת מערכות סולאריות מסחריות וביתיות. החברה מנגישה את האנרגיה הירוקה במגוון מודלי מימון גמישים – רכישה, ליסינג ושותפות.',
    whyInvested: 'כי בכל יום שעובר ומותקן עוד גג, מצב הכדור שלנו משתפר.',
    status: 'החברה פעילה וצומחת עם מאות התקנות בשנה. נמצאת בתהליכי צמיחה משמעותיים לקראת הנפקה (IPO) קרובה, כחלק מביסוס מעמדה כשחקנית מרכזית בשוק האנרגיה המתחדשת.',
    url: 'https://Volta.Solar',
    urlLabel: 'לאתר החברה',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'coreteel',
    name: 'Coreteel',
    tag: 'Infrastructure',
    tagColor: 'bg-rose-100 text-rose-800',
    year: '2018',
    slogan: 'הגנה על תשתיות ומתכת ללא פליטות ורעלים.',
    description: 'פיתוח טכנולוגיה פורצת דרך (Corrizon) להגנה על מתכות ותשתיות מפני קורוזיה. בשונה מהפתרונות המסורתיים המבוססים על חומרים רעילים ומזהמים, המוצרים של Coreteel הם על בסיס מים, ידידותיים לסביבה ולאדם, ומאריכים דרמטית את חיי התשתית.',
    whyInvested: 'כי קורוזיה היא "הרוצח השקט" של תשתיות. האמנתי שאפשר להגן על העולם הבנוי שלנו בלי להרעיל את האדמה והמים סביבו. זה פתרון תעשייתי חיוני עם אפס פשרות סביבתיות.',
    status: 'החברה פעילה גלובלית, מספקת פתרונות לתעשיות הנפט והגז, התחבורה והתשתיות, ומסייעת לארגונים לעמוד ביעדי ה-ESG שלהם.',
    url: 'https://coreteel.com/',
    urlLabel: 'לאתר החברה',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    id: 'nextenna',
    name: 'Nextenna',
    tag: 'Connectivity',
    tagColor: 'bg-purple-100 text-purple-800',
    year: '2021',
    slogan: 'תקשורת לוויינית חכמה בצריכת אנרגיה אפסית.',
    description: 'פיתוח אנטנות Phased Array דקות ומתקדמות המאפשרות חיבור לאינטרנט מכל נקודה על הגלובוס. הטכנולוגיה הייחודית של החברה (AI-based VDP) מאפשרת תקשורת מהירה ויציבה תוך הפחתה דרמטית של עלויות הייצור וצריכת האנרגיה של הטרמינלים.',
    whyInvested: 'כי אי אפשר לנהל את משבר האקלים בלי נתונים. Nextenna בונה את התשתית שמאפשרת לנטר ולחבר כל פינה בעולם – מהאוקיינוסים ועד החוות המרוחקות – בצורה היעילה והנקייה ביותר.',
    status: 'החברה צומחת במהירות, עם פתרונות המיועדים לשוק ה-LEO (לוויינים נמוכי מסלול) ולחיבור הדור הבא של עולם ה-IoT והניידות.',
    url: 'https://www.nextenna.com/',
    urlLabel: 'לאתר החברה',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'carbonblue',
    name: 'CarbonBlue',
    tag: 'Deep Tech',
    tagColor: 'bg-blue-100 text-blue-800',
    year: '2026',
    slogan: 'ספיחת פחמן מהאוקיינוס וייצור סיד ירוק ללא פליטות.',
    description: 'טכנולוגיה פורצת דרך (תהליך ה-EcoLime) המשתמשת במי ים כדי לספוח CO2 מהאטמוספירה בצורה יעילה וסקיילבילית. המערכת מייצרת סיד ירוק כתוצר לוואי בתהליך סגור, ובכך נותנת מענה כפול: ניקוי פחמן קיים ומניעת פליטות עתידיות בתעשייה.',
    whyInvested: 'כי ייצור סיד ומלט אחראי לכ-8% מהפליטות בעולם. CarbonBlue מפצחת את המלכוד הזה – היא הופכת את האוקיינוס למשאב ספיחה ומייצרת חומר גלם נקי לתעשייה בו זמנית.',
    status: 'החברה נמצאת בשלבי פיתוח והרחבה מתקדמים, עם פוטנציאל להפוך לאחד הכלים המרכזיים בעולם לספיחת פחמן מאסיבית. לחברה מוצר עובד עם התיכנות מוכחת',
    url: 'https://carbonblue.earth',
    urlLabel: 'לאתר החברה',
    gradient: 'from-blue-600 to-green-600'
  },
  {
    id: 'gravity',
    name: 'Gravity',
    tag: 'Climate Fund',
    tagColor: 'bg-emerald-100 text-emerald-800',
    year: '2026',
    slogan: 'הבית לבניית חברות ה-Climate-Tech של המחר.',
    description: 'קרן הון סיכון ומודל Venture Studio ייחודי המתמקד בפתרונות טכנולוגיים למשבר האקלים. Gravity לא רק משקיעה, היא בונה ומלווה חברות (כמו CarbonBlue) משלב הרעיון ועד לסקייל עולמי.',
    whyInvested: 'כדי לתת גם למומחים אחרים לעזור לי לבחור את הטכנולוגיות המשמעותיות ביותר. אני מאמין בכוח של קבוצה ובניסיון שנצבר ב-Venture Studio כדי למקסם את האימפקט של הכסף שלי.',
    status: 'הקרן פעילה בבנייה והשקעה בפורטפוליו של חברות פורצות דרך בתחומי האנרגיה והפחמן.',
    url: 'https://www.gravityclimatech.com',
    urlLabel: 'לאתר הקרן',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

const InvestmentCard = ({ item, isExpanded, onToggle }) => {
  return React.createElement('div', { className: "relative group" },
    React.createElement('div', { className: `absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200` }),
    React.createElement('div', { className: "relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col transition-all duration-300" },
      React.createElement('div', { 
        className: "flex items-center justify-between cursor-pointer",
        onClick: onToggle
      },
        React.createElement('div', { className: "flex flex-col" },
          React.createElement('h3', { className: "text-xl font-bold text-slate-800" }, item.name),
          React.createElement('span', { className: `inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold w-fit ${item.tagColor}` }, item.tag)
        ),
        React.createElement('button', { className: "text-slate-400 hover:text-slate-600 transition-colors" },
          React.createElement('svg', { 
            xmlns: "http://www.w3.org/2000/svg", 
            className: `h-5 w-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`, 
            fill: "none", 
            viewBox: "0 0 24 24", 
            stroke: "currentColor"
          },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
          )
        )
      ),
      React.createElement(AnimatePresence, null,
        isExpanded && React.createElement(motion.div, {
          initial: { height: 0, opacity: 0 },
          animate: { height: 'auto', opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.3 },
          className: "overflow-hidden"
        },
          React.createElement('div', { className: "pt-4 mt-4 border-t border-slate-50" },
            item.year && React.createElement('div', { className: "text-xs font-bold text-slate-400 mb-2" }, `שנת השקעה: ${item.year}`),
            item.slogan && React.createElement('div', { className: "text-sm font-bold text-slate-800 mb-3 italic" }, `"${item.slogan}"`),
            React.createElement('p', { className: "text-slate-600 mb-4 text-sm leading-relaxed" }, item.description),
            item.whyInvested && React.createElement('div', { className: "mb-4" },
              React.createElement('h5', { className: "text-xs font-bold text-slate-800 mb-1" }, "למה השקעתי?"),
              React.createElement('p', { className: "text-sm text-slate-600 italic" }, item.whyInvested)
            ),
            item.status && React.createElement('div', { className: "bg-green-50 rounded-lg p-3 mb-4" },
              React.createElement('p', { className: "text-xs text-green-800 font-medium" },
                React.createElement('span', { className: "font-bold" }, "מצב נוכחי: "),
                item.status
              )
            ),
            React.createElement('div', { className: "mt-auto" },
              React.createElement('a', { 
                href: item.url, 
                target: "_blank", 
                rel: "noopener noreferrer",
                className: "inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              },
                item.urlLabel,
                React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" })
                )
              )
            )
          )
        )
      )
    )
  );
};

const Investments = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return React.createElement('section', { id: "portfolio", className: "py-20 bg-white" },
    React.createElement('div', { className: "container mx-auto px-6" },
      React.createElement(SectionTitle, { 
        title: "השקעות אימפקט", 
        subtitle: " השקעות כלכליות שמשנות מציאות. מחפש פתרונות אמיתיים וסקיילביליים למשבר האקלים"
      }),
      React.createElement('div', { className: "grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16 items-start" },
        investments.map((item) => React.createElement(InvestmentCard, { 
          key: item.id, 
          item: item, 
          isExpanded: expandedId === item.id,
          onToggle: () => handleToggle(item.id)
        }))
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100" },
        React.createElement('div', null,
          React.createElement('h4', { className: "text-xl font-bold text-slate-800 mb-6" }, "פילוסופיית ההשקעה שלי"),
          React.createElement('p', { className: "text-slate-600 leading-relaxed" },
            "אני מחפש בהשקעות חברות שיכולות להזיז את המחוג של המצב האקולוגי אפילו בקצת, אבל להזיז!"
          )
        ),
        React.createElement('div', { className: "grid sm:grid-cols-2 gap-8" },
          React.createElement('div', { className: "flex gap-4" },
            React.createElement('div', { className: "w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0" },
              React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
              )
            ),
            React.createElement('div', null,
              React.createElement('h5', { className: "font-bold text-slate-800" }, "מדידות ודאטה"),
              React.createElement('p', { className: "text-sm text-slate-600" }, "כל השקעה חייבת להציג אימפקט מדיד. לא סיסמאות, מספרים.")
            )
          ),
          React.createElement('div', { className: "flex gap-4" },
            React.createElement('div', { className: "w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0" },
              React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" })
              )
            ),
            React.createElement('div', null,
              React.createElement('h5', { className: "font-bold text-slate-800" }, "טכנולוגיה עמוקה"),
              React.createElement('p', { className: "text-sm text-slate-600" }, "מתמקד בפתרונות הנדסיים ומדעיים לבעיות שורש.")
            )
          )
        )
      )
    )
  );
};

export default Investments;
