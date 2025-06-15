
import React from "react";
import { ShieldCheck, Brain, Network, Gavel, Database, Globe2, Eye, Users } from "lucide-react";

const systems = [
  { icon: <ShieldCheck size={28} />, label: "Ethical Oversight" },
  { icon: <Brain size={28} />, label: "Neural Engine" },
  { icon: <Network size={28} />, label: "Mesh Network" },
  { icon: <Gavel size={28} />, label: "Governance" },
  { icon: <Database size={28} />, label: "zkMemory Core" },
  { icon: <Globe2 size={28} />, label: "Global Synthesis" },
  { icon: <Eye size={28} />, label: "Audit & Safeguard" },
  { icon: <Users size={28} />, label: "Community" },
];

const MasterControlPanel: React.FC = () => (
  <section className="max-w-6xl mx-auto my-20 px-3">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-9 text-gradient bg-gradient-to-br from-blue-400 to-pink-400 bg-clip-text text-transparent">
      Master Control Panel
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-background/70 rounded-3xl p-10 shadow-xl border-t-2 border-blue-600/10">
      {systems.map((s) => (
        <div key={s.label} className="flex flex-col gap-2 items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-900/40 to-pink-800/50 rounded-full flex items-center justify-center shadow-lg mb-2 hover-scale transition">
            {s.icon}
          </div>
          <span className="font-bold text-white text-base text-center">{s.label}</span>
        </div>
      ))}
    </div>
    <p className="mt-7 text-center text-muted-foreground text-base max-w-2xl mx-auto">
      Visual placeholder for master interface. Future: connect and orchestrate all system modules above.
    </p>
  </section>
);

export default MasterControlPanel;
