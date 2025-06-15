
import React from "react";

const milestones = [
  {
    phase: "PHASE 1",
    title: "Ethical Framework + AI Core",
    detail: "Develop AEGIS-Ω and SOLUS OS prototypes. Launch initial Master Control Panel.",
  },
  {
    phase: "PHASE 2",
    title: "Quantum Synapse & Agent Mesh",
    detail: "Integrate QuantumSynapseEngine and Astræa agent mesh with auditing & memory foundations.",
  },
  {
    phase: "PHASE 3",
    title: "Governance + Decentralized Token",
    detail: "Deploy SYNTH3SIS Proof-of-Impact token, decentralized community ops.",
  },
  {
    phase: "PHASE 4",
    title: "Global Synthesis & Safeguards",
    detail: "Enable global insights, EthicalGuardian, full audit/zk-proof memory.",
  },
  {
    phase: "PHASE 5",
    title: "Open-Source, Multicultural Expansion",
    detail: "Release APIs, enable public contribution, broad cultural integration.",
  },
]

const RoadmapTimeline: React.FC = () => (
  <section id="roadmap" className="py-20 px-4 max-w-6xl mx-auto relative">
    {/* Background holographic elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-holographic drop-shadow-2xl">
      Development Roadmap
    </h2>
    
    <div className="relative">
      {/* Holographic timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-60 blur-sm"></div>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
      
      <ol className="relative ml-12">
        {milestones.map((m, i) => (
          <li key={m.phase} className="mb-20 relative group animate-float-3d" style={{animationDelay: `${i * 200}ms`}}>
            {/* Holographic node */}
            <div className="absolute -left-[3.75rem] flex items-center justify-center w-12 h-12 backdrop-holographic rounded-full border-2 border-cyan-400/50 text-cyan-100 font-black text-lg shadow-2xl group-hover:border-cyan-400 group-hover:glow-cyan transition-all duration-500 group-hover:scale-110">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">{i+1}</span>
            </div>
            
            <div className="backdrop-holographic rounded-2xl p-8 ml-4 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 border-holographic group-hover:glow-cyan overflow-hidden relative">
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col gap-2 relative z-10">
                <span className="uppercase text-sm tracking-wider font-black text-cyan-400 group-hover:text-holographic transition-colors duration-300">
                  {m.phase}
                </span>
                <span className="text-2xl font-black text-cyan-100 group-hover:text-holographic transition-colors duration-300 mb-2">
                  {m.title}
                </span>
                <span className="text-lg text-cyan-100/80 leading-relaxed">
                  {m.detail}
                </span>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400/50 group-hover:border-purple-400 transition-colors duration-300"></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default RoadmapTimeline;
