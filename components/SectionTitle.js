import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return React.createElement('div', { className: "mb-12 text-center" },
    React.createElement('h2', { className: "text-3xl md:text-4xl font-bold text-slate-800 mb-3" }, title),
    subtitle && React.createElement('p', { className: "text-lg text-slate-600 max-w-2xl mx-auto" }, subtitle),
    React.createElement('div', { className: "w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" })
  );
};

export default SectionTitle;
