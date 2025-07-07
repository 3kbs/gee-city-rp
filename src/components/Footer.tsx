
import React from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLegalClick = (type: 'impressum' | 'datenschutz') => {
    toast({
      title: type === 'impressum' ? 'Impressum' : 'Datenschutz',
      description: `${type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'} wird in Kürze verfügbar sein.`,
    });
  };

  return (
    <footer className="relative border-t border-gray-800 py-12 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-orbitron text-3xl font-bold text-white mb-4">
            <span className="text-neon-red">GEE CITY</span>
          </h3>
          <p className="font-rajdhani text-gray-400 text-lg">
            Die Zukunft des Midcore Roleplay
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-gray-400 font-rajdhani">
            <button 
              onClick={() => handleLegalClick('impressum')}
              className="hover:text-neon-red transition-colors duration-300 cursor-pointer"
            >
              📄 Impressum
            </button>
            <button 
              onClick={() => handleLegalClick('datenschutz')}
              className="hover:text-neon-red transition-colors duration-300 cursor-pointer"
            >
              🔒 Datenschutz
            </button>
          </div>

          <div className="text-gray-500 font-rajdhani text-sm">
            © 2024 GEE City. Alle Rechte vorbehalten.
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 font-rajdhani text-sm">
            Made with ❤️ for the Gaming Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
