
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const VisualGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 px-8">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Visual Sovereignty</h2>
          <div className="text-[#00FFFF] font-mono tracking-[0.4em] text-xs uppercase">The Aesthetic of Permanent Output</div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">FILTER: ALL_MODALITIES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="relative aspect-square overflow-hidden group">
            <img 
              src={item.url} 
              alt={item.label} 
              className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 border border-[#00FFFF]/0 group-hover:border-[#00FFFF]/40">
              <div className="text-[9px] font-mono text-[#00FFFF] mb-1 tracking-widest uppercase">{item.category}</div>
              <div className="text-lg font-black tracking-tighter uppercase">{item.label}</div>
              
              <div className="absolute top-6 right-6 opacity-40">
                <div className="w-12 h-[1px] bg-white/40 -rotate-45" />
              </div>
            </div>
            
            {/* Corner Bracket decorations */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualGallery;
