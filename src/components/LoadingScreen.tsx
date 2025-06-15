
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ease-in-out',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="OR4CL3 Logo"
          className="w-full h-full animate-pulse-slow glow-cyan"
        />
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-spin-slow border-dashed"></div>
        <div className="absolute inset-2 rounded-full border-2 border-purple-400/20 animate-spin-slow-reverse"></div>
      </div>
      <p className="mt-8 text-2xl font-black text-holographic tracking-widest uppercase">
        Initializing Quantum Synapse...
      </p>
      <div className="w-1/2 max-w-md mt-4 bg-cyan-900/50 rounded-full h-2.5 overflow-hidden border border-cyan-400/20">
        <div className="bg-cyan-400 h-full rounded-full animate-loading-bar glow-cyan"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
