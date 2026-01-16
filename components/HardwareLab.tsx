
import React from 'react';
import { HARDWARE_LAB } from '../constants';

const HardwareLab: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">The Lab</h2>
        <div className="text-[#00FFFF] font-mono tracking-widest text-sm uppercase">Optimized Tools for High-Performance Output</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HARDWARE_LAB.map((item) => (
          <div key={item.id} className="glass-panel p-6 border-white/5 group hover:border-[#00FFFF]/30 transition-all flex items-start gap-4">
            <div className="p-3 bg-white/5 text-[#00FFFF] group-hover:bg-[#00FFFF] group-hover:text-black transition-colors rounded">
              {item.icon}
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-[#00FFFF] transition-colors">{item.title}</div>
              <div className="text-[10px] font-mono text-white/40 uppercase">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardwareLab;
