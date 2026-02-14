
import React, { useState, useEffect } from 'react';

const FloatingTiger: React.FC = () => {
  const [message, setMessage] = useState("제가 곁에서 응원하겠습니다");
  const messages = [
    "포기하지 마세요. 반드시 나아집니다.",
    "제가 곁에서 응원하겠습니다",
    "당신의 마음은 설계될 수 있습니다",
    "오늘 하루도 정말 고생 많으셨어요",
    "불안도 하나의 습관일 뿐입니다"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none md:pointer-events-auto">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-xl mb-3 border-2 border-orange-400 relative animate-bounce">
        <p className="text-sm font-bold text-stone-800 whitespace-nowrap">{message}</p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-orange-400 rotate-45"></div>
      </div>
      <div className="w-20 h-20 bg-orange-500 rounded-full shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Tiger&backgroundColor=f97316')] bg-cover">
        {/* Simplified Tiger Representation using a generated avatar as character placeholder */}
      </div>
    </div>
  );
};

export default FloatingTiger;
