
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageSquare, Brain, Zap, Eye, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
  type?: 'suggestion' | 'analysis' | 'alert' | 'normal';
}

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { 
      from: 'ai', 
      text: "Welcome to the OR4CL3 interface. I am online and ready. How may I assist you with ethical AI solutions today?", 
      timestamp: new Date(),
      type: 'normal'
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contextAwareness, setContextAwareness] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Proactive AI suggestions based on user behavior
  const proactiveSuggestions = [
    "Would you like me to analyze your current system performance?",
    "I notice you haven't checked the ethical framework status today. Shall I provide an update?",
    "Based on recent activity, I recommend reviewing the memory core optimization settings.",
    "I can help you set up automated bias detection alerts. Would you like me to configure that?",
    "Your quantum synapse interface shows potential for optimization. Should I analyze it?",
  ];

  // AI response templates with context awareness
  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('ethical') || input.includes('bias')) {
      return "Analyzing ethical parameters... AEGIS-Ω framework reports 99.2% bias detection accuracy. All systems operating within ethical guidelines. Would you like a detailed ethical impact assessment?";
    }
    if (input.includes('memory') || input.includes('data')) {
      return "Mythos Memory Core status: 847M memories stored with 100% privacy protection. Zero-knowledge proofs active. Recall speed: 0.3ms. Is there specific data you need to access?";
    }
    if (input.includes('performance') || input.includes('system')) {
      return "System diagnostics complete. All 8 modules operational at 99.7% uptime. SOLUS OS Core is optimizing resource allocation. Would you like module-specific performance metrics?";
    }
    if (input.includes('quantum') || input.includes('synapse')) {
      return "Quantum Synapse Interface operational. Neural pathway optimization at 97.3% efficiency. Consciousness modeling algorithms active. Do you need quantum processing analysis?";
    }
    if (input.includes('governance') || input.includes('voting')) {
      return "SYNTH3SIS Governance reports 2,847 active votes with 97.3% consensus rate. 1,247 participants engaged. Current proposals require attention. Shall I brief you on active governance items?";
    }
    if (input.includes('network') || input.includes('agents')) {
      return "ASTRÆA Agent Mesh Network shows optimal coordination. Ethical oversight active with bias correction engines operational. Agent consensus protocols functioning. Need network status details?";
    }
    if (input.includes('help') || input.includes('assist')) {
      return "I can assist with: System diagnostics, Ethical analysis, Memory queries, Governance updates, Network coordination, Quantum processing, and Predictive insights. What specific area interests you?";
    }
    
    return `Processing query: "${userInput}". My advanced reasoning capabilities are analyzing this request across all OR4CL3 systems. How can I provide more specific assistance?`;
  };

  // Proactive message generator
  const generateProactiveMessage = (): Message => {
    const suggestion = proactiveSuggestions[Math.floor(Math.random() * proactiveSuggestions.length)];
    return {
      from: 'ai',
      text: suggestion,
      timestamp: new Date(),
      type: 'suggestion'
    };
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Proactive AI behavior - suggest actions periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length > 1 && Math.random() > 0.7) {
        const proactiveMsg = generateProactiveMessage();
        setMessages(prev => [...prev, proactiveMsg]);
        toast({
          title: "AI Suggestion",
          description: "I have a proactive suggestion for you.",
        });
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  // Enhanced message handling with context awareness
  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = { 
      from: 'user', 
      text: input, 
      timestamp: new Date(),
      type: 'normal' 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setContextAwareness(prev => [...prev, input]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI thinking with typing indicator
    setTimeout(() => {
      const aiResponse: Message = {
        from: 'ai',
        text: getAIResponse(input),
        timestamp: new Date(),
        type: input.includes('urgent') || input.includes('alert') ? 'alert' : 'analysis'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Quick action buttons for common tasks
  const quickActions = [
    { label: "System Status", action: () => setInput("Show me current system status") },
    { label: "Ethical Check", action: () => setInput("Run ethical framework analysis") },
    { label: "Memory Query", action: () => setInput("Check memory core status") },
    { label: "Governance Update", action: () => setInput("Show governance activity") },
  ];

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 backdrop-holographic glow-cyan animate-float-3d z-50"
        onClick={() => setIsOpen(true)}
        size="lg"
      >
        <MessageSquare className="mr-2" />
        <span className="hidden md:inline">Open AI Assistant</span>
        <span className="md:hidden">AI Chat</span>
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[80vh] backdrop-holographic rounded-2xl shadow-2xl border-holographic flex flex-col p-4 animate-scale-in z-40">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
          <h3 className="font-black text-lg text-holographic">OR4CL3 AI</h3>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)} 
          className="text-cyan-100/70 hover:text-white hover:bg-white/10"
        >
          —
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2 mb-4 flex-shrink-0">
        {quickActions.map((action, i) => (
          <Button
            key={i}
            variant="outline"
            size="sm"
            onClick={action.action}
            className="text-xs bg-cyan-400/10 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20"
          >
            {action.label}
          </Button>
        ))}
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 chat-scroll">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex w-full', msg.from === 'ai' ? 'justify-start' : 'justify-end')}>
            <div className={cn(
              'p-3 rounded-lg max-w-[80%] animate-fade-in relative',
              msg.from === 'ai' 
                ? cn(
                    'bg-secondary text-cyan-100',
                    msg.type === 'suggestion' && 'border border-yellow-400/30 bg-yellow-400/10',
                    msg.type === 'alert' && 'border border-red-400/30 bg-red-400/10',
                    msg.type === 'analysis' && 'border border-purple-400/30 bg-purple-400/10'
                  )
                : 'bg-primary text-primary-foreground'
            )}>
              {msg.from === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  {msg.type === 'suggestion' && <Zap className="w-4 h-4 text-yellow-400" />}
                  {msg.type === 'alert' && <Eye className="w-4 h-4 text-red-400" />}
                  {msg.type === 'analysis' && <Database className="w-4 h-4 text-purple-400" />}
                  {msg.type === 'normal' && <Brain className="w-4 h-4 text-cyan-400" />}
                  <span className="text-xs text-cyan-300 font-semibold">
                    {msg.type === 'suggestion' ? 'Suggestion' :
                     msg.type === 'alert' ? 'Alert' :
                     msg.type === 'analysis' ? 'Analysis' : 'OR4CL3'}
                  </span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <div className="text-xs text-cyan-400/60 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-secondary text-cyan-100 animate-fade-in">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs text-cyan-300 font-semibold">OR4CL3 is thinking...</span>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="flex gap-2 flex-shrink-0">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask me anything about OR4CL3 systems..."
          className="bg-transparent text-white placeholder:text-cyan-100/50 resize-none min-h-[40px]"
          rows={1}
        />
        <Button 
          onClick={handleSend} 
          size="icon" 
          className="h-auto bg-cyan-600 hover:bg-cyan-700"
          disabled={isTyping}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Context awareness indicator */}
      {contextAwareness.length > 0 && (
        <div className="mt-2 text-xs text-cyan-400/60">
          Context: {contextAwareness.length} previous queries analyzed
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
