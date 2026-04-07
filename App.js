import React from 'react';
import Hero from './components/Hero';
import Investments from './components/Investments';
import RegenerativeAg from './components/RegenerativeAg';
import MusicCommunity from './components/MusicCommunity';
import TechEngine from './components/TechEngine';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return React.createElement('div', { className: "min-h-screen flex flex-col font-sans", dir: "rtl" },
    React.createElement('main', { className: "flex-grow" },
      React.createElement(Hero, null),
      React.createElement(Investments, null),
      React.createElement(RegenerativeAg, null),
      React.createElement(TechEngine, null),
      React.createElement(MusicCommunity, null)
    ),
    React.createElement(Footer, null),
    React.createElement(ChatBot, null)
  );
}

export default App;
