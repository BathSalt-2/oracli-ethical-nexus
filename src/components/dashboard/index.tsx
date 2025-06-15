
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from './Scene';
import ChatInterface from './ChatInterface';
import { Settings, Command } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-background animate-fade-in">
      <Suspense fallback={null}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
          <Scene />
        </Canvas>
      </Suspense>
      <ChatInterface />

      {/* System Command Center button */}
      <button
        className="fixed z-40 top-6 right-6 bg-card/70 backdrop-holographic border-holographic px-6 py-3 rounded-full shadow-lg flex items-center gap-3 hover:scale-110 transition-transform"
        onClick={() => navigate("/system-command")}
        aria-label="Open System Command Center"
      >
        <Command className="text-cyan-400 w-6 h-6" />
        <span className="text-cyan-400 font-bold hidden md:inline">Command Center</span>
      </button>

      {/* Floating settings button / gear, mobile-friendly */}
      <button
        className="fixed z-40 bottom-20 right-4 bg-card/70 backdrop-holographic border-holographic p-3 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:hidden"
        onClick={() => navigate("/settings")}
        aria-label="Open settings"
      >
        <Settings className="text-cyan-400 w-7 h-7" />
      </button>

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
