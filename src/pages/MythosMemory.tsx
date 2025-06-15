
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Database, Shield, Search, Archive } from 'lucide-react';

const MythosMemory: React.FC = () => {
  const navigate = useNavigate();

  const memoryStats = [
    { label: 'Total Memories', value: '847M', icon: Database, color: 'text-cyan-400' },
    { label: 'Privacy Protected', value: '100%', icon: Shield, color: 'text-green-400' },
    { label: 'Recall Speed', value: '0.3ms', icon: Search, color: 'text-purple-400' },
    { label: 'Archive Integrity', value: '99.9%', icon: Archive, color: 'text-yellow-400' },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-cyan-400/50 flex items-center justify-center glow-cyan">
            <Database className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            Mythos Memory Core
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            NarrativeMemoryEngine applies zero-knowledge proofs for secure, trustless memory—privacy and recall guaranteed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {memoryStats.map((stat, index) => (
            <div
              key={stat.label}
              className="backdrop-holographic rounded-2xl p-6 border-holographic text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl font-black text-holographic mb-2">{stat.value}</div>
              <div className="text-cyan-100/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Narrative Memory Engine</h2>
            <div className="space-y-6">
              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">Zero-Knowledge Proofs</h3>
                <p className="text-cyan-100/70 text-sm">Memories verified without revealing content</p>
                <div className="text-lg font-black text-holographic mt-2">Active</div>
              </div>
              
              <div className="p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <h3 className="font-bold text-green-300 mb-2">Trustless Storage</h3>
                <p className="text-cyan-100/70 text-sm">Decentralized memory without central authority</p>
                <div className="text-lg font-black text-holographic mt-2">Secured</div>
              </div>

              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">Privacy Guarantee</h3>
                <p className="text-cyan-100/70 text-sm">Cryptographic protection of sensitive data</p>
                <div className="text-lg font-black text-holographic mt-2">Protected</div>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Memory Analytics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Memory Utilization</span>
                <span className="text-cyan-400 font-bold">73.2%</span>
              </div>
              <div className="w-full bg-cyan-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full w-[73%] glow-cyan"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Compression Ratio</span>
                <span className="text-green-400 font-bold">12.7:1</span>
              </div>
              <div className="w-full bg-green-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full w-[89%] glow-green"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Access Speed</span>
                <span className="text-purple-400 font-bold">Ultra-Fast</span>
              </div>
              <div className="w-full bg-purple-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-[97%] glow-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythosMemory;
