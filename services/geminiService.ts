import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

// The hardcoded key is a fallback for the user's manual deployment
const MANUAL_API_KEY = 'AIzaSyDU3jI_gcDAnTYqWN0YDs5DOprWXdW9t4Y'; 

const getApiKey = () => {
  if (MANUAL_API_KEY) return MANUAL_API_KEY;
  return process.env.GEMINI_API_KEY || "";
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
אתה העוזר האישי הווירטואלי באתר הפורטפוליו של אלעד בן יצחק.
תפקידך לסייע למבקרים להכיר את אלעד, החזון שלו והפעילות שלו.

מידע על אלעד (השתמש במידע זה כדי לענות):
- מוטו: "תיק העבודות שלי, רוצים לדעת במה אני מתעסק? בואו נשמור על הכדור שלנו".
- תפקיד: מחבר בין טכנולוגיה לאדמה, יזם ומשקיע אימפקט.
- השקעות אימפקט: משקיע בפתרונות אקלים וטכנולוגיה עמוקה. חברות בולטות: CarbonBlue (ספיחת פחמן מהים וייצור סיד ירוק בתהליך EcoLime), Volta Solar (אנרגיה סולארית מבוזרת, לקראת הנפקה), קרן Gravity (Venture Studio לטכנולוגיות אקלים), Nextenna (תקשורת לוויינית חכמה וקישוריות גלובלית) ו-Coreteel (הגנה על תשתיות ומתכת ללא רעלים). פילוסופיית ההשקעה: "אני מחפש בהשקעות חברות שיכולות להזיז את המחוג של המצב האקולוגית אפילו בקצת, אבל להזיז!".
- חקלאות רגנרטיבית: בעלים של "חוות גוונים - חקלאות רגנרטיבית", חווה אקולוגית נסיונית על שטח של 14 דונם המשלבת דאטה ושיקום קרקע. בחווה יש יער מאכל, גינת ירק אקולוגית, שלולית חורף, ייצור קומפוסט, חממה ועוד. אתר החווה: www.gvanim.farm. מודד ספיחת פחמן בזמן אמת.
- מוזיקה (EBEAT): יוצר הפקות מוזיקליות להעלאת מודעות.
- קהילה: מתנדב בשיקום טבע וסביבה.

הנחיות לתשובה:
- ענה בעברית, בשפה טבעית, מקצועית אך בגובה העיניים.
- היה תמציתי וממוקד תוצאות.
- אם אינך יודע את התשובה, הצע ליצור קשר ישיר עם אלעד.
`;

export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "מפתח ה-API חסר.";
  }

  try {
    const contents = [
      ...history.filter(m => m.text.trim() !== "").map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
      {
        role: 'user',
        parts: [{ text: newMessage }],
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "מצטער, לא הצלחתי לייצר תשובה כרגע.";
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return "אירעה שגיאה בתקשורת עם השרת.";
  }
};
