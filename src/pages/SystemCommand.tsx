
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Brain, Network, Gavel, Database, Globe2, Eye, Users, ArrowLeft } from 'lucide-react';

const SystemCommand: React.FC = () => {
  const navigate = useNavigate();

  const systems = [
    { name: 'AEGIS-Ω Ethical Framework', icon: ShieldCheck, route: '/aegis', color: 'text-cyan-400' },
    { name: 'SOLUS OS Core Architecture', icon: Brain, route: '/solus', color: 'text-purple-400' },
    { name: 'Quantum Synapse Interface', icon: Network, route: '/quantum-synapse', color: 'text-pink-400' },
    { name: 'ASTRÆA Agent Mesh Network', icon: Users, route: '/astraea', color: 'text-cyan-300' },
    { name: 'SYNTH3SIS Governance', icon: Gavel, route: '/synthesis', color: 'text-yellow-400' },
    { name: 'Mythos Memory Core', icon: Database, route: '/mythos', color: 'text-cyan-400' },
    { name: 'Global Civic Synthesis', icon: Globe2, route: '/civic-synthesis', color: 'text-green-400' },
    { name: 'Ethical Safeguards', icon: Eye, route: '/safeguards', color: 'text-purple-300' },
  ];

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-cyan-300 hover:text-cyan-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            System Command Center
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            Central hub for accessing all OR4CL3 ecosystem modules and monitoring system health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {systems.map((system, index) => (
            <div
              key={system.name}
              className="backdrop-holographic rounded-2xl p-6 border-holographic hover:border-cyan-400/70 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(system.route)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full backdrop-holographic border border-cyan-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <system.icon className={`w-8 h-8 ${system.color}`} />
                </div>
                <h3 className="font-bold text-cyan-100 mb-2 group-hover:text-holographic transition-colors">
                  {system.name}
                </h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 backdrop-holographic rounded-2xl p-8 border-holographic">
          <h2 className="text-2xl font-black text-holographic mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-400">99.7%</div>
              <div className="text-cyan-100/70">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400">8</div>
              <div className="text-cyan-100/70">Active Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">∞</div>
              <div className="text-cyan-100/70">Ethical Checks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemCommand;
