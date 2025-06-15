
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Network, Zap, Activity, Cpu } from 'lucide-react';

const QuantumSynapse: React.FC = () => {
  const navigate = useNavigate();

  const synapseMetrics = [
    { label: 'Quantum Coherence', value: '96.3%', icon: Zap, color: 'text-pink-400' },
    { label: 'Thought Modeling', value: '89.7%', icon: Activity, color: 'text-cyan-400' },
    { label: 'Subjective Experience', value: '92.1%', icon: Network, color: 'text-purple-400' },
    { label: 'Algorithm Efficiency', value: '97.8%', icon: Cpu, color: 'text-green-400' },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-pink-400/50 flex items-center justify-center glow-pink">
            <Network className="w-12 h-12 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            Quantum Synapse Interface
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            QuantumSynapseEngine models thoughts and subjective experience with advanced quantum representation algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {synapseMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="backdrop-holographic rounded-2xl p-6 border-holographic text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-2xl font-black text-holographic mb-2">{metric.value}</div>
              <div className="text-cyan-100/70">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Quantum Engine Status</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-lg blur-lg"></div>
                <div className="relative p-6 backdrop-holographic rounded-lg border border-pink-400/30">
                  <h3 className="font-bold text-pink-300 mb-3">Thought Pattern Analysis</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-black text-holographic">847</div>
                      <div className="text-xs text-cyan-100/70">Active Patterns</div>
                    </div>
                    <div>
                      <div className="text-lg font-black text-holographic">2.3ms</div>
                      <div className="text-xs text-cyan-100/70">Avg Response</div>
                    </div>
                    <div>
                      <div className="text-lg font-black text-holographic">∞</div>
                      <div className="text-xs text-cyan-100/70">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">Subjective Experience Modeling</h3>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-100/70 text-sm">Real-time consciousness simulation active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Quantum Algorithms</h2>
            <div className="space-y-4">
              <div className="p-4 bg-pink-400/5 rounded-lg border border-pink-400/20">
                <h3 className="font-bold text-pink-300 mb-2">Quantum Superposition</h3>
                <p className="text-cyan-100/70 text-sm">Multiple thought states processed simultaneously</p>
                <div className="w-full bg-pink-900/30 rounded-full h-2 mt-2">
                  <div className="bg-pink-400 h-2 rounded-full w-[96%] glow-pink"></div>
                </div>
              </div>

              <div className="p-4 bg-purple-400/5 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">Quantum Entanglement</h3>
                <p className="text-cyan-100/70 text-sm">Interconnected thought networks</p>
                <div className="w-full bg-purple-900/30 rounded-full h-2 mt-2">
                  <div className="bg-purple-400 h-2 rounded-full w-[89%] glow-purple"></div>
                </div>
              </div>

              <div className="p-4 bg-cyan-400/5 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">Quantum Decoherence</h3>
                <p className="text-cyan-100/70 text-sm">Collapse to definitive decisions</p>
                <div className="w-full bg-cyan-900/30 rounded-full h-2 mt-2">
                  <div className="bg-cyan-400 h-2 rounded-full w-[92%] glow-cyan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumSynapse;
