'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { EffectComposer, Bloom, Glitch } from '@react-three/postprocessing';

const NeonShapes = dynamic(() => import('./NeonShapes'), { ssr: false });

const Scene = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Создаем интервал для эффекта ряби
    const interval = setInterval(() => {
      setIsGlitching(true);
      // Выключаем эффект через 0.5 секунды
      setTimeout(() => {
        setIsGlitching(false);
      }, 500);
    }, 20000); // Каждые 10 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 50],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 20, 10]} intensity={0.5} />
          <NeonShapes />
          <EffectComposer>
            <Bloom 
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
            {isGlitching && (
              <Glitch
                delay={[0, 0]} // Мгновенное срабатывание
                duration={[0.2, 0.4]}
                strength={[0.2, 0.4]}
                mode={1}
              />
            )}
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
