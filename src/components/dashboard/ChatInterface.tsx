
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Welcome to the OR4CL3 interface. I am online and ready. How may I assist you?" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'ai', text: 'Analyzing query... Standby.' }]);
    }, 1000);
    setTimeout(() => {
      setMessages(prev => [...prev.slice(0, -1), { from: 'ai', text: `Query received: "${input}". My capabilities are currently focused on system diagnostics.` }]);
    }, 2500);
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 backdrop-holographic glow-cyan animate-float-3d"
        onClick={() => setIsOpen(true)}
        size="lg"
      >
        <MessageSquare className="mr-2" />
        Open Chat
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[70vh] backdrop-holographic rounded-2xl shadow-2xl border-holographic flex flex-col p-4 animate-scale-in">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="font-black text-lg text-holographic">OR4CL3 Interface</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-cyan-100/70 hover:text-white hover:bg-white/10">
          —
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 chat-scroll">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex w-full', msg.from === 'ai' ? 'justify-start' : 'justify-end')}>
            <div className={cn('p-3 rounded-lg max-w-[80%] animate-fade-in', msg.from === 'ai' ? 'bg-secondary text-cyan-100' : 'bg-primary text-primary-foreground')}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
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
          placeholder="Interact with the system..."
          className="bg-transparent text-white placeholder:text-cyan-100/50 resize-none"
          rows={1}
        />
        <Button onClick={handleSend} size="icon" className="h-auto">
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;
