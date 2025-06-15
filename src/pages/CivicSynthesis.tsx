
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe2, Users, TrendingUp, Network } from 'lucide-react';

const CivicSynthesis: React.FC = () => {
  const navigate = useNavigate();

  const globalMetrics = [
    { label: 'Global Connections', value: '127K', icon: Globe2, color: 'text-green-400' },
    { label: 'Cultural Adapters', value: '47', icon: Users, color: 'text-cyan-400' },
    { label: 'Synthesis Rate', value: '94.7%', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Cross-Border Insights', value: '2.3K', icon: Network, color: 'text-pink-400' },
  ];

  const regions = [
    { name: 'North America', connections: 34567, status: 'Active', adapter: 'NA-12' },
    { name: 'Europe', connections: 28943, status: 'Active', adapter: 'EU-08' },
    { name: 'Asia Pacific', connections: 41256, status: 'Active', adapter: 'AP-15' },
    { name: 'Latin America', connections: 18734, status: 'Expanding', adapter: 'LA-06' },
    { name: 'Africa', connections: 15892, status: 'Growing', adapter: 'AF-04' },
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-holographic border border-green-400/50 flex items-center justify-center">
            <Globe2 className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-holographic mb-4">
            Global Civic Synthesis Network
          </h1>
          <p className="text-cyan-100/70 text-lg max-w-2xl mx-auto">
            CivicSynthesisOrchestrator and CulturalAdapters foster transnational relevance and responsible insight sharing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {globalMetrics.map((metric, index) => (
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

        <div className="backdrop-holographic rounded-2xl p-8 border-holographic mb-8">
          <h2 className="text-2xl font-black text-holographic mb-6">Regional Network Status</h2>
          <div className="space-y-4">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="p-6 bg-green-400/5 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Globe2 className="w-6 h-6 text-green-400" />
                    <div>
                      <h3 className="font-bold text-green-300">{region.name}</h3>
                      <p className="text-cyan-100/70 text-sm">Adapter: {region.adapter}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-holographic">{region.connections.toLocaleString()}</div>
                    <div className={`text-xs font-bold ${
                      region.status === 'Active' ? 'text-green-400' :
                      region.status === 'Expanding' ? 'text-yellow-400' :
                      'text-cyan-400'
                    }`}>
                      {region.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Cultural Adaptation</h2>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                <h3 className="font-bold text-cyan-300 mb-2">Language Processing</h3>
                <div className="text-lg font-black text-holographic">47 Languages</div>
                <p className="text-cyan-100/70 text-sm">Real-time translation and cultural context</p>
              </div>
              
              <div className="p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <h3 className="font-bold text-purple-300 mb-2">Cultural Sensitivity</h3>
                <div className="text-lg font-black text-holographic">96.8%</div>
                <p className="text-cyan-100/70 text-sm">Contextual awareness score</p>
              </div>

              <div className="p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <h3 className="font-bold text-green-300 mb-2">Cross-Cultural Insights</h3>
                <div className="text-lg font-black text-holographic">2,347</div>
                <p className="text-cyan-100/70 text-sm">Shared insights this week</p>
              </div>
            </div>
          </div>

          <div className="backdrop-holographic rounded-2xl p-8 border-holographic">
            <h2 className="text-2xl font-black text-holographic mb-6">Synthesis Orchestrator</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Global Harmony Index</span>
                <span className="text-green-400 font-bold">94.7%</span>
              </div>
              <div className="w-full bg-green-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full w-[95%]"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Insight Relevance</span>
                <span className="text-purple-400 font-bold">92.3%</span>
              </div>
              <div className="w-full bg-purple-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-[92%]"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-cyan-100">Network Efficiency</span>
                <span className="text-cyan-400 font-bold">97.1%</span>
              </div>
              <div className="w-full bg-cyan-900/30 rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-3 rounded-full w-[97%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivicSynthesis;
