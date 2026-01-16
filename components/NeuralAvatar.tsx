
import React, { useEffect, useRef } from 'react';
import { NEON_CYAN, NEON_RED } from '../constants';

interface NeuralAvatarProps {
  isTyping: boolean;
  isThinking: boolean;
}

const NeuralAvatar: React.FC<NeuralAvatarProps> = ({ isTyping, isThinking }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let width = (canvas.width = 300);
    let height = (canvas.height = 300);

    const nodes: { x: number; y: number; z: number; ox: number; oy: number; oz: number }[] = [];
    const nodeCount = 45;
    const radius = 80;

    // Initialize nodes in a sphere
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      nodes.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        ox: 0, oy: 0, oz: 0
      });
    }

    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      // Speed up and shift color based on state
      const speed = isThinking ? 0.06 : 0.005;
      const jitter = isThinking ? Math.random() * 3 : 0;
      const activeColor = isThinking ? NEON_RED : NEON_CYAN;
      
      rotationX += speed;
      rotationY += speed * 0.7;
      rotationZ += speed * 0.3;

      const projectedNodes = nodes.map(node => {
        let y1 = node.y * Math.cos(rotationX) - node.z * Math.sin(rotationX);
        let z1 = node.y * Math.sin(rotationX) + node.z * Math.cos(rotationX);
        let x2 = node.x * Math.cos(rotationY) + z1 * Math.sin(rotationY);
        let z2 = -node.x * Math.sin(rotationY) + z1 * Math.cos(rotationY);
        
        const scale = 400 / (400 + z2);
        return {
          x: x2 * scale + (Math.random() - 0.5) * jitter,
          y: y1 * scale + (Math.random() - 0.5) * jitter,
          z: z2,
          scale
        };
      });

      // Draw connections
      ctx.strokeStyle = isThinking ? 'rgba(255, 0, 51, 0.4)' : 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach(p => {
        const alpha = (p.z + radius) / (radius * 2);
        ctx.fillStyle = isThinking ? `rgba(255, 0, 51, ${alpha + 0.5})` : `rgba(0, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2);
        ctx.fill();
        
        if (isThinking && Math.random() > 0.95) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = NEON_RED;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.restore();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isThinking]);

  return (
    <div className="relative w-full flex justify-center items-center py-4 bg-gradient-to-b from-black to-transparent">
      <canvas 
        ref={canvasRef} 
        className={`transition-all duration-700 ${isThinking ? 'scale-110 drop-shadow-[0_0_30px_rgba(255,0,51,0.5)]' : 'scale-100'}`}
        style={{ width: '200px', height: '200px' }}
      />
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.4em] uppercase transition-colors duration-500 ${isThinking ? 'text-[#FF0033]' : 'text-[#00FFFF]/40'}`}>
        {isThinking ? 'Overclocking_Logic...' : 'Neural_Core_Static'}
      </div>
    </div>
  );
};

export default NeuralAvatar;
