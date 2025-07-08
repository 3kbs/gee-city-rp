import React, { useEffect, useState } from 'react';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Aktive Spieler',
    description: 'Täglich online',
    icon: '👥'
  },
  {
    number: 99.9,
    suffix: '%',
    label: 'Server Uptime',
    description: 'Verfügbarkeit',
    icon: '⚡'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Custom Jobs',
    description: 'Verfügbare Berufe',
    icon: '💼'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Support',
    description: 'Rund um die Uhr',
    icon: '🛡️'
  }
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.number / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(stepValue * currentStep, stat.number);
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = currentValue;
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-red/10 via-transparent to-purple-500/10"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
                GEE City in Zahlen
                <span className="text-neon-red animate-pulse"> 📊</span>
              </h2>
              <p className="font-rajdhani text-lg text-gray-400">
                Die Fakten sprechen für sich
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 animate-float">
                    {stat.icon}
                  </div>
                  
                  <div className="font-orbitron text-4xl md:text-5xl font-bold text-neon-red mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters[index] % 1 === 0 ? Math.floor(counters[index]) : counters[index].toFixed(1)}
                    <span className="text-white">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                    {stat.label}
                  </h3>
                  
                  <p className="font-rajdhani text-gray-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;