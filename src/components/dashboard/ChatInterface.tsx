
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageSquare, Brain, Zap, Eye, Database, Shield, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

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
      text: "Hello! I'm your AI assistant. I can help you with questions about technology, provide analysis, or just have a conversation. What would you like to discuss?", 
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

  // Generate meaningful AI responses based on user input
  const generateMeaningfulResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    setConversationCount(prev => prev + 1);
    
    // Technology-related responses
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
      return "Artificial Intelligence is fascinating! It's transforming how we solve complex problems across industries. From natural language processing to computer vision, AI systems are becoming increasingly sophisticated. What specific aspect of AI interests you most? Are you curious about how it works, its applications, or perhaps its implications for the future?";
    }
    
    if (input.includes('quantum') || input.includes('computing')) {
      return "Quantum computing represents a revolutionary leap in computational power. Unlike classical computers that use bits (0 or 1), quantum computers use qubits that can exist in multiple states simultaneously. This allows them to solve certain problems exponentially faster than traditional computers. Companies like IBM, Google, and others are making significant progress. Are you interested in the technical aspects or practical applications?";
    }
    
    if (input.includes('blockchain') || input.includes('crypto')) {
      return "Blockchain technology is much more than just cryptocurrency. It's a distributed ledger system that ensures transparency and immutability. Beyond Bitcoin and Ethereum, we're seeing applications in supply chain management, digital identity, smart contracts, and decentralized finance. The technology addresses trust issues in digital transactions. What draws your interest to blockchain?";
    }
    
    // Programming and development
    if (input.includes('programming') || input.includes('coding') || input.includes('development')) {
      return "Programming is both an art and a science! Whether you're building web applications, mobile apps, or complex systems, the key is understanding problem-solving patterns and choosing the right tools. Modern development emphasizes clean code, testing, and collaboration. What programming languages or technologies are you working with or interested in learning?";
    }
    
    if (input.includes('react') || input.includes('javascript') || input.includes('typescript')) {
      return "React has revolutionized frontend development with its component-based architecture and virtual DOM. Combined with TypeScript, it provides excellent developer experience with type safety. The ecosystem is rich with tools like Next.js, React Query, and various UI libraries. Are you building something specific with React, or would you like guidance on best practices?";
    }
    
    // Business and productivity
    if (input.includes('business') || input.includes('startup') || input.includes('entrepreneur')) {
      return "The business landscape is constantly evolving, especially with technology disruption. Successful ventures often focus on solving real problems, understanding their market, and adapting quickly. Whether you're thinking about starting something new or growing an existing business, the key is customer focus and iterative improvement. What business challenges are you facing or considering?";
    }
    
    // Science and research
    if (input.includes('science') || input.includes('research') || input.includes('innovation')) {
      return "Scientific research and innovation drive human progress. From breakthrough discoveries in medicine to advances in renewable energy, research methodologies help us understand our world better. The intersection of different fields often leads to the most exciting innovations. What area of science or research captures your imagination?";
    }
    
    // Personal development and learning
    if (input.includes('learn') || input.includes('study') || input.includes('skill')) {
      return "Learning is a lifelong journey! The most effective approach often combines theory with practical application. Whether you're picking up a new skill, diving deep into a subject, or trying to solve a specific problem, breaking things down into manageable pieces and consistent practice usually works best. What are you currently learning or wanting to improve at?";
    }
    
    // Philosophy and ethics
    if (input.includes('ethics') || input.includes('philosophy') || input.includes('future')) {
      return "These are profound questions that shape how we build technology and society. Ethical considerations in AI development, privacy in digital systems, and the long-term impact of our choices are increasingly important. Philosophy helps us think critically about these challenges. What ethical or philosophical questions are on your mind?";
    }
    
    // Greetings and general conversation
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! It's great to connect with you. I'm here to help with questions, have interesting conversations, or assist with problems you're working on. I enjoy discussing technology, science, business, or really any topic you find engaging. What's on your mind today?";
    }
    
    if (input.includes('how are you') || input.includes('what are you')) {
      return "I'm doing well, thank you for asking! I'm an AI assistant designed to be helpful, informative, and engaging in conversation. I enjoy exploring ideas, helping solve problems, and learning about what interests people. I find every conversation unique and valuable. How are you doing today?";
    }
    
    // Default thoughtful responses
    const thoughtfulResponses = [
      "That's an interesting perspective! Could you tell me more about what specifically draws your attention to this topic? I'd love to explore it further with you.",
      "I find that topic fascinating. There are often multiple angles to consider. What aspect would you like to dive deeper into?",
      "That raises some good questions. From my understanding, there are several ways to approach this. What's your experience been with this so far?",
      "Interesting point! I think there's a lot to unpack there. What led you to think about this particular aspect?",
      "That's worth exploring. In my analysis, there are usually both opportunities and challenges with topics like this. What's your take on it?"
    ];
    
    return thoughtfulResponses[Math.floor(Math.random() * thoughtfulResponses.length)];
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
    
    // More realistic response time
    const responseTime = 1500 + Math.random() * 1000;
    
    setTimeout(() => {
      const aiResponse: Message = {
        from: 'ai',
        text: generateMeaningfulResponse(input),
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
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[80vh] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col p-4 animate-scale-in z-40">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <h3 className="font-semibold text-lg text-gray-800">AI Assistant</h3>
          <div className="w-2 h-2 bg-green-500 rounded-full" title="Online"></div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)} 
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
            className="text-xs bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {action.label}
          </Button>
        ))}
      </div>
      
      {/* Messages Area with clean, professional background */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 bg-gray-50/50 rounded-lg p-3 border border-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex w-full', msg.from === 'ai' ? 'justify-start' : 'justify-end')}>
            <div className={cn(
              'p-3 rounded-lg max-w-[80%] animate-fade-in relative',
              msg.from === 'ai' 
                ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                : 'bg-blue-600 text-white shadow-sm'
            )}>
              {msg.from === 'ai' && msg.type === 'suggestion' && (
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-amber-600 font-medium">Suggestion</span>
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
            <div className="p-3 rounded-lg bg-white text-gray-800 animate-fade-in border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-gray-600 font-medium">AI is typing...</span>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="flex gap-2 flex-shrink-0 bg-gray-50/50 rounded-lg p-2 border border-gray-100">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask me anything or start a conversation..."
          className="bg-white border-gray-200 text-gray-800 placeholder:text-gray-500 resize-none min-h-[40px] focus:border-blue-400 focus:ring-blue-400"
          rows={1}
        />
        <Button 
          onClick={handleSend} 
          size="icon" 
          className="h-auto bg-blue-600 hover:bg-blue-700 transition-colors"
          disabled={isTyping}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Status */}
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Messages: {messages.length}</span>
        <span>Conversations: {conversationCount}</span>
      </div>
    </div>
  );
};

export default ChatInterface;
