
import React from 'react';

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Grundlegende Implementierung',
    icon: '🚧',
    status: 'In Arbeit',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20'
  },
  {
    phase: 'Phase 2',
    title: 'Beta-Testing mit ausgewählten Spielern',
    icon: '🔍',
    status: 'Geplant',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20'
  },
  {
    phase: 'Phase 3',
    title: 'Vollständige Integration aller Features',
    icon: '🚀',
    status: 'Bald',
    color: 'text-neon-red',
    bgColor: 'bg-neon-red/20'
  },
  {
    phase: 'Phase 4',
    title: 'Feinabstimmung und Feedback-Umsetzung',
    icon: '🎯',
    status: 'Zukunft',
    color: 'text-green-400',
    bgColor: 'bg-green-400/20'
  }
];

const RoadmapSection = () => {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap zur Vollendung von GEE City v 0.7
            <span className="text-neon-red"> 🗓️</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
            So planen wir die Einführung unserer neuen Features
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-neon-red via-red-400 to-neon-red opacity-60"></div>

          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="gaming-card group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${phase.bgColor} px-3 py-1 rounded-full`}>
                        <span className={`font-orbitron font-bold text-sm ${phase.color}`}>
                          {phase.status}
                        </span>
                      </div>
                      <div className="text-3xl animate-float">
                        {phase.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-neon-red transition-colors duration-300">
                      {phase.phase}
                    </h3>
                    
                    <p className="font-rajdhani text-gray-300 text-lg">
                      {phase.title}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-20 w-6 h-6 bg-neon-red rounded-full border-4 border-gaming-dark shadow-lg animate-glow-pulse">
                  <div className="absolute inset-0 bg-neon-red rounded-full animate-ping opacity-75"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
