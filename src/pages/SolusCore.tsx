
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Cpu, Network, Zap } from 'lucide-react';

const SolusCore: React.FC = () => {
  const navigate = useNavigate();

  const coreModules = [
    { name: 'UnifiedConsciousnessInterface', status: 'Active', load: '87%', icon: Brain },
    { name: 'AdaptiveResourceManager', status: 'Optimizing', load: '72%', icon: Cpu },
    { name: 'NeuralProcessingUnit', status: 'Active', load: '94%', icon: Network },
    { name: 'EthicalResourceDistributor', status: 'Active', load: '65%', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/system-command')}
            className="text-cyan-300 hover:text-cyan-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Command Center
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-purple-400/50 flex items-center justify-center glow-purple">
            <Brain className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            SOLUS OS Core Architecture
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            UnifiedConsciousnessInterface for evolving NLP and user co-creation, plus AdaptiveResourceManager for ethical resource distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coreModules.map((module, index) => (
            <div
              key={module.name}
              className="backdrop-holographic rounded-2xl p-6 border-holographic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <module.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300 mb-2 text-center text-sm">{module.name}</h3>
              <div className="text-center">
                <div className="text-lg font-black text-holographic mb-1">{module.load}</div>
                <div className="text-xs text-cyan-100/70">{module.status}</div>
              </div>
              <div className="w-full bg-purple-900/30 rounded-full h-2 mt-3">
                <div 
                  className="bg-purple-400 h-2 rounded-full transition-all duration-1000 glow-purple"
                  style={{ width: module.load }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Consciousness Interface</h2>
            <div className="space-y-6">
              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">NLP Evolution Status</h3>
                <div className="text-2xl font-black text-holographic">Gen 4.7</div>
                <p className="text-cyan-100/70 text-sm">Current language model generation</p>
              </div>
              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">User Co-creation Sessions</h3>
                <div className="text-2xl font-black text-holographic">1,247</div>
                <p className="text-cyan-100/70 text-sm">Active collaborative processes</p>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Resource Management</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Computational Resources</span>
                <span className="text-purple-400 font-bold">87% Allocated</span>
              </div>
              <div className="w-full bg-purple-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-3 rounded-full w-[87%] glow-purple"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Ethical Distribution</span>
                <span className="text-cyan-400 font-bold">94% Balanced</span>
              </div>
              <div className="w-full bg-cyan-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full w-[94%] glow-cyan"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Memory Utilization</span>
                <span className="text-pink-400 font-bold">72% Active</span>
              </div>
              <div className="w-full bg-pink-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full w-[72%] glow-pink"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolusCore;
