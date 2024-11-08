'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CardAnimation = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1, ease: "power2.inOut" }
    });

    // Анимация карточек
    tl.fromTo(cardsRef.current, 
      { 
        y: -20,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2
      }
    ).to(cardsRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      delay: 1
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          ref={el => cardsRef.current[i] = el!}
          className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 
                     backdrop-blur-sm rounded-lg p-4 h-28
                     flex items-center justify-center"
        >
          <span className="text-white font-bold">Card {i + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default CardAnimation;
