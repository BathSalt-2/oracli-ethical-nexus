
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gavel, Vote, Users, TrendingUp } from 'lucide-react';

const SynthesisGovernance: React.FC = () => {
  const navigate = useNavigate();

  const proposals = [
    { id: 'PROP-001', title: 'Ethical AI Guidelines Update', votes: 847, status: 'Active', impact: 'High' },
    { id: 'PROP-002', title: 'Resource Allocation Protocol', votes: 623, status: 'Pending', impact: 'Medium' },
    { id: 'PROP-003', title: 'Transparency Enhancement', votes: 912, status: 'Passed', impact: 'High' },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-yellow-400/50 flex items-center justify-center">
            <Gavel className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            SYNTH3SIS Decentralized Governance
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            Incentivized Proof-of-Impact Tokens and auditable governance smart contracts encourage transparent, ethical participation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="backdrop-holographic rounded-2xl p-6 border-holographic text-center">
            <Vote className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <div className="text-2xl font-black text-holographic mb-2">2,847</div>
            <div className="text-cyan-100/70">Active Votes</div>
          </div>
          <div className="backdrop-holographic rounded-2xl p-6 border-holographic text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <div className="text-2xl font-black text-holographic mb-2">1,247</div>
            <div className="text-cyan-100/70">Participants</div>
          </div>
          <div className="backdrop-holographic rounded-2xl p-6 border-holographic text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <div className="text-2xl font-black text-holographic mb-2">97.3%</div>
            <div className="text-cyan-100/70">Consensus Rate</div>
          </div>
        </div>

        <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
          <h2 className="text-2xl font-black text-holographic mb-6">Active Proposals</h2>
          <div className="space-y-4">
            {proposals.map((proposal, index) => (
              <div
                key={proposal.id}
                className="p-6 bg-cyan-400/5 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-cyan-300 mb-1">{proposal.title}</h3>
                    <p className="text-cyan-100/70 text-sm">{proposal.id}</p>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-bold ${
                    proposal.status === 'Active' ? 'bg-yellow-400/20 text-yellow-400' :
                    proposal.status === 'Passed' ? 'bg-green-400/20 text-green-400' :
                    'bg-gray-400/20 text-gray-400'
                  }`}>
                    {proposal.status}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-cyan-100/70 text-sm">{proposal.votes} votes</span>
                    <span className={`text-sm font-bold ${
                      proposal.impact === 'High' ? 'text-red-400' :
                      proposal.impact === 'Medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {proposal.impact} Impact
                    </span>
                  </div>
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                    Vote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SynthesisGovernance;
