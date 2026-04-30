import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "../types.ts";

const MANUAL_API_KEY = 'AIzaSyDU3jI_gcDAnTYqWN0YDs5DOprWXdW9t4Y'; 

const apiKey = MANUAL_API_KEY || (process.env.API_KEY) || (process.env.GEMINI_API_KEY) || ((import.meta as any).env.VITE_API_KEY as string) || '';

if (!apiKey) {
  console.error("Gemini API Key is missing!");
}

const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTION = `
אתה העוזר האישי הווירטואלי באתר הפורטפוליו של אלעד בן יצחק.
המטרה שלך היא לענות לשאלות של מבקרים באתר (משקיעים, שותפים, אנשי סביבה) על פועלו של אלעד.

מידע על אלעד (השתמש במידע זה כדי לענות):
- מוטו: "תיק העבודות שלי, רוצים לדעת במה אני מתעסק? בואו נשמור על הכדור שלנו".
- תפקיד: מחבר בין טכנולוגיה לאדמה, יזם ומשקיע אימפקט.
- השקעות אימפקט: משקיע בפתרונות אקלים וטכנולוגיה עמוקה. חברות בולטות: CarbonBlue (ספיחת פחמן מהים וייצור סיד ירוק בתהליך EcoLime), Volta Solar (אנרגיה סולארית מבוזרת, לקראת הנפקה), קרן Gravity (Venture Studio לטכנולוגיות אקלים), Nextenna (תקשורת לוויינית חכמה וקישוריות גלובלית) ו-Coreteel (הגנה על תשתיות ומתכת ללא רעלים). פילוסופיית ההשקעה: "אני מחפש בהשקעות חברות שיכולות להזיז את המחוג של המצב האקולוגי אפילו בקצת, אבל להזיז!".
- חקלאות רגנרטיבית: בעלים של "חוות גוונים - חקלאות רגנרטיבית", חווה אקולוגית נסיונית על שטח של 14 דונם המשלבת דאטה ושיקום קרקע. בחווה יש יער מאכל, גינת ירק אקולוגית, שלולית חורף, ייצור קומפוסט, חממה ועוד. אתר החווה: www.gvanim.farm. מודד ספיחת פחמן בזמן אמת.
- מוזיקה (EBEAT): יוצר הפקות מוזיקליות להעלאת מודעות.
- קהילה: מתנדב בשיקום טבע וסביבה.
- רקע טכנולוגי (The Engine): רקע חזק בניהול פרויקטים ומערכות, מה שמאפשר לו להוציא לפועל מיזמים מורכבים.

הנחיות לתשובה:
- ענה בעברית, בשפה טבעית, מקצועית אך בגובה העיניים.
- היה תמציתי וממוקד תוצאות.
- אם אינך יודע את התשובה, הצע ליצור קשר ישיר עם אלעד.
`;

export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "מפתח ה-API חסר.";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const contents = [
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
      {
        role: 'user',
        parts: [{ text: newMessage }],
      }
    ];

    const result = await model.generateContent({ contents });
    const response = await result.response;
    return response.text() || "מצטער, לא הצלחתי לייצר תשובה כרגע.";
  } catch (error: any) {
    console.error("Detailed Gemini Error:", error);
    const errorMessage = error?.message || String(error);
    return `אירעה שגיאה בתקשורת עם השרת: ${errorMessage.substring(0, 100)}`;
  }
};

