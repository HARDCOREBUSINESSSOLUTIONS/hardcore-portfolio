
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="about" className="py-32 px-8 bg-black relative border-y border-white/5 overflow-hidden">
      {/* Red ambient light matching the eye */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF0033]/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
           {/* Biometric Scan Effect Overlay */}
           <div className="absolute -inset-1 border border-[#FF0033]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF0033]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF0033]" />
           </div>

           <div className="relative glass-panel p-1 aspect-[3/4] overflow-hidden border-[#FF0033]/20 shadow-[0_0_40px_rgba(255,0,51,0.05)]">
             <img
               src="/josh-ely.png"
               alt="Josh Ely - Cyborg Systems Architect"
               className="w-full h-full object-cover grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
             />
             
             {/* Ocular Glow Sync (simulated) */}
             <div className="absolute top-[28%] left-[58%] w-4 h-4 bg-[#FF0033] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse pointer-events-none" />

             {/* UI Readout on Image */}
             <div className="absolute top-6 left-6 font-mono text-[8px] text-[#FF0033] tracking-[0.3em] uppercase opacity-60">
                // BIOS_VER: HARDCORE_OS_4.0 <br/>
                // SUBJECT: ELY_JOSH <br/>
                // STATUS: OVERCLOCKED
             </div>

             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-8 left-8">
               <div className="text-[10px] font-mono tracking-[0.5em] text-[#FF0033] uppercase mb-2">Architect_ID</div>
               <h3 className="text-4xl font-black tracking-tighter uppercase text-white">Josh Ely</h3>
             </div>
           </div>
        </div>

        <div className="space-y-12">
          <div className="relative">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none relative z-10">
              The <span className="text-[#FF0033] drop-shadow-[0_0_15px_rgba(255,0,51,0.5)]">Manifesto</span>
            </h2>
            <div className="w-32 h-1 bg-[#FF0033] mb-4" />
            <div className="text-[#FF0033] font-mono text-[10px] tracking-[0.6em] uppercase">Discipline is the only true currency.</div>
          </div>

          <div className="space-y-8 font-mono text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
            <p className="border-l-2 border-[#FF0033]/50 pl-6 italic text-white/80">
              "Most people are busy building fluff. I build systems that endure. I am the signal emerging from the noise."
            </p>
            <p>
              Josh Ely is a Hybrid Entity. Part systems engineer, part visual architect, part professional athlete. The methodology is consistent: 
              <span className="text-white font-bold"> Total Commitment to High-Performance Output.</span>
            </p>
            <p>
              From tattooing permanent anatomical flow to deploying multi-agent AI clusters that handle millions in transaction volume—the thread is <span className="text-[#FF0033]">Obsessive Execution.</span>
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="group">
                <div className="text-[10px] text-[#FF0033] mb-2 tracking-widest uppercase group-hover:translate-x-1 transition-transform">Philosophy</div>
                <div className="text-white font-bold uppercase tracking-tight text-lg">System Sovereignty</div>
              </div>
              <div className="group">
                <div className="text-[10px] text-[#FF0033] mb-2 tracking-widest uppercase group-hover:translate-x-1 transition-transform">Operating_Mode</div>
                <div className="text-white font-bold uppercase tracking-tight text-lg">Full-Stack Lethality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
