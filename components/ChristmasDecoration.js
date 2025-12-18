'use client'
import React, { useEffect, useRef } from 'react';

const ChristmasDecoration = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let snowflakes = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Snowflake class
    class Snowflake {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
      }
      
      update() {
        this.y += this.speed;
        this.x += this.wind;
        
        if (this.y > canvas.height) {
          this.reset();
          this.y = -10;
        }
        
        if (this.x > canvas.width + 10) {
          this.x = -10;
        } else if (this.x < -10) {
          this.x = canvas.width + 10;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    // Create snowflakes based on screen size
    const snowflakeCount = window.innerWidth < 768 ? 50 : 100;
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(new Snowflake());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <>
      {/* Snowfall Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />
      
      {/* Bottom Decorations */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 10 }}>
        {/* Snow Ground Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-t from-white via-white/95 to-white/0">
          {/* Snow texture/details */}
          <div className="absolute inset-0 opacity-60">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${i * 5}%`,
                  bottom: `${Math.random() * 40}%`,
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Christmas Tree - Left Bottom */}
        <div className="absolute -bottom-14 left-4 md:left-8">
          <svg
            viewBox="0 0 120 160"
            className="w-20 h-28 md:w-32 md:h-40 lg:w-40 lg:h-52"
            fill="none"
          >
            {/* Tree layers */}
            <path d="M60 20 L40 50 L50 50 L35 75 L45 75 L30 100 L90 100 L75 75 L85 75 L70 50 L80 50 Z" fill="#2D5016"/>
            <path d="M60 20 L45 45 L52 45 L40 67 L48 67 L35 90 L85 90 L72 67 L80 67 L68 45 L75 45 Z" fill="#3A6B1F"/>
            {/* Ornaments */}
            <circle cx="50" cy="60" r="3" fill="#DC2626"/>
            <circle cx="70" cy="65" r="3" fill="#EAB308"/>
            <circle cx="55" cy="80" r="3" fill="#DC2626"/>
            <circle cx="65" cy="85" r="3" fill="#3B82F6"/>
            <circle cx="45" cy="90" r="3" fill="#EAB308"/>
            {/* Star on top */}
            <path d="M60 10 L62 18 L70 18 L64 23 L66 31 L60 26 L54 31 L56 23 L50 18 L58 18 Z" fill="#FBBF24"/>
            {/* Trunk */}
            <rect x="52" y="100" width="16" height="20" fill="#6B4423" rx="2"/>
            {/* Snow on tree */}
            <ellipse cx="60" cy="50" rx="20" ry="3" fill="white" opacity="0.8"/>
            <ellipse cx="60" cy="75" rx="25" ry="3" fill="white" opacity="0.8"/>
            <ellipse cx="60" cy="100" rx="30" ry="3" fill="white" opacity="0.9"/>
          </svg>
        </div>
        
        {/* Three Gift Boxes - Right Bottom (close together) */}
        <div className="absolute bottom-0 right-4 md:right-8 flex items-end gap-1">
          {/* Gift Box 1 - Red */}
          <svg
            viewBox="0 0 50 60"
            className="w-12 h-14 md:w-16 md:h-18 lg:w-20 lg:h-22"
            fill="none"
          >
            <rect x="8" y="22" width="34" height="34" fill="#DC2626" rx="2"/>
            <rect x="8" y="18" width="34" height="6" fill="#EAB308" rx="1"/>
            <rect x="23" y="18" width="4" height="38" fill="#FBBF24"/>
            <path d="M25 18 Q21 14 17 17 Q21 19 25 18 Z" fill="#FBBF24"/>
            <path d="M25 18 Q29 14 33 17 Q29 19 25 18 Z" fill="#FBBF24"/>
          </svg>
          
          {/* Gift Box 2 - Blue (slightly taller) */}
          <svg
            viewBox="0 0 50 70"
            className="w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24"
            fill="none"
          >
            <rect x="8" y="25" width="34" height="40" fill="#3B82F6" rx="2"/>
            <rect x="8" y="20" width="34" height="7" fill="#10B981" rx="1"/>
            <rect x="23" y="20" width="4" height="45" fill="#34D399"/>
            <path d="M25 20 Q21 16 17 19 Q21 21 25 20 Z" fill="#34D399"/>
            <path d="M25 20 Q29 16 33 19 Q29 21 25 20 Z" fill="#34D399"/>
          </svg>
          
          {/* Gift Box 3 - Purple */}
          <svg
            viewBox="0 0 50 60"
            className="w-12 h-14 md:w-16 md:h-18 lg:w-20 lg:h-22"
            fill="none"
          >
            <rect x="8" y="22" width="34" height="34" fill="#9333EA" rx="2"/>
            <rect x="8" y="18" width="34" height="6" fill="#F59E0B" rx="1"/>
            <rect x="23" y="18" width="4" height="38" fill="#FBBF24"/>
            <path d="M25 18 Q21 14 17 17 Q21 19 25 18 Z" fill="#FBBF24"/>
            <path d="M25 18 Q29 14 33 17 Q29 19 25 18 Z" fill="#FBBF24"/>
          </svg>
        </div>
      </div>
    </>
  );
};
export default ChristmasDecoration