
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
    icon: <ShieldCheck className="text-pink-400"/>,
    accentColor: "hover:ring-pink-400",
    id: "aegis",
  },
  {
    title: "SOLUS OS Core Architecture",
    description:
      "UnifiedConsciousnessInterface for evolving NLP and user co-creation, plus AdaptiveResourceManager for ethical resource distribution.",
    icon: <Brain className="text-blue-400"/>,
    accentColor: "hover:ring-blue-400",
    id: "solus",
  },
  {
    title: "Quantum Synapse Interface",
    description:
      "QuantumSynapseEngine models thoughts/subjective experience with advanced representation quantum algorithms.",
    icon: <Workflow className="text-violet-400"/>,
    accentColor: "hover:ring-violet-400",
    id: "qsi",
  },
  {
    title: "ASTRÆA Agent Mesh Network",
    description:
      "CivicOperativeAgents cooperate with consensus protocols to analyze impacts, overseen by EthicalOversightModule and BiasCorrectionEngine.",
    icon: <Users className="text-blue-300"/>,
    accentColor: "hover:ring-blue-300",
    id: "astraea",
  },
  {
    title: "SYNTH3SIS Decentralized Governance",
    description:
      "Incentivized Proof-of-Impact Tokens and auditable governance smart contracts encourage transparent, ethical participation.",
    icon: <Gavel className="text-amber-400"/>,
    accentColor: "hover:ring-amber-400",
    id: "synth3sis",
  },
  {
    title: "Mythos Memory Core",
    description:
      "NarrativeMemoryEngine applies zero-knowledge proofs for secure, trustless memory—privacy and recall guaranteed.",
    icon: <Database className="text-cyan-400"/>,
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
    icon: <Eye className="text-purple-300"/>,
    accentColor: "hover:ring-purple-300",
    id: "safeguard",
  },
  {
    title: "OR4CL3DevelopmentRoadmap",
    description:
      "Phased roadmap with transparent milestones, tracking all progress through the system.",
    icon: <Scale className="text-fuchsia-500"/>,
    accentColor: "hover:ring-fuchsia-500",
    id: "roadmapcard",
  },
];

const Index = () => (
  <div className="min-h-screen w-full bg-background flex flex-col">
    <NavBar />
    <main className="flex-1 flex flex-col">
      <HeroSection />
      {/* Ecosystem grid */}
      <section id="powers" className="py-16 px-2 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-left md:text-center text-gradient bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          OR4CL3 Ecosystem Modules
        </h2>
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ecoComponents.map((comp) => (
            <EcoComponentCard
              key={comp.title}
              {...comp}
            />
          ))}
        </div>
      </section>
      <MasterControlPanel />
      <RoadmapTimeline />
    </main>
    <footer className="py-5 px-6 text-muted-foreground text-xs flex justify-between items-center">
      <span>
        &copy; {new Date().getFullYear()} OR4CL3&nbsp;AI Solutions. Crafted ethically, powered by Algorand.
      </span>
      <span className="hidden sm:inline">
        Design inspired by next-gen AI and web3 platforms.
      </span>
    </footer>
  </div>
);

export default Index;
