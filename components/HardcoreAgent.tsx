
import React, { useState, useRef, useEffect } from 'react';
import { getHardcoreResponse } from '../services/geminiService';
import { Bot, X, Send, Terminal, Activity, Shield } from 'lucide-react';
import NeuralAvatar from './NeuralAvatar';

const HardcoreAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'agent', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setIsTyping(true);

    const response = await getHardcoreResponse(userText);
    setMessages(prev => [...prev, { role: 'agent', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[80] p-4 rounded-full glass-panel border-[#00FFFF]/30 text-[#00FFFF] hover:scale-110 hover:border-[#00FFFF] transition-all shadow-[0_0_30px_rgba(0,255,255,0.1)] ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <Bot size={24} />
      </button>

      <div className={`fixed bottom-8 right-8 z-[80] w-[350px] md:w-[400px] h-[650px] glass-panel border-[#00FFFF]/20 flex flex-col shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        {/* Diagnostic Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00FFFF]/10 rounded border border-[#00FFFF]/30">
              <Terminal size={16} className="text-[#00FFFF]" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-[#00FFFF] uppercase">Hardcore OS v2.4</div>
              <div className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full bg-[#00FFFF] ${isTyping ? 'animate-ping' : ''}`} />
                <div className="text-[8px] font-mono text-white/40 uppercase tracking-tighter">System_Link: Nominal</div>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* AI Avatar Integration */}
        <NeuralAvatar isTyping={isTyping} isThinking={isTyping} />

        <div className="flex px-4 py-2 bg-white/5 border-y border-white/5 justify-between">
           <div className="flex gap-2 items-center">
              <Activity size={10} className="text-[#00FFFF]/40" />
              <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.3em]">Load: 12%</span>
           </div>
           <div className="flex gap-2 items-center">
              <Shield size={10} className="text-[#00FFFF]/40" />
              <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.3em]">Secure_Link</span>
           </div>
        </div>

        {/* Chat Feed */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-black/20">
          {messages.length === 0 && (
            <div className="text-center py-8 px-6">
              <div className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase mb-4">Awaiting Command Input</div>
              <p className="text-[11px] font-mono text-white/40 leading-relaxed uppercase">
                "Discipline is the only true currency. State your query."
              </p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded text-[12px] leading-relaxed font-mono ${m.role === 'user' ? 'bg-white/5 border border-white/10 text-white/80' : 'bg-[#00FFFF]/5 border border-[#00FFFF]/20 text-[#00FFFF]'}`}>
                <div className="text-[8px] opacity-40 mb-1 uppercase tracking-widest">{m.role === 'user' ? 'Local_User' : 'Hardcore_OS'}</div>
                {m.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#00FFFF]/5 border border-[#00FFFF]/20 p-3 rounded">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#00FFFF] rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-[#00FFFF] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-[#00FFFF] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Terminal */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 flex gap-2 bg-black/80 backdrop-blur-md">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00FFFF]/40 font-mono text-xs">&gt;</div>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="COMMAND_INPUT..."
              className="w-full bg-white/5 border border-white/10 rounded-sm pl-8 pr-4 py-2.5 text-xs font-mono focus:outline-none focus:border-[#00FFFF]/50 transition-colors uppercase"
            />
          </div>
          <button type="submit" className="px-4 bg-[#00FFFF] text-black rounded-sm hover:bg-white transition-colors group">
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HardcoreAgent;
