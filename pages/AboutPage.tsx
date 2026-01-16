
import React from 'react';
import Manifesto from '../components/Manifesto';
import HardwareLab from '../components/HardwareLab';
import { PROCESS_STEPS, TECH_STACK } from '../constants';
import { Target, Shield, Zap, Terminal, Activity } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="py-32 px-8 border-b border-white/5 bg-zinc-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#00FFFF] font-mono text-[10px] tracking-[0.6em] uppercase mb-4 flex items-center gap-2">
             <Activity size={14} /> MODULE_04 // PERSONA_LOGS
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8]">Subject: <br/><span className="text-white/20">Josh Ely</span></h1>
          <div className="max-w-2xl space-y-6">
            <p className="text-white font-bold font-mono text-sm leading-relaxed uppercase tracking-tight">
              I design and ship agentic products, automation pipelines, and multi-brand platforms—backed by real infrastructure and structured data.
            </p>
            <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-tight">
              Based in San Francisco. operating globally. I build real systems that turn chaos into execution. Discipline is the only true currency.
            </p>
          </div>
        </div>
      </header>

      <Manifesto />

      <section className="py-32 px-8 bg-zinc-950/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                 <h4 className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">Discipline_01</h4>
                 <div className="text-xl font-black uppercase">Engineer</div>
                 <p className="text-[10px] font-mono text-white/40 uppercase">Full-stack deployments, containerization, and distributed agent logic.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">Discipline_02</h4>
                 <div className="text-xl font-black uppercase">Artist</div>
                 <p className="text-[10px] font-mono text-white/40 uppercase">Tattoo generative systems and anatomical visual architecture.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">Discipline_03</h4>
                 <div className="text-xl font-black uppercase">Athlete</div>
                 <p className="text-[10px] font-mono text-white/40 uppercase">Professional street BMX. High-stakes physical execution.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">Discipline_04</h4>
                 <div className="text-xl font-black uppercase">Founder</div>
                 <p className="text-[10px] font-mono text-white/40 uppercase">Building Hardcore Systems and the multi-brand ecosystem.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-20 flex items-center gap-4">
             <Terminal className="text-[#00FFFF]" /> The Build Protocol
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="p-8 border border-white/5 glass-panel group hover:border-[#00FFFF]/30 transition-all">
                <div className="text-[#00FFFF] text-[10px] font-mono tracking-widest mb-6 uppercase">0{step.id} // PHASE</div>
                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">{step.title}</h3>
                <p className="text-[11px] text-white/40 font-mono uppercase leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HardwareLab />
      
      <section className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Status: <span className="text-[#00FFFF]">Operational</span></h2>
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Last system sync: 2025-05-24 // San Francisco, CA</p>
           </div>
           <button className="px-12 py-5 bg-[#00FFFF] text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-[0_0_50px_rgba(0,255,255,0.1)]">
              Contact Command
           </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
