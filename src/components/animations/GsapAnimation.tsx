'use client';

<<<<<<< HEAD
import { useEffect, useRef, useMemo } from 'react';
=======
import { useEffect, useRef } from 'react';
>>>>>>> e974d3b64ba73c793d62d9c84c999b5627b64118
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const GsapAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

<<<<<<< HEAD
  const elements = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      color: `hsl(${i * 30}, 70%, 50%)`,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
    })), []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Анимация появления контейнера
      tl.fromTo(containerRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 }
      )
      
      // Анимация текста
      .fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          text: "Frontend Development", 
          ease: "none"
        }
      )
      
      // Анимация элементов
      .fromTo(elementsRef.current,
        { 
          opacity: 0,
          scale: 0,
          rotation: -180
        },
        { 
          opacity: 0.8,
          scale: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.8
        }
      );

      return () => tl.kill();
    }, containerRef);

    return () => ctx.revert();
=======
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Анимация появления контейнера
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 }
    )
    
    // Анимация текста
    .fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        text: "Frontend Development", 
        ease: "none"
      }
    )
    
    // Анимация элементов
    .fromTo(elementsRef.current,
      { 
        opacity: 0,
        scale: 0,
        rotation: -180
      },
      { 
        opacity: 0.8,
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 0.8
      }
    );

    return () => tl.kill();
>>>>>>> e974d3b64ba73c793d62d9c84c999b5627b64118
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden p-6">
      <div ref={textRef} className="text-3xl font-bold text-white mb-8"></div>
      <div className="relative h-[calc(100%-4rem)]">
<<<<<<< HEAD
        {elements.map((element, i) => (
=======
        {Array.from({ length: 12 }).map((_, i) => (
>>>>>>> e974d3b64ba73c793d62d9c84c999b5627b64118
          <div
            key={i}
            ref={el => elementsRef.current[i] = el!}
            className="absolute w-8 h-8 rounded-full"
            style={{
<<<<<<< HEAD
              backgroundColor: element.color,
              left: element.left,
              top: element.top,
=======
              backgroundColor: `hsl(${i * 30}, 70%, 50%)`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
>>>>>>> e974d3b64ba73c793d62d9c84c999b5627b64118
              filter: 'blur(10px)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GsapAnimation;