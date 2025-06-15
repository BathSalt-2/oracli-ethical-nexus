
import React from "react";
import { ShieldCheck, Brain, Network, Gavel, Database, Globe2, Eye, Users } from "lucide-react";

const systems = [
  { icon: <ShieldCheck size={32} />, label: "Ethical Oversight" },
  { icon: <Brain size={32} />, label: "Neural Engine" },
  { icon: <Network size={32} />, label: "Mesh Network" },
  { icon: <Gavel size={32} />, label: "Governance" },
  { icon: <Database size={32} />, label: "zkMemory Core" },
  { icon: <Globe2 size={32} />, label: "Global Synthesis" },
  { icon: <Eye size={32} />, label: "Audit & Safeguard" },
  { icon: <Users size={32} />, label: "Community" },
];

const MasterControlPanel: React.FC = () => (
  <section className="max-w-6xl mx-auto my-24 px-4 relative">
    {/* Background holographic elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <h2 className="text-center text-4xl md:text-5xl font-black mb-12 text-holographic drop-shadow-2xl relative z-10">
      Master Control Panel
    </h2>
    
    <div className="relative backdrop-holographic rounded-3xl p-12 shadow-2xl border-holographic glow-cyan overflow-hidden animate-float-3d">
      {/* Holographic scan lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {systems.map((s, index) => (
          <div key={s.label} className="flex flex-col gap-3 items-center group perspective-1000" style={{animationDelay: `${index * 100}ms`}}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 backdrop-holographic rounded-full flex items-center justify-center shadow-2xl mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-cyan-400/30 group-hover:border-cyan-400/70 text-cyan-300 group-hover:text-cyan-100 glow-cyan relative z-10">
                {s.icon}
              </div>
            </div>
            
            <span className="font-black text-cyan-100 text-base text-center group-hover:text-holographic transition-colors duration-300 transform group-hover:scale-105">
              {s.label}
            </span>
            
            {/* Status indicators */}
            <div className="flex gap-1 mt-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Holographic grid overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
      </div>
    </div>
    
    <p className="mt-8 text-center text-cyan-100/70 text-lg max-w-3xl mx-auto leading-relaxed backdrop-blur-sm">
      Visual interface for quantum-classical orchestration. Future: Real-time system monitoring and holographic command interface.
    </p>
  </section>
);

export default MasterControlPanel;
