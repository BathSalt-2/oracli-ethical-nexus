
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const EthicalSafeguards: React.FC = () => {
  const navigate = useNavigate();

  const safeguardMetrics = [
    { label: 'Guardian Uptime', value: '99.99%', icon: Shield, color: 'text-green-400', status: 'optimal' },
    { label: 'Critical Actions Verified', value: '100%', icon: CheckCircle, color: 'text-cyan-400', status: 'optimal' },
    { label: 'Audit Log Integrity', value: '100%', icon: Eye, color: 'text-purple-400', status: 'optimal' },
    { label: 'Risk Assessments', value: '2,847', icon: AlertTriangle, color: 'text-yellow-400', status: 'active' },
  ];

  const recentAudits = [
    { id: 'AUD-001', action: 'Resource Allocation Decision', result: 'Verified', timestamp: '2 mins ago', risk: 'Low' },
    { id: 'AUD-002', action: 'Ethical Framework Update', result: 'Verified', timestamp: '5 mins ago', risk: 'Medium' },
    { id: 'AUD-003', action: 'Bias Correction Applied', result: 'Verified', timestamp: '8 mins ago', risk: 'Low' },
    { id: 'AUD-004', action: 'Consensus Protocol Change', result: 'Under Review', timestamp: '12 mins ago', risk: 'High' },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-purple-300/50 flex items-center justify-center glow-purple">
            <Eye className="w-12 h-12 text-purple-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            Ethical Safeguard Integration
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            EthicalGuardian verifies critical actions; immutable zk-audit log ensures accountability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safeguardMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="backdrop-holographic rounded-2xl p-6 border-holographic text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-2xl font-black text-holographic mb-2">{metric.value}</div>
              <div className="text-cyan-100/70 mb-2">{metric.label}</div>
              <div className={`px-2 py-1 rounded text-xs font-bold ${
                metric.status === 'optimal' ? 'bg-green-400/20 text-green-400' :
                metric.status === 'active' ? 'bg-yellow-400/20 text-yellow-400' :
                'bg-red-400/20 text-red-400'
              }`}>
                {metric.status.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              Ethical Guardian Status
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 font-bold">System Health</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-cyan-100/70 text-sm">All guardian modules operational</p>
              </div>
              
              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-300 font-bold">Verification Speed</span>
                  <span className="text-cyan-400 text-sm">0.12ms avg</span>
                </div>
                <p className="text-cyan-100/70 text-sm">Real-time critical action verification</p>
              </div>

              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-300 font-bold">Guardian Consensus</span>
                  <span className="text-purple-400 text-sm">100%</span>
                </div>
                <p className="text-cyan-100/70 text-sm">All guardian nodes in agreement</p>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-purple-400" />
              Immutable Audit Log
            </h2>
            <div className="space-y-3">
              {recentAudits.map((audit, index) => (
                <div
                  key={audit.id}
                  className="p-4 bg-purple-400/5 rounded-lg border border-purple-400/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-purple-300 text-sm">{audit.action}</h3>
                      <p className="text-cyan-100/70 text-xs">{audit.id} • {audit.timestamp}</p>
                    </div>
                    <div className="text-right">
                      <div className={`px-2 py-1 rounded text-xs font-bold ${
                        audit.result === 'Verified' ? 'bg-green-400/20 text-green-400' :
                        audit.result === 'Under Review' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-red-400/20 text-red-400'
                      }`}>
                        {audit.result}
                      </div>
                      <div className={`text-xs mt-1 ${
                        audit.risk === 'Low' ? 'text-green-400' :
                        audit.risk === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {audit.risk} Risk
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicalSafeguards;
