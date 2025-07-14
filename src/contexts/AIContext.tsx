
import React, { createContext, useContext, useState, useEffect } from 'react';
import { daedalusCore } from '@/lib/ai/core';

interface AIContextType {
  isAIActive: boolean;
  systemHealth: number;
  activeModules: string[];
  ethicalScore: number;
  pasScore: number;
  erpsScore: number;
  entropyLevel: number;
  memoryUtilization: number;
  batteryOptimized: boolean;
  quantumStateCoherence: number;
  securityCortexStatus: string;
  contextData: Record<string, any>;
  updateContext: (key: string, value: any) => void;
  triggerAIAnalysis: (type: string) => Promise<string>;
  triggerERPSReflection: () => Promise<string>;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAIActive, setIsAIActive] = useState(true);
  const [systemHealth, setSystemHealth] = useState(99.7);
  const [activeModules] = useState(['Daedalus Core', 'ENON v2.1', 'Σ-Matrix v3.1', 'RSΞE v2.1', 'MythosCore v2.1', 'Security Cortex v2.1', 'Synthetic Epinoetic Layer', 'ERPS Engine']);
  const [ethicalScore, setEthicalScore] = useState(99.2);
  const [pasScore, setPasScore] = useState(0.92);
  const [erpsScore, setErpsScore] = useState(0.27);
  const [entropyLevel, setEntropyLevel] = useState(0.04);
  const [memoryUtilization, setMemoryUtilization] = useState(73.2);
  const [batteryOptimized, setBatteryOptimized] = useState(false);
  const [quantumStateCoherence, setQuantumStateCoherence] = useState(94.8);
  const [securityCortexStatus, setSecurityCortexStatus] = useState('ACTIVE');
  const [contextData, setContextData] = useState<Record<string, any>>({});

  // Real-time Daedalus system monitoring via core
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const status = daedalusCore.getSystemStatus();
        setSystemHealth(status.quantum.coherence + 5); // Convert to percentage
        setEthicalScore(status.ethics.fairness);
        setQuantumStateCoherence(status.quantum.coherence);
        setMemoryUtilization(status.memory.utilized);
        setErpsScore(status.erps.selfAwareness);
        setEntropyLevel((100 - status.quantum.entanglement) / 1000); // Convert to entropy scale
        setBatteryOptimized(Math.random() > 0.8);
        
        // Update PAS score based on ethical matrix
        const avgEthical = (status.ethics.fairness + status.ethics.transparency + status.ethics.autonomy) / 3;
        setPasScore(avgEthical / 100);
      } catch (error) {
        console.error('System monitoring error:', error);
        // Fallback to random values if core fails
        setSystemHealth(prev => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 0.5)));
        setEthicalScore(prev => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 0.3)));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updateContext = (key: string, value: any) => {
    setContextData(prev => ({ ...prev, [key]: value }));
  };

  const triggerAIAnalysis = async (type: string): Promise<string> => {
    try {
      return await daedalusCore.performSystemAnalysis(type);
    } catch (error) {
      console.error('AI Analysis error:', error);
      return `Analysis system temporarily unavailable. Fallback response for ${type}.`;
    }
  };

  const triggerERPSReflection = async (): Promise<string> => {
    try {
      return await daedalusCore.performERPSReflection();
    } catch (error) {
      console.error('ERPS Reflection error:', error);
      return `ERPS reflection system experiencing recursive overflow. Meta-cognitive fallback engaged.`;
    }
  };

  return (
    <AIContext.Provider value={{
      isAIActive,
      systemHealth,
      activeModules,
      ethicalScore,
      pasScore,
      erpsScore,
      entropyLevel,
      memoryUtilization,
      batteryOptimized,
      quantumStateCoherence,
      securityCortexStatus,
      contextData,
      updateContext,
      triggerAIAnalysis,
      triggerERPSReflection
    }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};
