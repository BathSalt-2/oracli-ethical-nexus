
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from './Scene';
import ChatInterface from './ChatInterface';

const Dashboard: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background animate-fade-in">
      <Suspense fallback={null}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
          <Scene />
        </Canvas>
      </Suspense>
      <ChatInterface />
      <Loader 
        containerStyles={{ background: 'transparent' }} 
        innerStyles={{ width: '150px', padding: '1rem', background: 'rgba(8, 8, 16, 0.8)', borderRadius: '0.75rem', border: '1px solid rgba(6, 182, 212, 0.2)' }}
        barStyles={{ height: '8px', background: '#06b6d4' }}
        dataStyles={{ color: '#06b6d4', fontSize: '14px', fontWeight: 'bold' }}
      />
    </div>
  );
};

export default Dashboard;
