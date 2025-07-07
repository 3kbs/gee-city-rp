
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

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@geecity.com';
  };

  const handlePhoneClick = () => {
    toast({
      title: "Support Hotline",
      description: "Rufe uns an unter +49 123 456 789 für direkten Support!",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gaming-card">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">❓</span>
              Noch Fragen?
            </h3>
            <p className="font-rajdhani text-gray-300 text-lg mb-6">
              Schau in unserem FAQ vorbei oder kontaktiere uns direkt:
            </p>
            <div className="space-y-4">
              <div 
                className="flex items-center text-gray-400 hover:text-neon-red transition-colors cursor-pointer"
                onClick={handleEmailClick}
              >
                <span className="text-xl mr-3">📧</span>
                <span className="font-rajdhani">support@geecity.com</span>
              </div>
              <div 
                className="flex items-center text-gray-400 hover:text-neon-red transition-colors cursor-pointer"
                onClick={handlePhoneClick}
              >
                <span className="text-xl mr-3">📞</span>
                <span className="font-rajdhani">+49 123 456 789</span>
              </div>
            </div>
          </div>

          <div className="gaming-card">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">🌟</span>
              Warum GEE City?
            </h3>
            <div className="space-y-4 font-rajdhani text-gray-300">
              <div className="flex items-start">
                <span className="text-neon-red mr-3">▶</span>
                <span><strong>Für Profis:</strong> Realistisches Roleplay und tiefgehende Mechaniken</span>
              </div>
              <div className="flex items-start">
                <span className="text-neon-red mr-3">▶</span>
                <span><strong>Für Einsteiger:</strong> Einfache Zugänge und intuitive Systeme</span>
              </div>
              <div className="flex items-start">
                <span className="text-neon-red mr-3">▶</span>
                <span><strong>Für alle:</strong> Eine lebendige Welt voller Abenteuer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
