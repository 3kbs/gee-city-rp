
import React from 'react';

const highlights = [
  {
    icon: '🏆',
    title: 'Revolutionäres Levelsystem',
    description: 'Erlebe ein dynamisches XP-System, das jede Interaktion belohnt',
    features: [
      '✨ Belohnungen für alle Aktivitäten',
      '📊 Monatliches Leaderboard für die Top 20 Spieler',
      '💰 Belohnungen für die Top 3 (Echtgeld & Ingame-Vorteile)',
      '⚖️ Ein fairer Wettbewerb für alle!'
    ]
  },
  {
    icon: '⚔️',
    title: 'Fraktionen & Jobs 2.0',
    description: 'Ein komplett neues Fraktionssystem wartet auf dich',
    features: [
      '🗺️ Territoriale Zonen: Erobern, kontrollieren und profitieren',
      '💸 Passive Einkünfte durch Ressourcenproduktion',
      '🚔 Überarbeitete Polizei- und Medizin-Jobs',
      '🔧 Mechaniker bleibt erhalten, aber mit Verbesserungen'
    ]
  },
  {
    icon: '👥',
    title: 'Neue Möglichkeiten für Zivilisten',
    description: 'Als Zivilist bist du der Schlüssel zur Verbindung zwischen PD und Fraktionen',
    features: [
      '🛒 Zugang zu legalen und illegalen Märkten',
      '🚜 Interaktive Routen (Kevlar, Schwarzpulver, Minenfelder)',
      '🤝 Informanten-System und strategische Marktplätze'
    ]
  },
  {
    icon: '💻',
    title: 'Serveroptimierung & Wirtschaft',
    description: 'Wir arbeiten hart daran, den Server noch besser zu machen',
    features: [
      '⚡ Optimierte Performance',
      '💳 Neue Währungspolitik und Anti-Inflations-Mechanismen',
      '📅 Roadmap für kontinuierliche Updates'
    ]
  }
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Unsere Highlights im Überblick
            <span className="text-neon-red animate-pulse"> 🚀</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="gaming-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 animate-float">
                  {highlight.icon}
                </div>
                <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white group-hover:text-neon-red transition-colors duration-300">
                  {highlight.title}
                </h3>
              </div>
              
              <p className="font-rajdhani text-gray-300 text-lg mb-6 leading-relaxed">
                {highlight.description}
              </p>
              
              <ul className="space-y-3">
                {highlight.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="font-rajdhani text-gray-400 text-base flex items-start group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="mr-2 flex-shrink-0">{feature.split(' ')[0]}</span>
                    <span>{feature.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
