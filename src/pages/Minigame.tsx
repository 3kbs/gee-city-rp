import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Target, Trophy, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface ScoreEntry {
  score: number;
  date: string;
  accuracy: number;
}

const Minigame = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState<Target[]>([]);
  const [missedClicks, setMissedClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [highScores, setHighScores] = useState<ScoreEntry[]>([]);
  const [targetId, setTargetId] = useState(0);

  // Load high scores from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('geecity-highscores');
    if (saved) {
      setHighScores(JSON.parse(saved));
    }
  }, []);

  // Save high scores to localStorage
  const saveHighScores = useCallback((scores: ScoreEntry[]) => {
    localStorage.setItem('geecity-highscores', JSON.stringify(scores));
    setHighScores(scores);
  }, []);

  // Generate random target
  const generateTarget = useCallback(() => {
    const size = Math.random() * 30 + 40; // 40-70px
    const x = Math.random() * (window.innerWidth - size - 100) + 50;
    const y = Math.random() * (window.innerHeight - size - 200) + 100;
    
    return {
      id: targetId,
      x,
      y,
      size
    };
  }, [targetId]);

  // Start game
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    setMissedClicks(0);
    setTotalClicks(0);
    setTargets([generateTarget()]);
    setTargetId(1);
  };

  // Game timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
  }, [timeLeft, gameState]);

  // End game
  const endGame = () => {
    setGameState('finished');
    const accuracy = totalClicks > 0 ? Math.round((score / totalClicks) * 100) : 0;
    
    const newScore: ScoreEntry = {
      score,
      date: new Date().toLocaleDateString('de-DE'),
      accuracy
    };

    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    saveHighScores(updatedScores);
    
    toast({
      title: "Spiel beendet!",
      description: `Du hast ${score} Punkte erreicht mit ${accuracy}% Trefferquote!`,
    });
  };

  // Handle target click
  const handleTargetClick = (targetId: number) => {
    setScore(score + 1);
    setTotalClicks(totalClicks + 1);
    setTargets(targets.filter(t => t.id !== targetId));
    
    // Add new target after short delay
    setTimeout(() => {
      setTargetId(prev => prev + 1);
      setTargets([generateTarget()]);
    }, 200);
  };

  // Handle missed click
  const handleMissedClick = () => {
    setMissedClicks(missedClicks + 1);
    setTotalClicks(totalClicks + 1);
  };

  // Target spawn effect
  useEffect(() => {
    if (gameState === 'playing' && targets.length === 0) {
      const timer = setTimeout(() => {
        setTargetId(prev => prev + 1);
        setTargets([generateTarget()]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [targets, gameState, generateTarget]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-black to-gaming-gray relative overflow-hidden">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="border-neon-red text-neon-red hover:bg-neon-red hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>
      </div>

      {/* Game Menu */}
      {gameState === 'menu' && (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gaming-card p-8 mb-8">
              <Target className="w-16 h-16 text-neon-red mx-auto mb-6" />
              <h1 className="font-orbitron text-4xl font-bold text-white mb-4">
                TARGET RUSH
              </h1>
              <p className="font-rajdhani text-xl text-gray-300 mb-8">
                Klicke so viele Ziele wie möglich in 30 Sekunden!
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="font-orbitron font-bold text-lg px-8 py-4 bg-neon-red hover:bg-red-600 text-white"
              >
                🎮 SPIEL STARTEN
              </Button>
            </div>

            {/* High Scores */}
            <Card className="gaming-card p-6">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-neon-red mr-2" />
                <h2 className="font-orbitron text-2xl font-bold text-white">Bestenliste</h2>
              </div>
              {highScores.length > 0 ? (
                <div className="space-y-2">
                  {highScores.map((entry, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-300 font-rajdhani">
                      <span className="text-neon-red font-bold">#{index + 1}</span>
                      <span>{entry.score} Punkte</span>
                      <span>{entry.accuracy}% Genauigkeit</span>
                      <span className="text-sm">{entry.date}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 font-rajdhani">Noch keine Scores vorhanden. Spiele dein erstes Spiel!</p>
              )}
            </Card>
          </div>
        </div>
      )}

      {/* Game Playing */}
      {gameState === 'playing' && (
        <div className="relative w-full h-screen" onClick={handleMissedClick}>
          {/* Game UI */}
          <div className="absolute top-4 right-4 z-40 space-y-2">
            <Card className="gaming-card p-4">
              <div className="flex items-center text-neon-red font-orbitron font-bold">
                <Timer className="w-5 h-5 mr-2" />
                {timeLeft}s
              </div>
            </Card>
            <Card className="gaming-card p-4">
              <div className="text-white font-orbitron font-bold">
                Score: {score}
              </div>
            </Card>
          </div>

          {/* Targets */}
          {targets.map(target => (
            <div
              key={target.id}
              className="absolute rounded-full bg-neon-red cursor-pointer transform transition-all duration-200 hover:scale-110 animate-pulse-slow"
              style={{
                left: target.x,
                top: target.y,
                width: target.size,
                height: target.size,
                boxShadow: '0 0 20px rgba(255, 0, 64, 0.6)'
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleTargetClick(target.id);
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
                <Target className="w-1/2 h-1/2 text-white" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Game Finished */}
      {gameState === 'finished' && (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="gaming-card p-8">
              <Trophy className="w-16 h-16 text-neon-red mx-auto mb-6" />
              <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
                Spiel beendet!
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="gaming-card p-4">
                  <div className="text-neon-red text-3xl font-orbitron font-bold">{score}</div>
                  <div className="text-gray-300 font-rajdhani">Punkte</div>
                </div>
                <div className="gaming-card p-4">
                  <div className="text-neon-red text-3xl font-orbitron font-bold">
                    {totalClicks > 0 ? Math.round((score / totalClicks) * 100) : 0}%
                  </div>
                  <div className="text-gray-300 font-rajdhani">Genauigkeit</div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  onClick={startGame}
                  className="font-orbitron font-bold text-lg px-8 py-4 bg-neon-red hover:bg-red-600 text-white mr-4"
                >
                  🔄 NOCHMAL SPIELEN
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setGameState('menu')}
                  className="font-rajdhani border-neon-red text-neon-red hover:bg-neon-red hover:text-white"
                >
                  📊 BESTENLISTE
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minigame;