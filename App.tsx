
import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingTiger from './components/FloatingTiger';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-orange-200 selection:text-orange-900">
      {/* Navigation - Simple Sticky for mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-orange-100 py-3 md:py-4 px-6 flex justify-between items-center">
        <span className="text-orange-600 font-black text-xl md:text-2xl font-myeongjo">온나공</span>
        <div className="hidden md:flex gap-8 text-sm font-bold text-stone-600">
          <a href="#story" className="hover:text-orange-500 transition-colors">나의 스토리</a>
          <a href="#expertise" className="hover:text-orange-500 transition-colors">상담 철학</a>
          <a href="#testimonials" className="hover:text-orange-500 transition-colors">변화 사례</a>
        </div>
        <a 
          href="http://pf.kakao.com/_maxgWC/chat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-md"
        >
          상담신청
        </a>
      </nav>

      <main className="pt-16 md:pt-20">
        <Hero />
        
        <div className="bg-white">
          <Story />
        </div>

        <div id="expertise">
          <Expertise />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>
        
        <section className="py-24 px-6 text-center bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 font-myeongjo">당신의 삶은 더 평온해질 수 있습니다.</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              지금 이 순간 느끼는 불안은 당신이 약해서가 아닙니다.<br/>
              단지 마음의 설계도를 다시 그려야 할 때일 뿐입니다.<br/>
              제가 당신의 등산길에 든든한 가이드가 되어드리겠습니다.
            </p>
            <a 
              href="http://pf.kakao.com/_maxgWC/chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-orange-500 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              오늘부터 불안 끝내기
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingTiger />
    </div>
  );
};

export default App;
