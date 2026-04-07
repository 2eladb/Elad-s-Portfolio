import React from 'react';

const Footer = () => {
  return React.createElement('footer', { id: "contact", className: "bg-slate-900 text-slate-400 py-12 border-t border-slate-800" },
    React.createElement('div', { className: "container mx-auto px-6 text-center" },
      React.createElement('h3', { className: "text-2xl font-bold text-white mb-6" }, "בואו נדבר תכל'ס"),
      React.createElement('p', { className: "mb-8" }, "מחפש שותפים לדרך, יזמים עם ברק בעיניים ומשקיעים שרוצים לעשות טוב."),
      React.createElement('div', { className: "flex justify-center gap-6 mb-8" },
        React.createElement('a', { href: "https://www.linkedin.com/in/elad-ben-izhak-3a190a1/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors" }, "LinkedIn"),
        React.createElement('a', { href: "https://x.com/b_elad", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors" }, "Twitter"),
        React.createElement('a', { href: "https://www.instagram.com/b_elad/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors" }, "Instagram")
      ),
      React.createElement('p', { className: "text-sm" },
        `© ${new Date().getFullYear()} אלעד בן יצחק. כל הזכויות שמורות. נבנה עם המון אהבה לכדור.`
      )
    )
  );
};

export default Footer;
