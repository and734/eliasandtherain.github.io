import { Character, ThemePoint } from './types';
import { CloudRain, Compass, BookOpen } from 'lucide-react';

// CENTRALIZED ASSET MANAGEMENT
// To use local images, upload them to /assets/characters/ and update the paths below.
// Example: elias: '/assets/characters/elias.jpg'
export const ASSETS = {
  heroBg: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1920&auto=format&fit=crop",
  prologue: "https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=800&auto=format&fit=crop",
  characters: {
    elias: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=800&auto=format&fit=crop",
    victor: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    isabel: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    bautista: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  }
};

export const HERO_CONTENT = {
  title: "ELIAS E LA PIOGGIA",
  subtitle: "L'Ordine si costruisce sul Silenzio. E sul Sangue.",
  tagline: "LA LEGGE È CIECA. LA PIOGGIA NASCONDE.",
  cta: "LEGGI ORA"
};

export const SYNOPSIS = {
  intro: "Manila non è solo una città. È un mostro che respira. E quando piove, non piove per pulire, ma per aggredire e nascondere i segreti sepolti tra le mura antiche di Intramuros e i vicoli infetti di Tondo.",
  protagonist: "Al centro del caos, consumato dalla nicotina e da vent'anni di servizio, c'è il detective Elias De Marcado, un uomo segnato da una cicatrice che è il ricordo di un fallimento mai pagato.",
  hook: "La sua ultima indagine lo trascinerà oltre la linea di demarcazione tra la legge e la follia."
};

export const PLOT_POINTS = [
  {
    title: "La Scomparsa",
    content: "Marina \"Nina\" de la Cruz, giovane studentessa e attivista, scompare dopo aver scoperto un giro di tangenti per la ristrutturazione delle strade a Binondo. L'unica traccia lasciata è un orecchino con una pietra rossa, conficcato nel fango di Intramuros, accanto al simbolo di un compasso e una squadra."
  },
  {
    title: "La Loggia del Dragone",
    content: "Victor Lao, imprenditore intoccabile, è il \"Grande Architetto\". Lui e i suoi \"Fratelli del Silenzio\" hanno distorto i riti massonici per coprire omicidi. Nina non è stata solo rapita; è stata sottoposta a un \"rito dell'acqua\"."
  }
];

export const CHARACTERS: Character[] = [
  {
    name: "Elias De Marcado",
    role: "Il Detective",
    description: "Un uomo consumato dalla nicotina e dai rimpianti. Porta una cicatrice che pulsa ogni volta che piove.",
    imageAlt: "Un uomo stanco sotto la pioggia con un impermeabile scuro",
    quote: "La pioggia non lava via i peccati. Li rende solo più scivolosi.",
    imageUrl: ASSETS.characters.elias
  },
  {
    name: "Victor Lao",
    role: "L'Architetto",
    description: "Filantropo di giorno, mostro intoccabile di notte. Capo della Loggia del Dragone Silente.",
    imageAlt: "Un uomo elegante in abito sartoriale con un'espressione fredda",
    quote: "Noi costruiamo l'ordine dal caos.",
    imageUrl: ASSETS.characters.victor
  },
  {
    name: "Isabel Maldera",
    role: "La Giornalista",
    description: "Segue la pista dei soldi sporchi tra i grattacieli di Makati. Figlia di un fondatore della Loggia.",
    imageAlt: "Una donna determinata che guarda fuori da una finestra bagnata",
    quote: "La verità è un lusso che Manila non può permettersi.",
    imageUrl: ASSETS.characters.isabel
  },
  {
    name: "Capitano Bautista",
    role: "Il Mentore",
    description: "Maestro Venerabile infiltrato nella polizia. Il marciume alla radice del sistema.",
    imageAlt: "Un ufficiale di polizia con un'ombra sul volto",
    quote: "Fedeltà al distintivo, o fedeltà al giuramento?",
    imageUrl: ASSETS.characters.bautista
  }
];

export const THEMES: ThemePoint[] = [
  {
    title: "Noir Filippino",
    description: "L'atmosfera claustrofobica di una Manila sotto il monsone, dove la morale si scontra con la sopravvivenza.",
    icon: 'rain'
  },
  {
    title: "Riti e Potere",
    description: "Simboli esoterici (squadra e compasso) e rituali di sangue per vincolare i potenti al silenzio.",
    icon: 'symbol'
  },
  {
    title: "La Prova Regina",
    description: "La ricerca dei libri mastri segreti di Victor Lao, nascosti in una cintura di coccodrillo.",
    icon: 'book'
  }
];

export const THEME_ICONS = {
  rain: <CloudRain className="w-8 h-8 text-blue-400" />,
  symbol: <Compass className="w-8 h-8 text-noir-gold" />,
  book: <BookOpen className="w-8 h-8 text-noir-accent" />
};