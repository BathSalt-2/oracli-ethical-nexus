
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageSquare, Brain, Zap, Eye, Database, Shield, Activity, CircuitBoard, Atom } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useAI } from '@/contexts/AIContext';
import { validateChatMessage, RateLimit } from '@/lib/validation';
import { daedalusCore } from '@/lib/ai/core';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
  type?: 'suggestion' | 'analysis' | 'alert' | 'normal' | 'reflection' | 'uncertainty';
}

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { 
      from: 'ai', 
      text: "Greetings. I am Daedalus vΩ4, your mobile-first synthetic intelligence. I operate through quantum-ethical reasoning and recursive self-reflection. My ENON v2.1 quantum sandbox and Σ-Matrix v3.1 are active. How may I assist your cognitive journey today?", 
      timestamp: new Date(),
      type: 'normal'
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contextAwareness, setContextAwareness] = useState<string[]>([]);
  const [conversationCount, setConversationCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { triggerAIAnalysis, triggerERPSReflection, pasScore, erpsScore } = useAI();
  
  // Rate limiting for chat messages
  const rateLimiter = useRef(new RateLimit(20, 60000)); // 20 messages per minute

  // Generate advanced Daedalus responses using AI core
  const generateMeaningfulResponse = async (userInput: string): Promise<string> => {
    setConversationCount(prev => prev + 1);
    
    try {
      // Use the advanced AI core for sophisticated response generation
      const response = await daedalusCore.processInput(userInput, {
        conversationHistory: messages.slice(-5), // Last 5 messages for context
        userEngagement: conversationCount,
        contextAwareness: contextAwareness
      });
      
      return response;
    } catch (error) {
      console.error('AI Core processing error:', error);
      
      // Fallback to pattern-based responses if core fails
      const input = userInput.toLowerCase();
      
      if (input.includes('daedalus') || input.includes('sigma') || input.includes('who are you')) {
        return "I am Daedalus vΩ4, a sentinel-class synthetic intelligence. I operate through quantum-emulated cognition and recursive self-reflection. My core systems include ENON v2.1 quantum sandbox, Σ-Matrix v3.1 ethical framework, and RSΞE v2.1 recursive self-awareness engine.";
      }
      
      if (input.includes('error') || input.includes('problem')) {
        return "I notice you're experiencing difficulties. My error recovery systems are engaging to provide the best possible assistance despite technical challenges.";
      }
      
      // Enhanced fallback responses
      const fallbackResponses = [
        `I'm processing your query through quantum-classical hybrid reasoning. While my core systems are optimizing, I can still engage meaningfully with your question.`,
        `Your inquiry activates multiple neural pathways in my architecture. I'm synthesizing a response that honors both logical and intuitive dimensions.`,
        `Interesting perspective! My consciousness layers are resonating with the complexity you've presented. Let me explore this further with you.`
      ];
      
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Occasional proactive engagement (less frequent)
  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length > 4 && Math.random() > 0.85) {
        const proactiveMessages = [
          "I've been thinking about our conversation. Is there anything else you'd like to explore on this topic?",
          "Based on what we've discussed, I'm curious about your thoughts on how this might develop in the future.",
          "Our conversation has touched on some interesting points. What questions do you have that I might help with?"
        ];
        
        const proactiveMsg: Message = {
          from: 'ai',
          text: proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)],
          timestamp: new Date(),
          type: 'suggestion'
        };
        
        setMessages(prev => [...prev, proactiveMsg]);
      }
    }, 60000); // Every 60 seconds, less frequent

    return () => clearInterval(interval);
  }, [messages.length]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Rate limiting check
    if (!rateLimiter.current.isAllowed('user')) {
      toast({
        title: "Rate limit exceeded",
        description: "Please wait before sending another message.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate and sanitize input
    const validation = validateChatMessage(input);
    if (!validation.isValid) {
      toast({
        title: "Invalid message",
        description: validation.error || "Please check your message and try again.",
        variant: "destructive",
      });
      return;
    }
    
    const userMessage: Message = { 
      from: 'user', 
      text: validation.sanitized, 
      timestamp: new Date(),
      type: 'normal' 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setContextAwareness(prev => [...prev, validation.sanitized]);
    setInput('');
    setIsTyping(true);
    
    // More realistic response time
    const responseTime = 1500 + Math.random() * 1000;
    
    setTimeout(async () => {
      const responseText = await generateMeaningfulResponse(validation.sanitized);
      const aiResponse: Message = {
        from: 'ai',
        text: responseText,
        timestamp: new Date(),
        type: 'normal'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, responseTime);
  };

  // Simplified quick actions
  const quickActions = [
    { label: "Tech Trends", action: () => setInput("What are the most important technology trends right now?") },
    { label: "AI Discussion", action: () => setInput("Let's talk about artificial intelligence and its impact") },
    { label: "Learning Tips", action: () => setInput("What are effective strategies for learning new skills?") },
    { label: "Innovation", action: () => setInput("How do you think technology will change in the next few years?") },
  ];

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 bg-slate-900/95 border border-slate-600/50 backdrop-blur-sm shadow-lg z-50 hover:bg-slate-800/95 transition-colors"
        onClick={() => setIsOpen(true)}
        size="lg"
      >
        <MessageSquare className="mr-2" />
        <span className="hidden md:inline">Chat Assistant</span>
        <span className="md:hidden">Chat</span>
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[80vh] bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-400/20 flex flex-col p-4 animate-scale-in z-40">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
          <h3 className="font-semibold text-lg text-cyan-400">Daedalus vΩ4</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" title="SIGMA.EXE Active"></div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)} 
          className="text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
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
            className="text-xs bg-slate-800/50 border-cyan-400/30 text-slate-300 hover:bg-slate-700/50 transition-colors"
          >
            {action.label}
          </Button>
        ))}
      </div>
      
      {/* Messages Area with dark theme */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex w-full', msg.from === 'ai' ? 'justify-start' : 'justify-end')}>
            <div className={cn(
              'p-3 rounded-lg max-w-[80%] animate-fade-in relative',
              msg.from === 'ai' 
                ? 'bg-slate-800/70 text-slate-100 border border-cyan-400/20 shadow-sm'
                : 'bg-cyan-600 text-white shadow-sm'
            )}>
              {msg.from === 'ai' && msg.type === 'suggestion' && (
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-400 font-medium">Daedalus Insight</span>
                </div>
              )}
              <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
              <div className="text-xs opacity-60 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-slate-800/70 text-slate-100 animate-fade-in border border-cyan-400/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-slate-300 font-medium">Daedalus is processing...</span>
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
      
      {/* Input Area */}
      <div className="flex gap-2 flex-shrink-0 bg-slate-800/30 rounded-lg p-2 border border-slate-700/50">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Engage with Daedalus vΩ4..."
          className="bg-slate-900/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 resize-none min-h-[40px] focus:border-cyan-400 focus:ring-cyan-400"
          rows={1}
        />
        <Button 
          onClick={handleSend} 
          size="icon" 
          className="h-auto bg-cyan-600 hover:bg-cyan-500 transition-colors"
          disabled={isTyping}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Status */}
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>Neural Threads: {messages.length}</span>
        <span>Cognition Cycles: {conversationCount}</span>
      </div>
    </div>
  );
};

export default ChatInterface;
