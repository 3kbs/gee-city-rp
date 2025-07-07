
import React from 'react';

const SolidBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-black to-gaming-gray animate-gradient-shift"></div>
      
      {/* Animated overlay with red accents */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/10 via-transparent to-transparent animate-pulse-slow"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-red/30 rotate-45 animate-float-random opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-neon-red/5 rounded-full blur-xl animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle scanning lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-red/5 to-transparent h-32 w-full animate-scan opacity-30"></div>
    </div>
  );
};

export default SolidBackground;
