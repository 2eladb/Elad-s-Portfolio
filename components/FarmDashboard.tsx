import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  soil: number;
  trees: number;
}

const FarmDashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const generateData = () => {
      const initialData: DataPoint[] = [
        { name: '2024', soil: 13.5, trees: 2.5 },
        { name: '2027', soil: 13.5, trees: 4.5 },
        { name: '2030', soil: 13.5, trees: 6.5 },
        { name: '2035', soil: 13.5, trees: 9.5 },
      ];
      setData(initialData);
    };

    generateData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">תחזית ספיחת פחמן</h3>
          <p className="text-sm text-slate-500">צפי צמיחה (Tons CO2/Year)</p>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-green-600">פעיל</span>
        </div>
      </div>

      <div className="h-64 w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSoil" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4d7c0f" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4d7c0f" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTrees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="soil" 
              stackId="1"
              stroke="#4d7c0f" 
              fillOpacity={1} 
              fill="url(#colorSoil)" 
              name='ספיחה בקרקע (טון)'
            />
            <Area 
              type="monotone" 
              dataKey="trees" 
              stackId="1"
              stroke="#10b981" 
              fillOpacity={1} 
              fill="url(#colorTrees)" 
              name='ספיחה בעצים וביומסה (טון)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <span className="block text-2xl font-bold text-green-700">14 דונם</span>
          <span className="text-sm text-green-600">שטח משוקם</span>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <span className="block text-2xl font-bold text-blue-700">1,330 ק"ג</span>
          <span className="text-sm text-blue-600">ממוצע חודשי</span>
        </div>
      </div>
    </div>
  );
};

export default FarmDashboard;
