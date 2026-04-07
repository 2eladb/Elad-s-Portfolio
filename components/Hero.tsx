import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Nature Tech Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none uppercase drop-shadow-2xl">
          ELAD'S PORTFOLIO
        </h1>
        
        <div className="w-32 h-2 bg-green-500 mx-auto mb-10 rounded-full"></div>
        
        <p className="text-2xl md:text-4xl font-light mb-4">
          תיק העבודות שלי, רוצים לדעת במה אני מתעסק?
        </p>
        <p className="text-xl md:text-3xl font-bold text-green-400 mb-8">
          בואו נשמור על הכדור שלנו.
        </p>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
          השקעות. אדמה. יצירה.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/30"
          >
            לצפייה בעשייה
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            צור קשר
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;