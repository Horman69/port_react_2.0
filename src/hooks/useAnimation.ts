import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { AnimationConfig } from '@/types';

export const useAnimation = (config: AnimationConfig) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.to(element, {
      ...config,
      paused: true,
    });

    return () => animation.kill();
  }, [config]);

  return elementRef;
};