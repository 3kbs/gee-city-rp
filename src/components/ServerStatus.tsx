import React, { useState, useEffect } from 'react';
import { Activity, Users, Server, Clock } from 'lucide-react';

const ServerStatus = () => {
  const [onlinePlayers] = useState(42); // Mock data - in real app would fetch from API
  const [maxPlayers] = useState(64);
  const [uptime] = useState('99.8%');
  
  return (
    <section className="relative py-16 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 text-center">
          <h2 className="font-orbitron text-3xl font-bold text-white mb-8">
            Server Status
            <div className="inline-flex items-center ml-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-lg ml-2 font-rajdhani">ONLINE</span>
            </div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <Users className="w-8 h-8 text-neon-red mb-3" />
              <span className="font-orbitron text-2xl font-bold text-white">
                {onlinePlayers}/{maxPlayers}
              </span>
              <span className="font-rajdhani text-gray-400">Spieler Online</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <Activity className="w-8 h-8 text-green-400 mb-3" />
              <span className="font-orbitron text-2xl font-bold text-white">{uptime}</span>
              <span className="font-rajdhani text-gray-400">Uptime</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <Server className="w-8 h-8 text-cyber-blue mb-3" />
              <span className="font-orbitron text-2xl font-bold text-white">35ms</span>
              <span className="font-rajdhani text-gray-400">Ping</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <div className="flex items-center justify-center text-green-400 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-rajdhani font-semibold">Nächster Restart in: 2h 34m</span>
            </div>
            <p className="font-rajdhani text-gray-300 text-sm">
              Geplante Wartungsarbeiten heute um 04:00 Uhr (5 Minuten)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;