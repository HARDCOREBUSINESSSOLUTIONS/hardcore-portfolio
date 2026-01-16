
import React from 'react';
import { PROJECTS, MASTER_INVENTORY } from '../constants';
import { ExternalLink, ArrowRight, Table, LayoutGrid, Target, Layers, Zap } from 'lucide-react';

const WorkPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="py-32 px-8 border-b border-white/5 bg-zinc-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#00FFFF] font-mono text-[10px] tracking-[0.6em] uppercase mb-4">MODULE_02 // SYSTEM_INVENTORY</div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8]">Flagship <br/><span className="text-white/20">Deployments</span></h1>
          <p className="max-w-2xl text-white/40 font-mono text-sm leading-relaxed uppercase tracking-tight">
            I design and ship agentic products (voice + chat + tool-use), automation pipelines, and multi-brand platforms—backed by real infrastructure and structured data.
          </p>
        </div>
      </header>

      {/* Flagship Detailed Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <LayoutGrid size={16} className="text-[#00FFFF]" />
          <h2 className="text-2xl font-black tracking-tighter uppercase">Primary Build Catalog</h2>
        </div>
        
        <div className="space-y-24">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative group">
                <div className="aspect-[16/10] overflow-hidden glass-panel border-white/10">
                  <img src={project.coverImage} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="px-2 py-1 bg-[#00FFFF] text-black text-[9px] font-black uppercase tracking-widest">{project.status}</span>
                   <span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold tracking-widest uppercase">{project.category}</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase mb-4 group-hover:text-[#00FFFF] transition-colors">{project.title}</h3>
                  <p className="text-white/60 font-mono text-sm leading-relaxed uppercase">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">
                      <Target size={12} /> Key Features
                    </div>
                    <ul className="space-y-2 text-[10px] font-mono text-white/30 uppercase">
                      <li>// Unified Agent UI</li>
                      <li>// API Connectivity</li>
                      <li>// Auth & Segmentation</li>
                      <li>// Voice-First Interaction</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest">
                      <Layers size={12} /> Stack Direction
                    </div>
                    <ul className="space-y-2 text-[10px] font-mono text-white/30 uppercase">
                      {project.techStack.map(t => <li key={t}>- {t}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                   {project.link && (
                     <a href={project.link} className="px-8 py-3 bg-[#00FFFF] text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                       Deploy Interface
                     </a>
                   )}
                   <button className="text-[10px] font-mono text-white/40 hover:text-[#00FFFF] transition-all flex items-center gap-2 uppercase tracking-widest">
                      Request Technical Spec <ArrowRight size={14} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Inventory Table */}
      <section className="py-32 px-8 bg-zinc-950/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Table size={16} className="text-[#00FFFF]" />
              <h2 className="text-2xl font-black tracking-tighter uppercase">Master Project Inventory</h2>
            </div>
            <p className="text-white/20 font-mono text-xs uppercase max-w-xl">
              A comprehensive list of projects, research concepts, and internal tooling currently monitored by Hardcore Systems.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/5 glass-panel">
            <table className="w-full text-left font-mono text-[10px] uppercase tracking-wider">
              <thead className="bg-white/5 border-b border-white/10 text-white/40">
                <tr>
                  <th className="px-6 py-4">ID_Project</th>
                  <th className="px-6 py-4">Brand_Cluster</th>
                  <th className="px-6 py-4">System_Type</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MASTER_INVENTORY.map((item, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-5 font-bold group-hover:text-[#00FFFF] transition-colors">{item.name}</td>
                    <td className="px-6 py-5 text-white/40">{item.brand}</td>
                    <td className="px-6 py-5 text-white/40">{item.type}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'In Progress' ? 'bg-amber-500 animate-pulse' : 'bg-[#00FFFF]'}`} />
                        <span className={item.status === 'In Progress' ? 'text-amber-500/60' : 'text-[#00FFFF]'}>{item.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
