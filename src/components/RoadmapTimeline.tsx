
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
  <section id="roadmap" className="py-16 px-3 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gradient bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">Development Roadmap</h2>
    <ol className="relative border-l-4 border-blue-500/40 ml-4">
      {milestones.map((m, i) => (
        <li key={m.phase} className="mb-16 ml-6 relative animate-fade-in delay-75">
          <span className="absolute -left-[2.18rem] flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-purple-800 via-blue-400 to-pink-500 rounded-full ring-4 ring-background text-white font-bold text-lg shadow">{i+1}</span>
          <div className="flex flex-col gap-1">
            <span className="uppercase text-xs tracking-wide font-bold text-blue-400">{m.phase}</span>
            <span className="text-xl font-bold text-white">{m.title}</span>
            <span className="text-base text-muted-foreground">{m.detail}</span>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default RoadmapTimeline;
