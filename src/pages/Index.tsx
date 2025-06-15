
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EcoComponentCard from "@/components/EcoComponentCard";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import MasterControlPanel from "@/components/MasterControlPanel";
import {
  ShieldCheck,
  Scale,
  Brain,
  Users,
  Database,
  Gavel,
  Eye,
  Globe2,
  Workflow
} from "lucide-react";

const ecoComponents = [
  {
    title: "AEGIS-Ω Ethical Framework",
    description:
      "A multi-layer neural network evaluates decisions in real time, powered by the MoralWeightCalculator & ConsequenceAnalyzer with reinforcement learning.",
    icon: <ShieldCheck className="text-cyan-400 glow-cyan"/>,
    accentColor: "hover:ring-cyan-400",
    id: "aegis",
  },
  {
    title: "SOLUS OS Core Architecture",
    description:
      "UnifiedConsciousnessInterface for evolving NLP and user co-creation, plus AdaptiveResourceManager for ethical resource distribution.",
    icon: <Brain className="text-purple-400 glow-purple"/>,
    accentColor: "hover:ring-purple-400",
    id: "solus",
  },
  {
    title: "Quantum Synapse Interface",
    description:
      "QuantumSynapseEngine models thoughts/subjective experience with advanced representation quantum algorithms.",
    icon: <Workflow className="text-pink-400 glow-pink"/>,
    accentColor: "hover:ring-pink-400",
    id: "qsi",
  },
  {
    title: "ASTRÆA Agent Mesh Network",
    description:
      "CivicOperativeAgents cooperate with consensus protocols to analyze impacts, overseen by EthicalOversightModule and BiasCorrectionEngine.",
    icon: <Users className="text-cyan-300 glow-cyan"/>,
    accentColor: "hover:ring-cyan-300",
    id: "astraea",
  },
  {
    title: "SYNTH3SIS Decentralized Governance",
    description:
      "Incentivized Proof-of-Impact Tokens and auditable governance smart contracts encourage transparent, ethical participation.",
    icon: <Gavel className="text-yellow-400"/>,
    accentColor: "hover:ring-yellow-400",
    id: "synth3sis",
  },
  {
    title: "Mythos Memory Core",
    description:
      "NarrativeMemoryEngine applies zero-knowledge proofs for secure, trustless memory—privacy and recall guaranteed.",
    icon: <Database className="text-cyan-400 glow-cyan"/>,
    accentColor: "hover:ring-cyan-400",
    id: "mythos",
  },
  {
    title: "Global Civic Synthesis Network",
    description:
      "CivicSynthesisOrchestrator and CulturalAdapters foster transnational relevance and responsible insight sharing.",
    icon: <Globe2 className="text-green-400"/>,
    accentColor: "hover:ring-green-400",
    id: "civicnetwork",
  },
  {
    title: "Ethical Safeguard Integration",
    description:
      "EthicalGuardian verifies critical actions; immutable zk-audit log ensures accountability.",
    icon: <Eye className="text-purple-300 glow-purple"/>,
    accentColor: "hover:ring-purple-300",
    id: "safeguard",
  },
  {
    title: "OR4CL3DevelopmentRoadmap",
    description:
      "Phased roadmap with transparent milestones, tracking all progress through the system.",
    icon: <Scale className="text-pink-500 glow-pink"/>,
    accentColor: "hover:ring-pink-500",
    id: "roadmapcard",
  },
];

const Index = () => (
  <div className="min-h-screen w-full bg-transparent flex flex-col relative overflow-x-hidden">
    <NavBar />
    <main className="flex-1 flex flex-col relative">
      <HeroSection />
      
      {/* Ecosystem grid */}
      <section id="powers" className="py-20 px-4 max-w-7xl mx-auto relative">
        {/* Background holographic elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-16 text-left md:text-center text-holographic drop-shadow-2xl relative z-10">
          OR4CL3 Ecosystem Modules
        </h2>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {ecoComponents.map((comp, index) => (
            <div key={comp.title} style={{animationDelay: `${index * 100}ms`}}>
              <EcoComponentCard {...comp} />
            </div>
          ))}
        </div>
      </section>
      
      <MasterControlPanel />
      <RoadmapTimeline />
    </main>
    
    <footer className="py-8 px-6 text-cyan-100/60 text-sm flex justify-between items-center backdrop-holographic border-t border-cyan-400/20 relative z-10">
      <span>
        &copy; {new Date().getFullYear()} OR4CL3&nbsp;AI Solutions. Crafted ethically, powered by quantum consciousness.
      </span>
      <span className="hidden sm:inline">
        Holographic interface designed for the future of AI.
      </span>
    </footer>
  </div>
);

export default Index;
