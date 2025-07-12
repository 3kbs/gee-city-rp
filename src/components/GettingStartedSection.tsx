import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Play, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    icon: Download,
    title: 'FiveM installieren',
    description: 'Lade FiveM herunter und installiere es',
    details: [
      'Besuche fivem.net',
      'Lade die neueste Version herunter',
      'Installiere FiveM',
      'Starte das Programm'
    ],
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: Users,
    title: 'Discord beitreten',
    description: 'Tritt unserem Discord Server bei',
    details: [
      'Klicke auf den Discord Link',
      'Akzeptiere die Serverregeln',
      'Stelle dich in #vorstellung vor',
      'Hole dir deine Rollen'
    ],
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-purple-600/10'
  },
    {
    icon: Play,
    title: 'Einreisen!',
    description: 'Starte dein Abenteuer in GEE City',
    details: [
      'Verbinde mit dem Server',
      'Erstelle deinen Charakter',
      'Absolviere die Einreise',
      'Beginne dein Roleplay'
    ],
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-green-600/10'
  },
  {
    icon: Play,
    title: 'Loslegen!',
    description: 'Starte dein Abenteuer.',
    details: [
      'Hole dir dein erstes Auto',
      'Finde einen lokrativen Nebenjob',
      'Bewerbe dich bei einem Job',
      'Genieße deine Zeit'
    ],
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-green-600/10'
  }
];

const GettingStartedSection = () => {
  const { toast } = useToast();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const handleStepClick = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/geecity', '_blank');
    toast({
      title: "Discord öffnet sich!",
      description: "Du wirst zu unserem Discord Server weitergeleitet.",
    });
  };

  const handleFiveMClick = () => {
    window.open('https://fivem.net', '_blank');
    toast({
      title: "FiveM Website öffnet sich!",
      description: "Du wirst zur offiziellen FiveM Website weitergeleitet.",
    });
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            So startest du bei uns
            <span className="text-neon-red animate-pulse"> 🚀</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
            In nur 4 einfachen Schritten zu deinem ersten Roleplay-Erlebnis
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`glass-card interactive-glow group cursor-pointer p-6 relative overflow-hidden transition-all duration-500 ${
                expandedStep === index ? 'md:col-span-2 lg:col-span-4' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleStepClick(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-white/10 ${step.color} group-hover:scale-110 transition-transform duration-300 mr-4`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="text-neon-red font-orbitron font-bold text-2xl">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-neon-red transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="font-rajdhani text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                  {step.description}
                </p>

                {expandedStep === index && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="bg-white/5 rounded-lg p-3 border border-white/10"
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-neon-red/20 flex items-center justify-center mr-3 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-neon-red"></div>
                          </div>
                          <span className="font-rajdhani text-gray-300 text-sm">
                            {detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleFiveMClick}
              className="font-orbitron font-bold text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              FiveM HERUNTERLADEN
            </Button>
            
            <Button 
              size="lg"
              onClick={handleDiscordClick}
              className="font-orbitron font-bold text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Users className="mr-2 h-5 w-5" />
              DISCORD BEITRETEN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;