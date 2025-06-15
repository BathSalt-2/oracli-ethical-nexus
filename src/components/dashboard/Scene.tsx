
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

// A component for a single orbiting data point
const DataPoint = ({ initialPosition, label, color }: { initialPosition: [number, number, number]; label: string; color: string }) => {
  const ref = useRef<THREE.Group>(null!);

  // Animate the data point to orbit around the center
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      const [x, , z] = initialPosition;
      const radius = Math.sqrt(x*x + z*z);
      const yOffset = initialPosition[1];
      ref.current.position.x = Math.cos(t * 0.3 + x) * radius;
      ref.current.position.z = Math.sin(t * 0.3 + x) * radius;
      ref.current.position.y = yOffset + Math.sin(t * 0.8 + x) * 0.5;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.6} 
          roughness={0.2} 
          metalness={0.8}
          toneMapped={false} 
        />
      </mesh>
      <Text
        position={[0.25, 0, 0]}
        fontSize={0.22}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};


const Scene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.05;
        groupRef.current.rotation.x += delta * 0.02;
    }
  });

  const dataPoints = useMemo(() => {
    const points = [];
    const labels = ['Core Temp', 'Energy Flow', 'Data Stream', 'Quantum State', 'Shields', 'Life Support', 'Nav-Beacon', 'Subspace Comm'];
    const colors = ['#ff477e', '#477eff', '#7eff47', '#ffc147', '#ff47ff', '#47ffff', '#f0a0a0', '#a0f0a0'];
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 3;
        points.push({
            id: i,
            position: [x, y, z] as [number, number, number],
            label: labels[i],
            color: colors[i],
        });
    }
    return points;
  }, []);

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.3} maxDistance={20} minDistance={5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

      <group ref={groupRef}>
        <mesh>
          <torusKnotGeometry args={[1.5, 0.5, 256, 32]} />
          <meshStandardMaterial 
            color={'#06b6d4'} 
            emissive={'#06b6d4'} 
            emissiveIntensity={0.2} 
            metalness={0.7}
            roughness={0.3}
            wireframe 
          />
        </mesh>
        {dataPoints.map(point => (
            <DataPoint key={point.id} initialPosition={point.position} label={point.label} color={point.color} />
        ))}
      </group>
    </>
  );
};

export default Scene;
