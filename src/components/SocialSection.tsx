
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'Website',
    icon: '🌐',
    url: 'https://gee-city-rp.com',
    displayUrl: 'gee-city-rp.com',
    color: 'text-blue-400',
    hoverColor: 'hover:text-blue-300'
  },
  {
    name: 'Discord',
    icon: '📱',
    url: 'https://discord.gg/geecity',
    displayUrl: 'Trete unserem Discord bei!',
    color: 'text-purple-400',
    hoverColor: 'hover:text-purple-300'
  },
  {
    name: 'Instagram',
    icon: '📸',
    url: 'https://www.instagram.com/gee_city_official',
    displayUrl: '@gee_city_official',
    color: 'text-pink-400',
    hoverColor: 'hover:text-pink-300'
  },
  {
    name: 'YouTube',
    icon: '🎥',
    url: 'https://www.youtube.com/channel/UCl0hWfBbf_9C9ZAZ-SD5sNw',
    displayUrl: '@Gee_City_Official',
    color: 'text-red-400',
    hoverColor: 'hover:text-red-300'
  }
];

const SocialSection = () => {
  const { toast } = useToast();

  const handleSocialClick = (link: typeof socialLinks[0]) => {
    window.open(link.url, '_blank');
    toast({
      title: `${link.name} wird geöffnet!`,
      description: `Du wirst zu ${link.name} weitergeleitet.`,
    });
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Bleib auf dem Laufenden!
            <span className="text-neon-red"> 📢</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400">
            Folge uns auf unseren Social-Media-Kanälen, um keine Neuigkeiten zu verpassen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="glass-card interactive-glow group cursor-pointer p-6 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleSocialClick(link)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 animate-float">
                  {link.icon}
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-neon-red transition-colors duration-300">
                  {link.name}
                </h3>
                <p className={`font-rajdhani ${link.color} ${link.hoverColor} transition-colors duration-300`}>
                  {link.displayUrl}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="glass-card bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-red/10 via-transparent to-purple-500/10"></div>
          <div className="relative z-10">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Unser Versprechen an dich ❤️
            </h3>
            <p className="font-rajdhani text-lg text-gray-300 mb-6 leading-relaxed">
              Die Transformation von GEE City ist eine große Herausforderung, 
              aber wir sind fest entschlossen, den besten Server zu schaffen, den die FiveM-Community je gesehen hat. 
              Deine Geduld und Unterstützung während dieser Zeit bedeuten uns sehr viel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
