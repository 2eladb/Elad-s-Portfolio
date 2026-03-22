import React from 'react';
import Hero from './components/Hero';
import Investments from './components/Investments';
import RegenerativeAg from './components/RegenerativeAg';
import MusicCommunity from './components/MusicCommunity';
import TechEngine from './components/TechEngine';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <main className="flex-grow">
        <Hero />
        <Investments />
        <RegenerativeAg />
        <TechEngine />
        <MusicCommunity />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
