import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Player {
  x: number;
  y: number;
  velocityY: number;
  onGround: boolean;
  width: number;
  height: number;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Coin {
  x: number;
  y: number;
  collected: boolean;
}

interface Enemy {
  x: number;
  y: number;
  velocityX: number;
  width: number;
  height: number;
}

const Minigame = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const gameAreaRef = useRef<HTMLDivElement>(null);
  
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [player, setPlayer] = useState<Player>({
    x: 50,
    y: 300,
    velocityY: 0,
    onGround: false,
    width: 40,
    height: 40
  });

  const platforms: Platform[] = [
    { x: 0, y: 400, width: 200, height: 20 },
    { x: 250, y: 350, width: 150, height: 20 },
    { x: 450, y: 300, width: 100, height: 20 },
    { x: 600, y: 250, width: 120, height: 20 },
    { x: 800, y: 200, width: 100, height: 20 },
    { x: 950, y: 350, width: 150, height: 20 },
    { x: 1150, y: 300, width: 100, height: 20 },
  ];

  const [coins, setCoins] = useState<Coin[]>([
    { x: 120, y: 360, collected: false },
    { x: 320, y: 310, collected: false },
    { x: 500, y: 260, collected: false },
    { x: 650, y: 210, collected: false },
    { x: 850, y: 160, collected: false },
    { x: 1000, y: 310, collected: false },
  ]);

  const [enemies, setEnemies] = useState<Enemy[]>([
    { x: 300, y: 320, velocityX: -1, width: 30, height: 30 },
    { x: 700, y: 220, velocityX: 1, width: 30, height: 30 },
    { x: 1100, y: 270, velocityX: -1, width: 30, height: 30 },
  ]);

  const [keys, setKeys] = useState<{[key: string]: boolean}>({});
  const [cameraX, setCameraX] = useState(0);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => ({ ...prev, [e.code]: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => ({ ...prev, [e.code]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Collision detection
  const checkCollision = (rect1: any, rect2: any) => {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
  };

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = setInterval(() => {
      setPlayer(prevPlayer => {
        let newPlayer = { ...prevPlayer };
        
        // Apply gravity
        newPlayer.velocityY += 0.8;
        newPlayer.y += newPlayer.velocityY;
        newPlayer.onGround = false;

        // Handle movement
        if (keys['ArrowLeft'] || keys['KeyA']) {
          newPlayer.x -= 5;
        }
        if (keys['ArrowRight'] || keys['KeyD']) {
          newPlayer.x += 5;
        }
        if ((keys['Space'] || keys['ArrowUp'] || keys['KeyW']) && prevPlayer.onGround) {
          newPlayer.velocityY = -15;
        }

        // Platform collision
        platforms.forEach(platform => {
          if (checkCollision(newPlayer, platform)) {
            if (prevPlayer.y + prevPlayer.height <= platform.y && newPlayer.velocityY > 0) {
              newPlayer.y = platform.y - newPlayer.height;
              newPlayer.velocityY = 0;
              newPlayer.onGround = true;
            }
          }
        });

        // Ground collision
        if (newPlayer.y > 420) {
          newPlayer.y = 420 - newPlayer.height;
          newPlayer.velocityY = 0;
          newPlayer.onGround = true;
        }

        // Boundary check
        if (newPlayer.x < 0) newPlayer.x = 0;
        if (newPlayer.x > 1200) newPlayer.x = 1200;

        // Death by falling
        if (newPlayer.y > 500) {
          setLives(prev => prev - 1);
          if (lives <= 1) {
            setGameState('gameOver');
          } else {
            // Reset player position
            newPlayer.x = 50;
            newPlayer.y = 300;
            newPlayer.velocityY = 0;
          }
        }

        return newPlayer;
      });

      // Update camera to follow player
      setCameraX(prevCamera => {
        const targetCamera = Math.max(0, Math.min(player.x - 400, 600));
        return prevCamera + (targetCamera - prevCamera) * 0.1;
      });

      // Update enemies
      setEnemies(prevEnemies => 
        prevEnemies.map(enemy => {
          let newEnemy = { ...enemy };
          newEnemy.x += newEnemy.velocityX;
          
          // Bounce off platforms
          let onPlatform = false;
          platforms.forEach(platform => {
            if (newEnemy.x >= platform.x - 20 && newEnemy.x <= platform.x + platform.width + 20) {
              if (Math.abs(newEnemy.y + newEnemy.height - platform.y) < 5) {
                onPlatform = true;
              }
            }
          });
          
          if (!onPlatform || newEnemy.x < 0 || newEnemy.x > 1200) {
            newEnemy.velocityX *= -1;
          }

          return newEnemy;
        })
      );

      // Check coin collection
      setCoins(prevCoins => 
        prevCoins.map(coin => {
          if (!coin.collected && checkCollision(player, { ...coin, width: 20, height: 20 })) {
            setScore(prev => prev + 100);
            return { ...coin, collected: true };
          }
          return coin;
        })
      );

      // Check enemy collision
      enemies.forEach(enemy => {
        if (checkCollision(player, enemy)) {
          setLives(prev => prev - 1);
          if (lives <= 1) {
            setGameState('gameOver');
          } else {
            // Reset player position
            setPlayer(prev => ({ ...prev, x: 50, y: 300, velocityY: 0 }));
          }
        }
      });

    }, 1000 / 60); // 60 FPS

    return () => clearInterval(gameLoop);
  }, [gameState, keys, player, lives, enemies]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setPlayer({ x: 50, y: 300, velocityY: 0, onGround: false, width: 40, height: 40 });
    setCameraX(0);
    setCoins(prev => prev.map(coin => ({ ...coin, collected: false })));
  };

  const resetGame = () => {
    setGameState('menu');
    setScore(0);
    setLives(3);
  };

  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-orbitron text-6xl font-bold mb-8">🍄 MARIO QUEST</h1>
          <p className="font-rajdhani text-xl mb-8">Use ARROW KEYS or WASD to move and jump!</p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={startGame}
              className="font-orbitron font-bold text-lg px-8 py-4 bg-green-500 hover:bg-green-600"
            >
              🎮 START GAME
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/')}
              className="font-rajdhani font-semibold text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
            >
              🏠 HOME
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-400 to-red-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-orbitron text-6xl font-bold mb-4">💀 GAME OVER</h1>
          <p className="font-rajdhani text-2xl mb-4">Final Score: {score}</p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={startGame}
              className="font-orbitron font-bold text-lg px-8 py-4 bg-green-500 hover:bg-green-600"
            >
              🔄 PLAY AGAIN
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/')}
              className="font-rajdhani font-semibold text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-red-600"
            >
              🏠 HOME
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 overflow-hidden">
      {/* HUD */}
      <div className="fixed top-4 left-4 z-10 text-white font-orbitron">
        <div className="bg-black/50 px-4 py-2 rounded">
          <div>Score: {score}</div>
          <div>Lives: {'❤️'.repeat(lives)}</div>
        </div>
      </div>

      {/* Game Area */}
      <div 
        ref={gameAreaRef}
        className="relative w-full h-screen overflow-hidden"
        style={{ transform: `translateX(${-cameraX}px)` }}
      >
        {/* Platforms */}
        {platforms.map((platform, i) => (
          <div
            key={i}
            className="absolute bg-green-600 border-2 border-green-800"
            style={{
              left: platform.x,
              top: platform.y,
              width: platform.width,
              height: platform.height,
            }}
          />
        ))}

        {/* Coins */}
        {coins.map((coin, i) => (
          !coin.collected && (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: coin.x,
                top: coin.y,
              }}
            >
              🪙
            </div>
          )
        ))}

        {/* Enemies */}
        {enemies.map((enemy, i) => (
          <div
            key={i}
            className="absolute text-2xl"
            style={{
              left: enemy.x,
              top: enemy.y,
            }}
          >
            👾
          </div>
        ))}

        {/* Player */}
        <div
          className="absolute text-3xl transition-all duration-100"
          style={{
            left: player.x,
            top: player.y,
            transform: keys['ArrowLeft'] || keys['KeyA'] ? 'scaleX(-1)' : 'scaleX(1)',
          }}
        >
          🍄
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-20 bg-green-800" />
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 text-white font-rajdhani text-sm bg-black/50 px-3 py-2 rounded">
        Arrow Keys / WASD: Move & Jump • Collect coins! • Avoid enemies!
      </div>
    </div>
  );
};

export default Minigame;