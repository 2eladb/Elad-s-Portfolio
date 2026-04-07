import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FarmDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const initialData = [];
      for (let i = 0; i < 7; i++) {
        initialData.push({
          name: `יום ${i + 1}`,
          carbon: Math.floor(Math.random() * 50) + 100 + (i * 10),
          moisture: Math.floor(Math.random() * 30) + 40,
        });
      }
      setData(initialData);
    };

    generateData();
  }, []);

  return React.createElement('div', { className: "bg-white p-6 rounded-xl shadow-lg border border-slate-100" },
    React.createElement('div', { className: "flex justify-between items-center mb-6" },
      React.createElement('div', null,
        React.createElement('h3', { className: "text-xl font-bold text-slate-800" }, "דשבורד מעקב קרקע"),
        React.createElement('p', { className: "text-sm text-slate-500" }, "נתונים בזמן אמת - חוות גוונים")
      ),
      React.createElement('div', { className: "flex items-center space-x-2 space-x-reverse" },
        React.createElement('span', { className: "flex h-3 w-3 relative" },
          React.createElement('span', { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
          React.createElement('span', { className: "relative inline-flex rounded-full h-3 w-3 bg-green-500" })
        ),
        React.createElement('span', { className: "text-xs font-semibold text-green-600" }, "פעיל")
      )
    ),

    React.createElement('div', { className: "h-64 w-full", dir: "ltr" },
      React.createElement(ResponsiveContainer, { width: "100%", height: "100%" },
        React.createElement(AreaChart, { data: data },
          React.createElement('defs', null,
            React.createElement('linearGradient', { id: "colorCarbon", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement('stop', { offset: "5%", stopColor: "#10b981", stopOpacity: 0.8 }),
              React.createElement('stop', { offset: "95%", stopColor: "#10b981", stopOpacity: 0 })
            )
          ),
          React.createElement(CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: "#e2e8f0" }),
          React.createElement(XAxis, { dataKey: "name", tick: { fontSize: 12 }, stroke: "#94a3b8" }),
          React.createElement(YAxis, { tick: { fontSize: 12 }, stroke: "#94a3b8" }),
          React.createElement(Tooltip, { 
            contentStyle: { borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }
          }),
          React.createElement(Area, { 
            type: "monotone", 
            dataKey: "carbon", 
            stroke: "#10b981", 
            fillOpacity: 1, 
            fill: "url(#colorCarbon)", 
            name: "ספיחת פחמן (ק\"ג)"
          })
        )
      )
    ),
    
    React.createElement('div', { className: "grid grid-cols-2 gap-4 mt-6" },
      React.createElement('div', { className: "bg-green-50 p-4 rounded-lg text-center" },
        React.createElement('span', { className: "block text-2xl font-bold text-green-700" }, "14 דונם"),
        React.createElement('span', { className: "text-sm text-green-600" }, "שטח משוקם")
      ),
      React.createElement('div', { className: "bg-blue-50 p-4 rounded-lg text-center" },
        React.createElement('span', { className: "block text-2xl font-bold text-blue-700" }, "840 ק\"ג"),
        React.createElement('span', { className: "text-sm text-blue-600" }, "פחמן הוסר החודש")
      )
    )
  );
};

export default FarmDashboard;
