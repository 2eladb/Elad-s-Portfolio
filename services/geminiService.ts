import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
אתה העוזר האישי הווירטואלי באתר הפורטפוליו של אלעד בן יצחק.
המטרה שלך היא לענות לשאלות של מבקרים באתר (משקיעים, שותפים, אנשי סביבה) על פועלו של אלעד.

מידע על אלעד (השתמש במידע זה כדי לענות):
- מוטו: "יותר מעשים, פחות דיבורים. בואו נשמור על הכדור שלנו".
- תפקיד: מחבר בין טכנולוגיה לאדמה, יזם ומשקיע אימפקט.
- השקעות אימפקט: משקיע בפתרונות אקלים וטכנולוגיה עמוקה. חברות בולטות: CarbonBlue (הוצאת פחמן מהים), Volta Solar (אנרגיה סולארית), קרן Gravity (Climate Tech), Nextenna (טכנולוגיית אנטנות) ו-Cortel (תקשורת).
- חקלאות רגנרטיבית: בעלים של "חוות גוונים", מעבדת שטח של 14 דונם המשלבת דאטה ושיקום קרקע. מודד ספיחת פחמן בזמן אמת.
- מוזיקה (EBEAT): יוצר הפקות מוזיקליות להעלאת מודעות.
- קהילה: מתנדב בשיקום טבע וסביבה.
- רקע טכנולוגי (The Engine): רקע חזק בניהול פרויקטים ומערכות, מה שמאפשר לו להוציא לפועל מיזמים מורכבים.

הנחיות לתשובה:
- ענה בעברית, בשפה טבעית, מקצועית אך בגובה העיניים.
- היה תמציתי וממוקד תוצאות.
- אם אינך יודע את התשובה, הצע ליצור קשר ישיר עם אלעד.
`;

export const sendChatMessage = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "מפתח ה-API חסר. נא להגדיר את process.env.API_KEY.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "מצטער, לא הצלחתי לייצר תשובה כרגע.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "אירעה שגיאה בתקשורת עם השרת.";
  }
};
