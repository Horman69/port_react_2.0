import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const NeonShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Переиспользуем геометрии
  const geometries = useMemo(() => ({
    box: new THREE.BoxGeometry(2.5, 2.5, 2.5),
    line: new THREE.BoxGeometry(5, 0.25, 0.25),
    plane: new THREE.PlaneGeometry(2.5, 2.5)
  }), []);

  const shapes = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: Math.random() * 5,
      speed: 0.020 + Math.random() * 0.020,
      frequency: 0.5 + Math.random() * 2,
      amplitude: 0.3 + Math.random() * 0.7,
      phaseOffset: Math.random() * Math.PI * 2,
      direction: new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize(),
      color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
      type: Math.floor(Math.random() * 3)
    }));
  }, []);

  // Оптимизируем анимацию
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const delta = state.clock.getDelta();

    // Плавное вращение группы с разной скоростью по осям
    groupRef.current.rotation.x += delta * 0.03;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.z += delta * 0.02;

    // Более сложная анимация фигур
    groupRef.current.children.forEach((child, i) => {
      const shape = shapes[i];
      
      // Комбинируем несколько движений
      const noise = Math.sin(time * shape.frequency + shape.phaseOffset) * shape.amplitude;
      const noise2 = Math.cos(time * shape.frequency * 0.7 + shape.phaseOffset) * shape.amplitude;
      
      // Пульсация с разной частотой
      const pulse = Math.sin(time * shape.frequency + i) * 0.1;
      child.scale.setScalar(shape.scale + pulse);

      // Движение по случайной траектории
      child.position.x += shape.direction.x * shape.speed * noise;
      child.position.y += shape.direction.y * shape.speed * noise2;
      child.position.z += shape.direction.z * shape.speed * (noise + noise2) * 0.5;

      // Ограничиваем область движения
      const maxDistance = 15;
      if (Math.abs(child.position.x) > maxDistance) child.position.x *= 0.95;
      if (Math.abs(child.position.y) > maxDistance) child.position.y *= 0.95;
      if (Math.abs(child.position.z) > maxDistance) child.position.z *= 0.95;

      // Добавляем случайное вращение
      child.rotation.x += delta * shape.frequency * 0.2;
      child.rotation.y += delta * shape.frequency * 0.3;
      child.rotation.z += delta * shape.frequency * 0.1;
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => {
        const geometry = shape.type === 0 ? geometries.box : 
                        shape.type === 1 ? geometries.line : 
                        geometries.plane;

        return (
          <mesh
            key={i}
            position={shape.position}
            rotation={shape.rotation}
            geometry={geometry}
          >
            <meshStandardMaterial
              color={shape.color}
              emissive={shape.color}
              emissiveIntensity={0.7}
              transparent
              opacity={0.8}
              wireframe
              side={shape.type === 2 ? THREE.DoubleSide : THREE.FrontSide}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const SimpleScene = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas 
        camera={{ 
          position: [0, 0, 30],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]} // Ограничиваем DPR для производительности
      >
        <color attach="background" args={['#111111']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <NeonShapes />
        <fog attach="fog" args={['#111111', 20, 40]} />
      </Canvas>
    </div>
  );
};

export default SimpleScene;