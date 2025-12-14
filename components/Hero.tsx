import React, { useEffect, useState } from 'react';
import { HERO_CONTENT, ASSETS } from '../constants';
import RainEffect from './RainEffect';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-noir-900">
      {/* Background Image with Grayscale and Contrast */}
      <div 
        className="absolute inset-0 z-0 opacity-40 grayscale contrast-125 transition-transform duration-[20s] ease-linear scale-105 hover:scale-110"
        style={{
          backgroundImage: `url("${ASSETS.heroBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Rain Animation Layer */}
      <RainEffect />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/80 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col items-center">
        <p className={`text-noir-accent font-display font-bold tracking-[0.2em] text-sm md:text-lg mb-4 uppercase red-glow transition-all duration-1000 delay-300 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {HERO_CONTENT.subtitle}
        </p>
        
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 tracking-tight leading-none text-glow transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-sm'}`}>
          ELIAS <span className="text-gray-500 font-serif italic font-normal text-5xl md:text-7xl">e la</span> PIOGGIA
        </h1>
        
        <div className={`h-px w-24 bg-noir-gold mb-8 transition-all duration-1000 delay-500 transform ${isMounted ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>

        <p className={`text-xl md:text-3xl text-gray-300 font-serif italic mb-12 font-light transition-all duration-1000 delay-700 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          "{HERO_CONTENT.tagline}"
        </p>

        <a 
          href="#prologue"
          className={`group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-bold text-white transition-all duration-1000 delay-1000 bg-transparent border border-gray-600 hover:border-noir-accent hover:bg-noir-accent/10 focus:outline-none ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative tracking-widest uppercase">{HERO_CONTENT.cta}</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 z-20 animate-bounce transition-opacity duration-1000 delay-[1200ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </div>
  );
};