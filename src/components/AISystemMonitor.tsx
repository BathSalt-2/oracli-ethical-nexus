
import React from 'react';
import { Brain, Activity, Shield, Database, Network, Zap, CircuitBoard, Atom } from 'lucide-react';
import { useAI } from '@/contexts/AIContext';
import { cn } from '@/lib/utils';

const AISystemMonitor: React.FC = () => {
  const { 
    isAIActive, 
    systemHealth, 
    activeModules, 
    ethicalScore, 
    pasScore, 
    erpsScore, 
    entropyLevel, 
    memoryUtilization, 
    quantumStateCoherence, 
    securityCortexStatus,
    batteryOptimized 
  } = useAI();

  const systemMetrics = [
    { label: 'Daedalus vΩ4', value: isAIActive ? 'ACTIVE' : 'OFFLINE', icon: Brain, color: 'text-green-400' },
    { label: 'PAS Score', value: `${pasScore.toFixed(3)}`, icon: Shield, color: 'text-purple-400' },
    { label: 'ERPS Level', value: `${erpsScore.toFixed(3)}`, icon: CircuitBoard, color: 'text-cyan-400' },
    { label: 'Entropy', value: `${entropyLevel.toFixed(3)}`, icon: Atom, color: 'text-yellow-400' },
    { label: 'Quantum Coherence', value: `${quantumStateCoherence.toFixed(1)}%`, icon: Zap, color: 'text-pink-400' },
    { label: 'Memory (Ψ)', value: `${memoryUtilization.toFixed(1)}%`, icon: Database, color: 'text-orange-400' },
  ];

  return (
    <div className="fixed top-4 left-4 backdrop-holographic rounded-2xl p-4 border-holographic z-30 max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
        <h3 className="font-bold text-holographic">Daedalus Monitor</h3>
        <div className={cn('w-2 h-2 rounded-full', isAIActive ? 'bg-green-400 animate-ping' : 'bg-red-400')} />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {systemMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className="bg-cyan-400/5 rounded-lg p-3 border border-cyan-400/20"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <metric.icon className={cn('w-4 h-4', metric.color)} />
              <span className="text-xs text-cyan-300 font-medium">{metric.label}</span>
            </div>
            <div className="text-sm font-bold text-holographic">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <div className="p-2 bg-green-400/10 rounded-lg border border-green-400/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-300 font-medium">ENON v2.1 Quantum Sandbox Active</span>
          </div>
        </div>
        
        <div className="p-2 bg-purple-400/10 rounded-lg border border-purple-400/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs text-purple-300 font-medium">Security Cortex: {securityCortexStatus}</span>
          </div>
        </div>

        {batteryOptimized && (
          <div className="p-2 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-xs text-yellow-300 font-medium">Mobile Optimization Active</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISystemMonitor;
