
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/seed/sunset-mountain-path/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-orange-900/30 to-orange-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-white text-6xl md:text-8xl font-black mb-6 tracking-tighter text-shadow font-myeongjo">
          온나공
        </h1>
        <p className="text-white text-xl md:text-2xl font-medium mb-4 opacity-90 text-shadow">
          온전히 나를 만나는 공간
        </p>
        <div className="w-16 h-1 bg-orange-400 mx-auto mb-8 shadow-lg"></div>
        <p className="text-white text-lg md:text-xl font-light mb-2 max-w-2xl mx-auto text-shadow">
          멘탈 엔지니어 · 상담가 · 마음기획가
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-10 text-shadow">
          김범중 (마집쌤)
        </h2>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
            "10년 넘게 1만 번의 마음을 설계하며 증명했습니다.<br/>
            <span className="text-orange-300 font-bold underline decoration-orange-400">당신의 불안도 반드시 끝이 있습니다.</span>"
          </p>
        </div>
        
        <div className="mt-12 animate-bounce">
          <a href="#story" className="text-white opacity-60 hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
