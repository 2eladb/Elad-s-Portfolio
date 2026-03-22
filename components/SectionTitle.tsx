import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
