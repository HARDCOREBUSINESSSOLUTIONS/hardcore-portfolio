
import React from 'react';
import VisualGallery from '../components/VisualGallery';
import { Camera, Palette, Bike, Info } from 'lucide-react';

const GalleryPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="py-32 px-8 border-b border-white/5 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#00FFFF] font-mono text-[10px] tracking-[0.6em] uppercase mb-4 flex items-center gap-2">
            <Palette size={14} /> MODULE_03 // AESTHETICS_UNIT
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8]">Visual <br/><span className="text-white/20">Sovereignty</span></h1>
          <p className="max-w-2xl text-white/40 font-mono text-sm leading-relaxed uppercase tracking-tight">
            Documenting the intersection of permanent art, professional street BMX, and cinematic visual systems. Everything shown is captured or designed by Josh Ely.
          </p>
        </div>
      </header>

      <section className="py-16 px-8 bg-zinc-950/40 border-b border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex gap-12 whitespace-nowrap">
           {[
             { label: 'Tattoo Art', count: '142', icon: <Palette size={12} /> },
             { label: 'Media Production', count: '56', icon: <Camera size={12} /> },
             { label: 'Industrial/BMX', count: '24', icon: <Bike size={12} /> },
             { label: 'Generative Concepts', count: '12', icon: <Info size={12} /> },
           ].map(cat => (
             <div key={cat.label} className="flex flex-col gap-2">
               <div className="text-[10px] font-mono text-[#00FFFF] flex items-center gap-2 uppercase tracking-widest">{cat.icon} {cat.label}</div>
               <div className="text-xl font-black uppercase tracking-tighter">{cat.count} <span className="text-white/20">FILES</span></div>
             </div>
           ))}
        </div>
      </section>

      <VisualGallery />

      <section className="py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black tracking-tighter uppercase">High-Impact <br/>Media Production</h2>
               <p className="text-white/40 font-mono text-sm leading-relaxed uppercase">
                 From 10-bit color grading to high-shutter street photography, the technical aspect of visual media is never neglected. Every frame is optimized for maximum impact and signal clarity.
               </p>
               <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-white/60">
                 <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#00FFFF]" /> 4K High-Bitrate Mastery</li>
                 <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#00FFFF]" /> Custom Diffusion Textures</li>
                 <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#00FFFF]" /> Anatomical Flow Mapping</li>
               </ul>
             </div>
             <div className="aspect-video glass-panel border-[#00FFFF]/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200')] bg-cover" />
                <div className="relative text-[#00FFFF] font-mono text-[9px] tracking-widest animate-pulse uppercase">Media_Playback_Optimized</div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
