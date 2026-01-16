
import React from 'react';
import { Database, Globe, Layers, ShieldCheck } from 'lucide-react';

const TechnicalDepth: React.FC = () => {
  const stacks = [
    { label: 'INFRASTRUCTURE', value: 'AWS / TERRAFORM / DOCKER', icon: <Layers size={14} /> },
    { label: 'BACKEND', value: 'PYTHON / FASTAPI / POSTGRES', icon: <Database size={14} /> },
    { label: 'INTELLIGENCE', value: 'LLMS / LANGGRAPH / VECTOR_DB', icon: <ShieldCheck size={14} /> },
    { label: 'FRONTEND', value: 'REACT / TS / THREE.JS', icon: <Globe size={14} /> },
  ];

  return (
    <section id="architecture" className="py-32 px-8 bg-zinc-950/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
              Systems <span className="text-[#00FFFF]">Architecture</span>
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="font-mono text-sm text-white/40 leading-relaxed uppercase tracking-wider">
                Designing sovereign environments that scale. From autonomous agent clusters to real-time data visualizers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stacks.map((s, i) => (
                  <div key={i} className="p-4 border border-white/10 glass-panel">
                    <div className="flex items-center gap-2 text-[#00FFFF] mb-2">
                      {s.icon}
                      <span className="text-[10px] font-mono tracking-widest uppercase">{s.label}</span>
                    </div>
                    <div className="text-xs font-bold uppercase">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Architectural Diagram Simulation */}
            <div className="glass-panel border-[#00FFFF]/20 aspect-video relative p-8 font-mono text-[10px] overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              <div className="relative z-10 h-full border border-[#00FFFF]/30 flex flex-col">
                <div className="p-2 border-b border-[#00FFFF]/30 flex justify-between uppercase">
                  <span>Cluster_ID: HC-99</span>
                  <span className="text-[#00FFFF] animate-pulse">ACTIVE</span>
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="border border-white/10 p-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center opacity-40">
                        <span>NODE_{i}</span>
                        <div className="w-1 h-1 bg-[#00FFFF] rounded-full" />
                      </div>
                      <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#00FFFF] transition-all duration-1000" 
                          style={{ width: `${Math.random() * 100}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-[#00FFFF]/30 text-[8px] text-white/20">
                  // LOGS: PULLING RECENT TRAJECTORY DATA... COMPLETE.
                </div>
              </div>

              {/* Decorative line-work */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#00FFFF]/20 -mr-4 -mt-4" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#00FFFF]/20 -ml-4 -mb-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDepth;
