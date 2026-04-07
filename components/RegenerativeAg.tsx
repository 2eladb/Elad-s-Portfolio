import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import SectionTitle from './SectionTitle';
import FarmDashboard from './FarmDashboard';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value, count]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const RegenerativeAg: React.FC = () => {
  return (
    <section className="relative py-[100px] px-5 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">אדמה | חוות גוונים</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            על שטח של 14 דונם, הקמנו חווה אוקלוגית נסיונית
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20">
            <div className="text-4xl font-bold mb-2">
              <Counter value={72} suffix=" Tons" />
            </div>
            <div className="text-slate-300">פחמן שנאגר - מצטבר</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20">
            <div className="text-4xl font-bold mb-2">
              <Counter value={16} suffix=" Tons" />
            </div>
            <div className="text-slate-300">פחמן שנאגר בשנה האחרונה</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20">
            <div className="text-4xl font-bold mb-2">
              <Counter value={282} />
            </div>
            <div className="text-slate-300">עצים במגוון ביולוגי</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20">
            <div className="text-4xl font-bold mb-2">
              <Counter value={14000} suffix=" Sqm" />
            </div>
            <div className="text-slate-300">שטח בשיקום רגנרטיבי</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="farm.jpg" 
                alt="חוות גוונים" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-3xl font-bold">לחבר דאטה לאדמה</h3>
            <p className="text-slate-200 leading-relaxed font-medium">
              מה בחווה? יער מאכל | גינת ירק אקולוגית | שלולית חורף | ייצור קומפוסט | חממה ועוד
            </p>
            <p className="text-slate-300 leading-relaxed">
              אנחנו לא רק מגדלים מזון, אנחנו מגדלים אדמה. החווה משמשת כמרכז מחקר יישומי בו טכנולוגיה פוגשת את הטבע. באמצעות חיישנים וניטור מתמיד, אנחנו לומדים איך לשקם את המערכת האקולוגית ולהגדיל את ספיחת הפחמן.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.gvanim.farm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                לבקר באתר החווה
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
             <FarmDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegenerativeAg;
