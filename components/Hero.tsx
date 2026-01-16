
import React, { useEffect, useRef, useState } from 'react';
import { BRAND_NAME, DESCRIPTOR, NEON_CYAN } from '../constants';

interface HeroProps {
  onNavigate: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 1.5,
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = NEON_CYAN;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - dist/100)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    setTimeout(() => setIsStable(true), 1000);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black select-none border-b border-white/5">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />
      
      <div className={`relative z-10 transition-all duration-1000 transform flex flex-col items-center ${isStable ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
        <div className="text-[11px] font-mono tracking-[0.8em] text-[#00FFFF] uppercase mb-8 opacity-60">Initiating Neural Link...</div>
        
        <h1 className="heading-massive text-center font-black tracking-tighter text-white uppercase drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]">
          {BRAND_NAME}
        </h1>
        
        <p className="mt-6 text-center text-xl md:text-2xl font-mono tracking-[0.4em] text-[#00FFFF] uppercase opacity-80 neon-glow">
          {DESCRIPTOR}
        </p>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <button 
            onClick={() => onNavigate('systems')}
            className="group relative px-10 py-5 bg-transparent border border-[#00FFFF] text-[#00FFFF] font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-[#00FFFF] hover:text-black overflow-hidden"
          >
            <span className="relative z-10">Systems_Init</span>
            <div className="absolute top-0 -left-full w-full h-full bg-[#00FFFF] group-hover:left-0 transition-all duration-300 -z-0" />
          </button>
          <button 
            onClick={() => onNavigate('work')}
            className="group px-10 py-5 border border-white/10 text-white/60 font-black uppercase tracking-[0.3em] text-xs hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all"
          >
            View_Work_History
          </button>
        </div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-white/20 uppercase tracking-[0.4em] hidden lg:block">
        HC_PORTFOLIO_V2.4 <br/>
        SECURE_PROTOCOL_ACTIVE
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-white/20 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
         <span className="text-[10px] tracking-[0.6em] uppercase font-mono group-hover:text-[#00FFFF] transition-colors">Scroll to Enter</span>
         <div className="w-[1px] h-32 bg-gradient-to-b from-[#00FFFF] via-[#00FFFF]/20 to-transparent group-hover:h-40 transition-all duration-500" />
      </div>

      <div className="absolute right-12 bottom-12 text-right hidden lg:block">
        <div className="text-[10px] font-mono text-[#00FFFF]/40 mb-2">SYSTEM_LOAD: STABLE</div>
        <div className="flex gap-1 justify-end">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className={`w-1 h-3 border border-[#00FFFF]/20 ${i < 6 ? 'bg-[#00FFFF]/40' : 'bg-transparent'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
