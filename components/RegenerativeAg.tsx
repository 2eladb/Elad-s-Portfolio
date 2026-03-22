import React from 'react';
import SectionTitle from './SectionTitle';
import FarmDashboard from './FarmDashboard';

const RegenerativeAg: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="חקלאות רגנרטיבית" 
          subtitle="חוות גוונים – מעבדת שטח חיה של 14 דונם."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1000&auto=format&fit=crop" 
              alt="Regenerative Agriculture - Gvanim Farm" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-2xl font-bold text-slate-800">לחבר דאטה לאדמה</h3>
            <p className="text-slate-600 leading-relaxed">
              אנחנו לא רק מגדלים מזון, אנחנו מגדלים אדמה. החווה משמשת כמרכז מחקר יישומי בו טכנולוגיה פוגשת את הטבע. באמצעות חיישנים וניטור מתמיד, אנחנו לומדים איך לשקם את המערכת האקולוגית ולהגדיל את ספיחת הפחמן.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                שיקום קרקע ביולוגי
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                מגוון ביולוגי (Biodiversity)
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                מדידה מדויקת בזמן אמת
              </li>
            </ul>
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
