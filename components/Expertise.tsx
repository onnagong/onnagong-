
import React from 'react';
import { CREDENTIALS } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-8 font-myeongjo">
              왜 '멘탈 엔지니어링'인가요?
            </h2>
            <div className="space-y-6 text-lg text-stone-600">
              <p>
                막연한 "괜찮을 거예요"라는 위로는 힘이 약합니다. 불안은 뇌의 특정 회로가 과활성화된 결과입니다.
              </p>
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <h4 className="font-bold text-stone-800 mb-2">뇌과학 기반 '불안 극복 설계'</h4>
                <p>불안을 유발하는 뇌 구조를 이해하고, 인지 왜곡을 교정하여 새로운 신경 경로를 형성합니다.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <h4 className="font-bold text-stone-800 mb-2">구체적인 '일상 루틴 기획'</h4>
                <p>상담실 안에서만 끝나는 대화가 아니라, 당신의 24시간을 지켜줄 실질적인 행동 루틴을 함께 설계합니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] border border-stone-100 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
              <span className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
              전문 자격 및 경력
            </h3>
            <ul className="space-y-6">
              {CREDENTIALS.map((item) => (
                <li key={item.id} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">●</span>
                  <span className="text-lg text-stone-700 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-orange-100 text-center italic text-stone-500">
              "당신의 고통을 누구보다 잘 알기에, <br/>가장 효율적이고 따뜻한 길을 안내합니다."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
