
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Scene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.3} maxDistance={20} minDistance={5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      <group ref={groupRef}>
        <mesh>
          <torusKnotGeometry args={[1.5, 0.5, 256, 32]} />
          <meshStandardMaterial 
            color={'#06b6d4'} 
            emissive={'#06b6d4'} 
            emissiveIntensity={0.2} 
            metalness={0.5}
            roughness={0.3}
            wireframe 
          />
        </mesh>
      </group>
    </>
  );
};

export default Scene;
