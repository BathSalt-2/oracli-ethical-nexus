
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Settings from "./pages/Settings";
import SystemCommand from "./pages/SystemCommand";
import AegisEthical from "./pages/AegisEthical";
import SolusCore from "./pages/SolusCore";
import QuantumSynapse from "./pages/QuantumSynapse";
import AstraeaNetwork from "./pages/AstraeaNetwork";
import SynthesisGovernance from "./pages/SynthesisGovernance";
import MythosMemory from "./pages/MythosMemory";
import CivicSynthesis from "./pages/CivicSynthesis";
import EthicalSafeguards from "./pages/EthicalSafeguards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/system-command" element={<SystemCommand />} />
          <Route path="/aegis" element={<AegisEthical />} />
          <Route path="/solus" element={<SolusCore />} />
          <Route path="/quantum-synapse" element={<QuantumSynapse />} />
          <Route path="/astraea" element={<AstraeaNetwork />} />
          <Route path="/synthesis" element={<SynthesisGovernance />} />
          <Route path="/mythos" element={<MythosMemory />} />
          <Route path="/civic-synthesis" element={<CivicSynthesis />} />
          <Route path="/safeguards" element={<EthicalSafeguards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
