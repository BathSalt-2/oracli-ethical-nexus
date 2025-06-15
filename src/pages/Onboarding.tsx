
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-6 animate-fade-in">
      <div className="flex flex-col items-center mb-10">
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="OR4CL3 Logo"
          className="w-24 h-24 mb-4 rounded-full shadow-lg glow-cyan"
        />
        <h1 className="text-3xl md:text-4xl font-black text-holographic uppercase mb-2 text-center">
          Welcome to OR4CL3
        </h1>
        <p className="text-muted-foreground text-lg text-center max-w-md">
          The Ethical Nexus for Quantum Intelligence. Seamlessly merge intuitive controls with cutting-edge 3D interfaces and ethical AI.
        </p>
      </div>

      <ul className="w-full max-w-xs mb-8 space-y-3">
        <li className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          Holographic, interactive 3D dashboard
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
          Real-time, ethical system logic
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
          Mobile-first and blazing fast
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          Chat with the OR4CL3 AI core in-app
        </li>
      </ul>

      <Button
        className="w-full max-w-xs mb-3 bg-cyan-500 text-white text-lg font-bold animate-pulse-slow"
        size="lg"
        onClick={() => navigate("/dashboard")}
      >
        Start Exploring
      </Button>
      <Button
        variant="ghost"
        className="w-full max-w-xs text-cyan-300"
        onClick={() => navigate("/dashboard")}
      >
        Skip
      </Button>
    </div>
  );
};

export default Onboarding;
