
import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">나의 스토리</span>
        <h2 className="text-3xl md:text-4xl font-black text-stone-800 leading-tight font-myeongjo">
          별명이 '곰'이던 덩치 큰 사람이,<br/>
          불안 앞에 53kg까지 무너져내렸던 날들
        </h2>
      </div>

      <div className="space-y-12 text-lg leading-relaxed text-stone-700">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-700 mb-4"># 아픔의 깊이</h3>
            <p className="mb-4">
              불안이 너무 심해 한때는 '곰'이라 불리던 건장한 체격이 53kg까지 빠질 정도로 극심한 고통을 겪었습니다. 공황장애, 범불안장애, 우울증이 한꺼번에 몰려와 일상을 집어삼켰습니다.
            </p>
            <p>
              수많은 상담 센터와 정신과를 전전하며 매달렸지만, 나아질 기미는 보이지 않았고 절망만 깊어갔습니다. 숨이 턱턱 막히는 그 시간들은 제 삶의 가장 어두운 터널이었습니다.
            </p>
          </div>
        </div>

        {/* Mid-image placeholder: Warm abstract landscape */}
        <div className="rounded-3xl overflow-hidden shadow-2xl my-12">
          <img src="https://picsum.photos/seed/warm-clouds/1200/500" alt="따뜻한 노을빛 구름" className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-700 mb-4"># 스스로 찾은 빛</h3>
            <p className="mb-4">
              "이대로는 안 되겠다, 내가 나를 살려야 한다"는 절박한 마음으로 스스로 답을 찾기 시작했습니다. 그때 만난 것이 바로 '인지행동치료(CBT)'였습니다.
            </p>
            <p>
              이론을 토대로 두려움에 정면으로 직면하는 훈련을 시작했고, 점차 자신을 있는 그대로 수용하는 법과 마음챙김을 삶에 접목하게 되었습니다. 기적은 외부가 아닌 제 안에서 시작되고 있었습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-700 mb-4"># 치열한 연구와 완치</h3>
            <p className="mb-4">
              수년간 심리학과 뇌과학 논문들을 파고들며, 그 지식들을 저의 극복 과정에 하나하나 대입하고 실험했습니다. 단순한 위로가 아닌 실질적인 작동 원리를 파악하고 싶었습니다.
            </p>
            <p className="font-medium text-stone-900 italic">
              "그 치열한 과정 끝에 저는 마침내 정신과 약을 단약하고 완전한 극복의 길로 들어설 수 있었습니다."
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl my-12">
          <img src="https://picsum.photos/seed/warm-forest-path/1200/500" alt="아늑한 빛이 스며드는 숲길" className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-orange-700 mb-4"># 전문가로의 소명</h3>
            <p className="mb-4">
              저와 같은 고통을 겪는 분들에게 실질적인 도움을 주는 상담가가 되기로 결심했습니다. 그렇게 10년이 넘는 시간 동안 1만 회기 이상의 상담을 진행해왔습니다.
            </p>
            <p>
              수많은 분이 저와 함께 불안을 넘어 일상으로 복귀했고, 더 단단하게 성장한 자신을 만나는 기적을 목격하고 있습니다. 이제 그 기적을 당신에게도 나누고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
