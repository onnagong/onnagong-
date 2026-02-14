
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-white text-3xl font-black mb-6 font-myeongjo">온나공</h2>
            <p className="mb-4">온전히 나를 만나는 공간 - 멘탈 엔지니어링 센터</p>
            <div className="space-y-2">
              <p>운영 시간: 오전 10:00 ~ 오후 9:00</p>
              <p>매주 일요일 휴무</p>
              <p className="text-sm text-stone-400">공휴일은 스케줄 따라 변동 있음</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a 
              href="http://pf.kakao.com/_maxgWC/chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20"
            >
              불안 극복을 위한 상담 문의하기
            </a>
            <a 
              href="https://open.kakao.com/o/gLkzMYtf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white text-center py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
            >
              마음챙김 프로그램 참여
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">블로그</a>
            <a href="#" className="hover:text-orange-400 transition-colors">유튜브</a>
            <a href="#" className="hover:text-orange-400 transition-colors">인스타그램</a>
          </div>
          <p className="text-sm text-stone-500">© 2024 온나공 (마집쌤). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
