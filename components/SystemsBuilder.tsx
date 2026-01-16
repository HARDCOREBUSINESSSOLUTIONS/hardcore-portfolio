
import React from 'react';
import { CAPABILITIES, getIcon } from '../constants';

const SystemsBuilder: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Systems Builder</h2>
          <p className="text-[#00FFFF] font-mono tracking-widest text-sm uppercase">The intelligence behind the machine</p>
        </div>
        <div className="max-w-md text-white/40 text-sm leading-relaxed border-l border-white/10 pl-6">
          I build real systems. Chaos precedes clarity. Structure forms from noise. 
          Everything listed here is currently deployed and functional.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap) => (
          <div 
            key={cap.id} 
            className="group glass-panel p-8 relative overflow-hidden transition-all duration-500 hover:border-[#00FFFF]/50 hover:bg-[#00FFFF]/5 cursor-default scanline"
          >
            <div className="mb-6 text-[#00FFFF] group-hover:scale-110 transition-transform duration-500">
              {getIcon(cap.icon, "w-10 h-10")}
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-widest uppercase">{cap.title}</h3>
            <p className="text-sm text-white/60 mb-6 leading-tight">{cap.tagline}</p>
            
            <ul className="space-y-3">
              {cap.bullets.map((bullet, idx) => (
                <li key={idx} className="text-[11px] font-mono tracking-wider flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors">
                  <span className="w-1.5 h-[1px] bg-[#00FFFF]/40" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 border-t-2 border-r-2 border-[#00FFFF]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemsBuilder;
