
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import SystemsBuilder from './components/SystemsBuilder';
import WorkCarousel from './components/WorkCarousel';
import TechnicalDepth from './components/TechnicalDepth';
import VisualGallery from './components/VisualGallery';
import Manifesto from './components/Manifesto';
import HardwareLab from './components/HardwareLab';

import SystemsPage from './pages/SystemsPage';
import WorkPage from './pages/WorkPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';

import HardcoreAgent from './components/HardcoreAgent';
import StartHereModal from './components/StartHereModal';
import { Shield, Github, Twitter, Instagram, Mail, Terminal, ChevronUp } from 'lucide-react';

type View = 'home' | 'systems' | 'work' | 'gallery' | 'about';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: View) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 300);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onNavigate={navigateTo} />
            <SystemsBuilder />
            <WorkCarousel />
            <TechnicalDepth />
            <VisualGallery />
            <Manifesto />
            <HardwareLab />
            {/* Final CTA Overlay for Home */}
            <section className="py-40 px-8 relative overflow-hidden bg-zinc-950 border-t border-white/5">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed grayscale mix-blend-overlay" />
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-none">
                  READY TO <br/>
                  <span className="text-[#00FFFF] neon-glow">INTEGRATE?</span>
                </h2>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-5 bg-[#00FFFF] text-black font-black tracking-[0.3em] uppercase text-xs hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                >
                  Start Mission Protocol
                </button>
              </div>
            </section>
          </div>
        );
      case 'systems': return <SystemsPage />;
      case 'work': return <WorkPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      default: return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#00FFFF] selection:text-black transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[70] px-8 py-6 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div 
          className="font-black text-xl tracking-tighter cursor-pointer group flex items-center gap-2" 
          onClick={() => navigateTo('home')}
        >
          <div className="w-8 h-8 bg-[#00FFFF] text-black flex items-center justify-center font-black transition-transform group-hover:scale-110">JE</div>
          <span className="hidden sm:block uppercase">Systems<span className="text-[#00FFFF]">.</span></span>
        </div>
        
        <div className="flex gap-4 md:gap-10 items-center">
          {[
            { label: 'Systems', id: 'systems' },
            { label: 'Work', id: 'work' },
            { label: 'Gallery', id: 'gallery' },
            { label: 'About', id: 'about' }
          ].map((link) => (
            <button 
              key={link.id} 
              onClick={() => navigateTo(link.id as View)}
              className={`text-[10px] font-mono tracking-[0.3em] uppercase transition-all glitch-text relative pb-1 ${currentView === link.id ? 'text-[#00FFFF]' : 'text-white/40 hover:text-white'}`}
            >
              {link.label}
              {currentView === link.id && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FFFF] shadow-[0_0_8px_#00FFFF]" />}
            </button>
          ))}
          <div className="hidden lg:block w-[1px] h-4 bg-white/10 mx-2" />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex px-5 py-2.5 border border-[#00FFFF]/40 bg-[#00FFFF]/5 text-[10px] font-mono tracking-widest uppercase hover:bg-[#00FFFF] hover:text-black transition-all items-center gap-2 group"
          >
            <Terminal size={12} className="group-hover:animate-pulse" />
            Deploy Intake
          </button>
        </div>
      </nav>

      {/* Main Viewport */}
      <main className={currentView === 'home' ? '' : 'pt-24'}>
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="font-black text-2xl tracking-tighter mb-4 uppercase">Josh Ely</div>
              <p className="text-white/40 text-[11px] leading-relaxed mb-8 font-mono uppercase tracking-wider">
                Full-stack system entity. <br/> Deploying sovereign architectures <br/> since 2012.
              </p>
              <div className="flex gap-5">
                <Github className="w-5 h-5 text-white/40 hover:text-[#00FFFF] transition-colors cursor-pointer" />
                <Twitter className="w-5 h-5 text-white/40 hover:text-[#00FFFF] transition-colors cursor-pointer" />
                <Instagram className="w-5 h-5 text-white/40 hover:text-[#00FFFF] transition-colors cursor-pointer" />
                <Mail className="w-5 h-5 text-white/40 hover:text-[#00FFFF] transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FFFF]">Directory</h4>
              <ul className="space-y-4 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                {['systems', 'work', 'gallery', 'about'].map(v => (
                   <li key={v} onClick={() => navigateTo(v as View)} className="hover:text-[#00FFFF] transition-colors cursor-pointer uppercase list-none">
                     [{v}] SOURCE_MOD
                   </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FFFF]">Network</h4>
               <ul className="space-y-4 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                <li className="hover:text-[#00FFFF] transition-colors cursor-pointer">Hardcore OS</li>
                <li className="hover:text-[#00FFFF] transition-colors cursor-pointer">Tattoo Generative</li>
                <li className="hover:text-[#00FFFF] transition-colors cursor-pointer">BMX Media Labs</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00FFFF]">System_Status</h4>
              <div className="p-4 bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between text-[9px] font-mono">
                  <span className="text-white/40">CORE_UPTIME:</span>
                  <span className="text-[#00FFFF]">99.998%</span>
                </div>
                <div className="flex justify-between text-[9px] font-mono">
                  <span className="text-white/40">LATENCY:</span>
                  <span className="text-[#00FFFF]">12ms</span>
                </div>
                <div className="flex justify-between text-[9px] font-mono">
                  <span className="text-white/40">ENCRYPTION:</span>
                  <span className="text-[#00FFFF]">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="text-[9px] font-mono tracking-[0.3em] text-white/10 uppercase">
              ALL RIGHTS RESERVED // DISTRIBUTED VIA HARDCORE-OS // 2025
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#00FFFF]/30 uppercase">
              <Shield size={12} /> Encrypted Pipeline Operational
            </div>
          </div>
        </div>
      </footer>

      {/* Floating UI */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-8 z-50 p-3 glass-panel border-[#00FFFF]/30 text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all animate-in fade-in slide-in-from-bottom-4"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <HardcoreAgent />
      <StartHereModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
