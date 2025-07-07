
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleJoinClick = () => {
    // Open Discord invite in new tab
    window.open('https://discord.gg/geecity', '_blank');
    toast({
      title: "Discord öffnet sich!",
      description: "Du wirst zu unserem Discord Server weitergeleitet.",
    });
  };

  const handleLearnMoreClick = () => {
    // Smooth scroll to highlights section
    const highlightsSection = document.querySelector('#highlights');
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMinigameClick = () => {
    navigate('/minigame');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="block">GEE CITY</span>
          </h1>
          
          <div className="relative">
            <h2 className="font-rajdhani text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light tracking-wide">
              Die Zukunft des Midcore Roleplay beginnt hier! 🌆
            </h2>
            
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-neon-red to-transparent w-64"></div>
              <div className="mx-4 text-neon-red text-2xl animate-pulse">⚡</div>
              <div className="h-px bg-gradient-to-r from-transparent via-neon-red to-transparent w-64"></div>
            </div>
          </div>

          <p className="font-rajdhani text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            GEE City ist die nächste Evolutionsstufe unseres geliebten FiveM Servers. 
            Mit einem komplett überarbeiteten System, neuen Features und einer fokussierten Community 
            möchten wir ein unvergessliches Spielerlebnis bieten.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleJoinClick}
              className="font-orbitron font-bold text-lg px-8 py-4 bg-neon-red hover:bg-red-600 text-white border-0 shadow-lg hover:shadow-neon-red/50 transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
            >
              🚀 JETZT BEITRETEN
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleLearnMoreClick}
              className="font-rajdhani font-semibold text-lg px-8 py-4 border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              📖 MEHR ERFAHREN
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/shop')}
              className="font-rajdhani font-semibold text-lg px-8 py-4 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              🛒 SHOP
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              onClick={handleMinigameClick}
              className="font-rajdhani font-semibold text-lg px-8 py-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              🍪 COOKIE EMPIRE
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-red rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
