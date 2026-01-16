
import React from 'react';
import SystemsBuilder from '../components/SystemsBuilder';
import TechnicalDepth from '../components/TechnicalDepth';
import { Bot, Workflow, Server, ShieldCheck, Zap, Database, Terminal, Cpu } from 'lucide-react';

const SystemsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="py-32 px-8 border-b border-white/5 bg-zinc-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00FFFF]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-[#00FFFF] font-mono text-[10px] tracking-[0.6em] uppercase mb-4 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-[#00FFFF]/30" /> 
            CORE_MODULE // ARCHITECTURE_V2.4
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8]">
            Agentic <br/>
            <span className="text-white/20">Architectures</span>
          </h1>
          <p className="max-w-2xl text-white/40 font-mono text-sm leading-relaxed uppercase tracking-tight">
            I design and ship agentic products (voice + chat + tool-use), automation pipelines, and multi-brand platforms—backed by real infrastructure (Docker/VPS) and structured data.
          </p>
        </div>
      </header>

      <SystemsBuilder />

      <section className="py-32 px-8 bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">01 // Agentic Orchestration</h2>
            <div className="space-y-10">
              <div className="glass-panel p-8 border-l-4 border-[#00FFFF]">
                <h4 className="text-[#00FFFF] font-mono text-xs mb-4 tracking-widest uppercase flex items-center gap-2">
                  <Bot size={14} /> Multi-Agent Manager Pattern
                </h4>
                <p className="text-sm text-white/60 font-mono uppercase mb-4 leading-relaxed">
                  Implementing Router/Specialist architectures where a master agent extracts intent and delegates to sub-agents for specialized tasks like vision, data extraction, or design.
                </p>
                <div className="flex gap-2 flex-wrap">
                   {['Tool-Use', 'Semantic Search', 'State Machines', 'Onboarding'].map(t => (
                     <span key={t} className="text-[9px] font-mono px-2 py-1 bg-white/5 text-white/40 border border-white/10 uppercase">{t}</span>
                   ))}
                </div>
              </div>
              <div className="glass-panel p-8 border-l-4 border-white/10">
                <h4 className="text-white/40 font-mono text-xs mb-4 tracking-widest uppercase flex items-center gap-2">
                  <Zap size={14} /> Realtime Voice Sessions
                </h4>
                <p className="text-sm text-white/40 font-mono uppercase leading-relaxed">
                  Voice-first experiences using Whisper, ElevenLabs, and Twilio integrations to create low-latency, conversational agents that interact directly with CRMs and databases.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
             <TechnicalDepth />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">02 // Automation & Delivery</h2>
              <p className="text-sm text-white/40 font-mono uppercase leading-relaxed mb-8">
                Turning chaos into execution through hardened pipelines. Every system is Docker-first and VPS-deployed.
              </p>
              <div className="p-6 bg-[#00FFFF]/5 border border-[#00FFFF]/20 rounded space-y-4">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-[#00FFFF]" size={18} />
                   <span className="text-[10px] font-mono tracking-widest uppercase">Reliability Focus</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono uppercase leading-tight">
                  // LOGGING & MONITORING <br/>
                  // AUTOMATIC RESTART POLICIES <br/>
                  // SECURE DATABASE VOLUMES <br/>
                  // REVERSE PROXY MAPPING
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-8 border-white/5 hover:border-[#00FFFF]/30 transition-all group">
                <Workflow className="text-[#00FFFF] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">n8n / API Pipelines</h3>
                <p className="text-xs text-white/40 font-mono uppercase leading-relaxed">
                  Complex multi-brand CRM intake. Capture → Enrich via AI → Store to Supabase/Airtable → Trigger specialized workflows based on segmentation.
                </p>
              </div>
              <div className="glass-panel p-8 border-white/5 hover:border-[#00FFFF]/30 transition-all group">
                <Database className="text-[#00FFFF] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">Structured Content</h3>
                <p className="text-xs text-white/40 font-mono uppercase leading-relaxed">
                  Building Brand DNA tokens and prompt libraries that allow repeatable, brand-aligned generation across entire platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">I Ship <br/><span className="text-[#00FFFF]">Infrastructure</span></h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {['Docker', 'FastAPI', 'Next.js', 'Supabase', 'Hostinger VPS', 'n8n'].map(tech => (
              <div key={tech} className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">{tech}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemsPage;
