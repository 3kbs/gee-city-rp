import React from 'react';
import { Shield, Users, Zap, Trophy, Map, Coins } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Anti-Cheat System',
    description: 'Modernste Sicherheitstechnologie für fairen Spielspaß',
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: Users,
    title: 'Aktive Community',
    description: 'Über 10+ aktive Spieler täglich online',
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-green-600/10'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: '99.9% Uptime mit modernster Server-Hardware',
    color: 'text-yellow-400',
    bgColor: 'from-yellow-500/20 to-yellow-600/10'
  },
  {
    icon: Trophy,
    title: 'Events & Turniere',
    description: 'Regelmäßige Events mit attraktiven Preisen',
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-purple-600/10'
  },
  {
    icon: Map,
    title: 'Custom Map',
    description: 'Einzigartige deutsche Stadtlandschaft',
    color: 'text-orange-400',
    bgColor: 'from-orange-500/20 to-orange-600/10'
  },
  {
    icon: Coins,
    title: 'Balanced Economy',
    description: 'Faire Wirtschaft ohne Pay-to-Win',
    color: 'text-cyan-400',
    bgColor: 'from-cyan-500/20 to-cyan-600/10'
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Warum GEE City?
            <span className="text-neon-red animate-pulse"> ⭐</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
            Entdecke die Features, die GEE City zum besten FiveM Server machen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card interactive-glow group cursor-pointer p-6 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-white/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-neon-red transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-rajdhani text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;