import React from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { CharacterCard } from './components/CharacterCard';
import { Footer } from './components/Footer';
import { SYNOPSIS, PLOT_POINTS, CHARACTERS, THEMES, THEME_ICONS, ASSETS } from './constants';
import { Droplets, MapPin, Eye } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-noir-accent selection:text-white font-sans">
      
      {/* Sticky Navigation / CTA */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-center pointer-events-none">
        <span className="text-white font-display font-bold text-xl pointer-events-auto">E/P</span>
        <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 text-xs font-bold tracking-widest pointer-events-auto uppercase transition-colors">
          Leggi Ora
        </button>
      </nav>

      <Hero />

      {/* Prologue / Synopsis */}
      <Section id="prologue" className="bg-noir-800 border-b border-noir-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display text-white border-l-4 border-noir-accent pl-6">
              Manila. <br/> <span className="text-gray-500 text-2xl">Il mostro che respira.</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 font-light">
              {SYNOPSIS.intro}
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              {SYNOPSIS.protagonist}
            </p>
            <div className="p-6 bg-black/50 border border-gray-800 italic text-noir-gold">
              {SYNOPSIS.hook}
            </div>
          </div>
          <div className="relative h-[500px] w-full group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-noir-800 to-transparent z-10" />
            <img 
              src={ASSETS.prologue} 
              alt="Manila Noir Street" 
              className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-10 right-10 z-20 text-right">
              <MapPin className="ml-auto w-8 h-8 text-noir-accent mb-2" />
              <p className="font-display text-2xl text-white">INTRAMUROS</p>
              <p className="text-sm tracking-widest text-gray-500">SETTORE 4</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Conspiracy */}
      <Section id="conspiracy" className="bg-noir-900">
        <div className="text-center mb-20">
          <Eye className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">IL COMPASSO SPEZZATO</h2>
          <div className="h-1 w-20 bg-noir-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {PLOT_POINTS.map((point, idx) => (
            <div key={idx} className={`relative p-10 border ${idx % 2 === 0 ? 'border-gray-800' : 'border-noir-gold/20'}`}>
              <div className="absolute -top-6 left-10 bg-noir-900 px-4 text-6xl font-display text-gray-800 select-none">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-serif text-white mb-6 mt-4">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters Grid */}
      <Section id="characters" className="bg-black">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-2">DRAMATIS <br/><span className="text-noir-accent">PERSONAE</span></h2>
          </div>
          <p className="text-gray-500 text-right max-w-md mt-6 md:mt-0">
            In questa città, nessuno è innocente. Scegli da che parte stare prima che l'acqua ti arrivi alla gola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHARACTERS.map((char, idx) => (
            <CharacterCard key={idx} character={char} index={idx} />
          ))}
        </div>
      </Section>

      {/* Themes Parallax-like */}
      <Section id="themes" className="bg-noir-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {THEMES.map((theme, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-8 p-6 rounded-full bg-black border border-gray-800 group-hover:border-noir-gold transition-colors duration-300 relative">
                {THEME_ICONS[theme.icon]}
                {theme.icon === 'rain' && <Droplets className="absolute top-0 right-0 w-3 h-3 text-white animate-ping" />}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">{theme.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Interlude */}
      <div className="bg-noir-accent py-24 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-black text-white leading-tight max-w-4xl mx-auto">
          "L'UNICO MODO PER VINCERE LA GUERRA È RACCOGLIERE I CONTI DELLA LOGGIA."
        </h2>
      </div>

      <Footer />
    </div>
  );
};

export default App;