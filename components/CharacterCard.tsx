import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
  return (
    <div className="group relative overflow-hidden bg-noir-800 border border-noir-700 hover:border-noir-gold/50 transition-colors duration-500">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={character.imageUrl} 
          alt={character.imageAlt}
          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        {/* Gradient overlay specifically tuned for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
        <p className="text-noir-gold text-xs font-bold tracking-widest uppercase mb-1">
          {character.role}
        </p>
        <h3 className="text-2xl font-display text-white mb-2 drop-shadow-lg">{character.name}</h3>
        
        {/* Smooth expand animation container */}
        <div className="max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out overflow-hidden">
            <p className="text-gray-300 text-sm mb-4 font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {character.description}
            </p>
        </div>

        {character.quote && (
          <p className="text-white/90 font-serif italic text-sm border-l-2 border-noir-accent pl-3 mt-2">
            "{character.quote}"
          </p>
        )}
      </div>
    </div>
  );
};