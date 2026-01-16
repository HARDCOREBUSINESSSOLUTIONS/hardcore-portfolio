
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

const WorkCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950/30">
      <div className="px-8 max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Featured Work</h2>
        <div className="text-[#00FFFF] font-mono text-[10px] tracking-[0.5em] hidden sm:block">DRAG TO EXPLORE // [03] PROJECTS</div>
      </div>

      <div className="flex overflow-x-auto gap-8 px-8 pb-12 snap-x no-scrollbar">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="flex-none w-[320px] md:w-[600px] snap-start glass-panel overflow-hidden group border-white/5"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Proof Tags */}
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-black/80 backdrop-blur-md border border-[#00FFFF]/40 text-[#00FFFF] text-[9px] font-bold tracking-widest uppercase rounded">
                  {project.status}
                </span>
                {project.proofTags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold tracking-widest uppercase rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1 uppercase group-hover:text-[#00FFFF] transition-colors">{project.title}</h3>
                  <p className="text-[#00FFFF] text-[10px] font-mono tracking-widest uppercase">{project.category}</p>
                </div>
                <span className="text-white/20 font-mono text-sm">{project.year}</span>
              </div>
              
              <p className="text-white/60 text-sm mb-6 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-white/40">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 px-4 py-2 bg-[#00FFFF] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                )}
                {project.caseStudyLink && (
                  <a 
                    href={project.caseStudyLink} 
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:border-[#00FFFF] hover:text-[#00FFFF] transition-colors"
                  >
                    Case Study <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* End Placeholder */}
        <div className="flex-none w-[100px]" />
      </div>
    </section>
  );
};

export default WorkCarousel;
