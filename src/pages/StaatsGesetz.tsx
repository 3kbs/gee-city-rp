import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SolidBackground from '../components/SolidBackground';

const StaatsGesetz = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SolidBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-white hover:text-neon-red transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Hauptseite
        </Button>

        <div className="gaming-card">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Staats Gesetz
          </h1>
          
          <div className="text-center text-gray-400 font-rajdhani text-lg">
            <p>Die Inhalte werden bald hinzugefügt...</p>
            <p className="mt-4">Hier werden die staatlichen Gesetze und Bestimmungen von GEE City zu finden sein.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaatsGesetz;