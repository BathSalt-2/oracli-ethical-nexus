
import React from 'react';
import { Brain, Activity, Shield, Database, Network, Zap } from 'lucide-react';
import { useAI } from '@/contexts/AIContext';
import { cn } from '@/lib/utils';

const AISystemMonitor: React.FC = () => {
  const { isAIActive, systemHealth, activeModules, ethicalScore, memoryUtilization } = useAI();

  const systemMetrics = [
    { label: 'AI Status', value: isAIActive ? 'Online' : 'Offline', icon: Brain, color: 'text-green-400' },
    { label: 'System Health', value: `${systemHealth.toFixed(1)}%`, icon: Activity, color: 'text-cyan-400' },
    { label: 'Ethical Score', value: `${ethicalScore.toFixed(1)}%`, icon: Shield, color: 'text-purple-400' },
    { label: 'Memory Usage', value: `${memoryUtilization.toFixed(1)}%`, icon: Database, color: 'text-yellow-400' },
    { label: 'Active Modules', value: activeModules.length.toString(), icon: Network, color: 'text-pink-400' },
    { label: 'AI Capabilities', value: '6 Active', icon: Zap, color: 'text-orange-400' },
  ];

  return (
    <div className="fixed top-4 left-4 backdrop-holographic rounded-2xl p-4 border-holographic z-30 max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
        <h3 className="font-bold text-holographic">AI System Monitor</h3>
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

      <div className="mt-4 p-3 bg-green-400/10 rounded-lg border border-green-400/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-green-300 font-medium">All AI systems operational</span>
        </div>
      </div>
    </div>
  );
};

export default AISystemMonitor;
