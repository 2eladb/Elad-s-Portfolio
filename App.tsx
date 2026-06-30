import React from 'react';
import Hero from './components/Hero.tsx';
import Investments from './components/Investments.tsx';
import MarketingGrowth from './components/MarketingGrowth.tsx';
import RegenerativeAg from './components/RegenerativeAg.tsx';
import MusicCommunity from './components/MusicCommunity.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <main className="flex-grow">
        <Hero />
        <Investments />
        <MarketingGrowth />
        <RegenerativeAg />
        <MusicCommunity />
      </main>
      <Footer />
    </div>
  );
}

export default App;
