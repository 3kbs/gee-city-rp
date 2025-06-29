
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800 py-12 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-orbitron text-3xl font-bold text-white mb-4">
            <span className="text-neon-red">GEE CITY</span> V2
          </h3>
          <p className="font-rajdhani text-gray-400 text-lg">
            Die Zukunft des Midcore Roleplay
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-gray-400 font-rajdhani">
            <a href="#" className="hover:text-neon-red transition-colors duration-300">
              📄 Impressum
            </a>
            <a href="#" className="hover:text-neon-red transition-colors duration-300">
              🔒 Datenschutz
            </a>
          </div>

          <div className="text-gray-500 font-rajdhani text-sm">
            © 2024 GEE City V2. Alle Rechte vorbehalten.
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
