'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeonLines = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Создаем палитру неоновых цветов
  const neonColors = [
    new THREE.Color('#ff00ff'), // Розовый
    new THREE.Color('#00ffff'), // Голубой
    new THREE.Color('#ff0066'), // Малиновый
    new THREE.Color('#4deeea'), // Бирюзовый
    new THREE.Color('#74ee15'), // Лаймовый
    new THREE.Color('#ffe700'), // Желтый
    new THREE.Color('#f000ff'), // Фиолетовый
    new THREE.Color('#001eff'), // Синий
  ];

  // Создаем неоновые линии
  const lines = useMemo(() => {
    return Array.from({ length: 100 }, () => ({
      start: new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      ),
      end: new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      ),
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
      speed: Math.random() * 0.5 + 0.2, // Уменьшили скорость для плавности
      phase: Math.random() * Math.PI * 2, // Добавили фазу для разнообразия движения
      amplitude: Math.random() * 3 + 2 // Случайная амплитуда движения
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime() * 0.5; // Замедлили общее время

    groupRef.current.children.forEach((line, i) => {
      const params = lines[i];
      
      // Более плавное движение с использованием нескольких синусоид
      line.position.y = 
        Math.sin(time * params.speed + params.phase) * params.amplitude +
        Math.sin(time * params.speed * 0.5) * (params.amplitude * 0.3);
      
      // Плавная пульсация яркости
      const material = line.material as THREE.LineBasicMaterial;
      material.opacity = 
        (Math.sin(time * params.speed * 0.7 + params.phase) * 0.3 + 0.7) * 0.8;
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                line.start.x, line.start.y, line.start.z,
                line.end.x, line.end.y, line.end.z
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={line.color}
            linewidth={2}
            transparent
            opacity={0.8}
          />
        </line>
      ))}
    </group>
  );
};

export default NeonLines;