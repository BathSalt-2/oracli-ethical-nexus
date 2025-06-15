
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Network, Shield, Eye } from 'lucide-react';

const AstraeaNetwork: React.FC = () => {
  const navigate = useNavigate();

  const agents = [
    { id: 'A001', status: 'Active', specialization: 'Environmental Impact', trust: 97 },
    { id: 'A002', status: 'Active', specialization: 'Social Justice', trust: 94 },
    { id: 'A003', status: 'Analyzing', specialization: 'Economic Ethics', trust: 91 },
    { id: 'A004', status: 'Active', specialization: 'Cultural Sensitivity', trust: 96 },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-cyan-300/50 flex items-center justify-center glow-cyan">
            <Users className="w-12 h-12 text-cyan-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            ASTRÆA Agent Mesh Network
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            CivicOperativeAgents cooperate with consensus protocols to analyze impacts, overseen by EthicalOversightModule and BiasCorrectionEngine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className="backdrop-holographic rounded-2xl p-6 border-holographic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="font-bold text-cyan-300 mb-1">{agent.id}</h3>
                <p className="text-xs text-cyan-100/70 mb-3">{agent.specialization}</p>
                <div className="mb-3">
                  <div className="text-lg font-black text-holographic">{agent.trust}%</div>
                  <div className="text-xs text-cyan-100/70">Trust Score</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-bold ${
                  agent.status === 'Active' ? 'bg-green-400/20 text-green-400' :
                  agent.status === 'Analyzing' ? 'bg-yellow-400/20 text-yellow-400' :
                  'bg-gray-400/20 text-gray-400'
                }`}>
                  {agent.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              Ethical Oversight Module
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <div className="flex justify-between items-center">
                  <span className="text-green-300">Bias Check Passed</span>
                  <span className="text-green-400 text-sm">99.7%</span>
                </div>
              </div>
              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Consensus Achieved</span>
                  <span className="text-cyan-400 text-sm">847 votes</span>
                </div>
              </div>
              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Impact Analysis Complete</span>
                  <span className="text-purple-400 text-sm">2.3s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-purple-400" />
              Bias Correction Engine
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">Real-time Corrections</h3>
                <div className="text-2xl font-black text-holographic">1,247</div>
                <p className="text-cyan-100/70 text-sm">Biases corrected today</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-100 text-sm">Gender Bias</span>
                  <span className="text-green-400 font-bold">Eliminated</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-100 text-sm">Cultural Bias</span>
                  <span className="text-green-400 font-bold">Eliminated</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-100 text-sm">Economic Bias</span>
                  <span className="text-yellow-400 font-bold">Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstraeaNetwork;
