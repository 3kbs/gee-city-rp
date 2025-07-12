import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const { toast } = useToast();

  const handleDiscordClick = () => {
    window.open('https://discord.gg/geecity', '_blank');
    toast({
      title: "Discord wird geöffnet!",
      description: "Tritt unserer Community bei und starte dein Abenteuer.",
    });
  };

  const handleDownloadClick = () => {
    window.open('https://fivem.net', '_blank');
    toast({
      title: "FiveM Download",
      description: "Du wirst zur offiziellen FiveM Website weitergeleitet.",
    });
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 relative overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-red/20 via-transparent to-cyber-blue/20 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für dein Abenteuer?
            </h2>
            
            <p className="font-rajdhani text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schließe dich über <span className="text-neon-red font-bold">500+ Spielern</span> an, 
              die bereits Teil der GEE City Community sind. Deine Reise beginnt jetzt!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={handleDiscordClick}
                className="font-orbitron font-bold text-lg px-8 py-4 bg-neon-red hover:bg-neon-red-bright text-white transition-all duration-300 transform hover:scale-105"
                style={{ boxShadow: 'var(--shadow-neon)' }}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                DISCORD BEITRETEN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadClick}
                className="font-rajdhani font-semibold text-lg px-8 py-4 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                <Download className="mr-2 h-5 w-5" />
                FIVEM HERUNTERLADEN
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="font-rajdhani">Server Online</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="font-rajdhani">42/64 Spieler</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="font-rajdhani">Deutsch/English</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 border border-neon-red/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border border-cyber-blue/40 rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;