
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleJoinClick = () => {
    window.open('https://discord.gg/geecity', '_blank');
    toast({
      title: "Willkommen bei GEE City!",
      description: "Du wirst zu unserem Discord Server weitergeleitet. Dort findest du alle Infos zum Beitreten!",
    });
  };


  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Jetzt beitreten!
            <span className="text-neon-red"> 🚀</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 mb-8">
            Bist du bereit für die Zukunft des Roleplay? Dann schließe dich uns jetzt an und werde Teil der GEE City-Familie!
          </p>
          
          <Button 
            size="lg" 
            onClick={handleJoinClick}
            className="font-orbitron font-bold text-xl px-12 py-6 bg-neon-red hover:bg-red-600 text-white border-0 shadow-lg hover:shadow-neon-red/50 transition-all duration-300 transform hover:scale-110 animate-glow-pulse mb-12"
          >
            👉 HIER KLICKEN, UM JETZT BEIZUTRETEN!
          </Button>
        </div>

        <div className="gaming-card">
          <h3 className="font-orbitron text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-2xl mr-3">📋</span>
            Server Regelwerk
          </h3>
          <p className="font-rajdhani text-gray-300 text-lg mb-8">
            Informiere dich über alle wichtigen Regeln und Gesetze des Servers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              size="lg" 
              onClick={() => window.open('/staats-regelwerk', '_blank')}
              className="font-orbitron font-bold px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              📖 Staats Regelwerk
            </Button>
            <Button 
              size="lg" 
              onClick={() => window.open('/fraktions-regelwerk', '_blank')}
              className="font-orbitron font-bold px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
            >
              👥 Fraktions Regelwerk
            </Button>
            <Button 
              size="lg" 
              onClick={() => window.open('/staats-gesetz', '_blank')}
              className="font-orbitron font-bold px-6 py-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white border-0 shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
            >
              ⚖️ Staats Gesetz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
