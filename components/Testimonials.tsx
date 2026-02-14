
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-4 font-myeongjo">
            광고 하나 없는,<br/>
            내담자들이 직접 써내려간 삶의 변화 기록
          </h2>
          <p className="text-stone-500 text-lg">루틴 설계와 멘탈 기획을 통한 구체적인 변화들</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-2xl transition-shadow duration-300">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-bold mb-4">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-stone-800 mb-4 leading-snug">
                "{item.title}"
              </h3>
              <p className="text-stone-600 leading-relaxed italic">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm">※ 개인정보 보호를 위해 사례는 익명으로 구성되었습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
