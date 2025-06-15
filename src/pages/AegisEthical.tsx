
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const AegisEthical: React.FC = () => {
  const navigate = useNavigate();

  const ethicalMetrics = [
    { label: 'Bias Detection', value: '99.2%', status: 'optimal', icon: CheckCircle },
    { label: 'Fairness Score', value: '97.8%', status: 'optimal', icon: CheckCircle },
    { label: 'Transparency Index', value: '94.5%', status: 'good', icon: Activity },
    { label: 'Harm Prevention', value: '99.9%', status: 'optimal', icon: CheckCircle },
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
            <ShieldCheck className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            AEGIS-Ω Ethical Framework
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            Multi-layer neural network for real-time ethical decision evaluation with MoralWeightCalculator & ConsequenceAnalyzer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ethicalMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="backdrop-holographic rounded-2xl p-6 border-holographic text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <metric.icon className={`w-8 h-8 ${
                  metric.status === 'optimal' ? 'text-green-400' : 
                  metric.status === 'good' ? 'text-yellow-400' : 'text-red-400'
                }`} />
              </div>
              <div className="text-2xl font-black text-holographic mb-2">{metric.value}</div>
              <div className="text-cyan-100/70">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-cyan-400" />
              Real-time Ethics Monitor
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <span className="text-green-300">Decision Approved</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex justify-between items-center p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <span className="text-cyan-300">Ethical Review Complete</span>
                <CheckCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex justify-between items-center p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                <span className="text-yellow-300">Bias Check In Progress</span>
                <Activity className="w-5 h-5 text-yellow-400 animate-spin" />
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Framework Components</h2>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-400/5 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">MoralWeightCalculator</h3>
                <p className="text-cyan-100/70 text-sm">Assigns ethical weights to decision parameters</p>
              </div>
              <div className="p-4 bg-purple-400/5 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">ConsequenceAnalyzer</h3>
                <p className="text-cyan-100/70 text-sm">Predicts potential outcomes and impacts</p>
              </div>
              <div className="p-4 bg-pink-400/5 rounded-lg border border-pink-400/20">
                <h3 className="font-bold text-pink-300 mb-2">Reinforcement Learning</h3>
                <p className="text-cyan-100/70 text-sm">Continuously improves ethical decision-making</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AegisEthical;
