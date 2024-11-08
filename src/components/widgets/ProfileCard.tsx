'use client';

import Image from 'next/image';
import Card from '../ui/Card';
import { useEffect, useState } from 'react';

const ProfileCard = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Привет! Я frontend разработчик и увлекаюсь кибербезопасностью. Создаю веб-приложения и изучаю новые технологии.";

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;

    const startTyping = () => {
      timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, 30);
    };

    startTyping();

    return () => {
      clearInterval(timer);
      setText('');
      setIsTypingComplete(false);
    };
  }, []);

  return (
    <Card>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image 
            src="/avatar.png"
            alt="Avatar"
            width={128}
            height={128}
            priority
            className="rounded-full object-cover border-2 border-accent/80"
          />
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary" />
        </div>

        <div className="flex-1 w-full">
          <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-6 font-mono text-xl leading-relaxed">
            <div className="relative">
              <div className="invisible">{fullText}</div>
              <div className="absolute top-0 left-0">
                {text}
                <span className={`inline-block w-2.5 h-5 ml-1 bg-white ${isTypingComplete ? 'animate-pulse' : 'animate-pulse'}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;