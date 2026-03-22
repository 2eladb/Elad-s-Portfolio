import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">בואו נדבר תכל'ס</h3>
        <p className="mb-8">מחפש שותפים לדרך, יזמים עם ברק בעיניים ומשקיעים שרוצים לעשות טוב.</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/elad-ben-izhak-3a190a1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/b_elad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://www.instagram.com/b_elad/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
        
        <p className="text-sm">
          © {new Date().getFullYear()} אלעד בן יצחק. כל הזכויות שמורות. נבנה עם המון אהבה לכדור.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
