import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Cookie, TrendingUp, Zap, Factory, Crown, Award } from 'lucide-react';

interface Generator {
  id: string;
  name: string;
  baseCost: number;
  baseProduction: number;
  count: number;
  icon: string;
  description: string;
}

interface Upgrade {
  id: string;
  name: string;
  cost: number;
  multiplier: number;
  description: string;
  purchased: boolean;
  icon: string;
  type: 'click' | 'production' | 'generator';
  targetGenerator?: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  requirement: number;
  type: 'cookies' | 'clicks' | 'generators';
  unlocked: boolean;
  icon: string;
}

const Minigame = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const saveIntervalRef = useRef<NodeJS.Timeout>();
  const productionIntervalRef = useRef<NodeJS.Timeout>();

  const [cookies, setCookies] = useState(0);
  const [totalCookies, setTotalCookies] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [clickEffect, setClickEffect] = useState(false);

  const initialGenerators: Generator[] = [
    { id: 'cursor', name: 'Auto-Clicker', baseCost: 15, baseProduction: 0.1, count: 0, icon: '👆', description: 'Clicks the cookie for you' },
    { id: 'grandma', name: 'Grandma', baseCost: 100, baseProduction: 1, count: 0, icon: '👵', description: 'A nice grandma to bake cookies' },
    { id: 'farm', name: 'Cookie Farm', baseCost: 1100, baseProduction: 8, count: 0, icon: '🚜', description: 'Grows cookie plants' },
    { id: 'mine', name: 'Cookie Mine', baseCost: 12000, baseProduction: 47, count: 0, icon: '⛏️', description: 'Mines cookie ore' },
    { id: 'factory', name: 'Cookie Factory', baseCost: 130000, baseProduction: 260, count: 0, icon: '🏭', description: 'Mass produces cookies' },
    { id: 'bank', name: 'Cookie Bank', baseCost: 1400000, baseProduction: 1400, count: 0, icon: '🏦', description: 'Generates cookies through interest' },
    { id: 'temple', name: 'Cookie Temple', baseCost: 20000000, baseProduction: 7800, count: 0, icon: '⛩️', description: 'Monks bless cookies into existence' },
    { id: 'portal', name: 'Cookie Portal', baseCost: 330000000, baseProduction: 44000, count: 0, icon: '🌀', description: 'Imports cookies from another dimension' },
  ];

  const initialUpgrades: Upgrade[] = [
    { id: 'click1', name: 'Reinforced Finger', cost: 100, multiplier: 2, description: 'Double click power', purchased: false, icon: '💪', type: 'click' },
    { id: 'click2', name: 'Steel Mouse', cost: 1000, multiplier: 2, description: 'Double click power again', purchased: false, icon: '🖱️', type: 'click' },
    { id: 'click3', name: 'Diamond Cursor', cost: 10000, multiplier: 3, description: 'Triple click power', purchased: false, icon: '💎', type: 'click' },
    { id: 'production1', name: 'Cookie Blessing', cost: 50000, multiplier: 2, description: 'Double all production', purchased: false, icon: '✨', type: 'production' },
    { id: 'cursor1', name: 'Faster Cursors', cost: 1000, multiplier: 2, description: 'Double cursor efficiency', purchased: false, icon: '⚡', type: 'generator', targetGenerator: 'cursor' },
    { id: 'grandma1', name: 'Cookie Recipes', cost: 5000, multiplier: 2, description: 'Double grandma efficiency', purchased: false, icon: '📖', type: 'generator', targetGenerator: 'grandma' },
  ];

  const initialAchievements: Achievement[] = [
    { id: 'first_cookie', name: 'First Cookie', description: 'Bake your first cookie', requirement: 1, type: 'cookies', unlocked: false, icon: '🍪' },
    { id: 'hundred_cookies', name: 'Cookie Apprentice', description: 'Bake 100 cookies', requirement: 100, type: 'cookies', unlocked: false, icon: '👨‍🍳' },
    { id: 'thousand_cookies', name: 'Cookie Master', description: 'Bake 1,000 cookies', requirement: 1000, type: 'cookies', unlocked: false, icon: '👑' },
    { id: 'million_cookies', name: 'Cookie Legend', description: 'Bake 1,000,000 cookies', requirement: 1000000, type: 'cookies', unlocked: false, icon: '🏆' },
    { id: 'hundred_clicks', name: 'Clicker', description: 'Click 100 times', requirement: 100, type: 'clicks', unlocked: false, icon: '👆' },
    { id: 'first_generator', name: 'Automation', description: 'Buy your first generator', requirement: 1, type: 'generators', unlocked: false, icon: '🤖' },
  ];

  const [generators, setGenerators] = useState<Generator[]>(initialGenerators);
  const [upgrades, setUpgrades] = useState<Upgrade[]>(initialUpgrades);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);

  // Load save data
  useEffect(() => {
    const savedData = localStorage.getItem('cookieClickerSave');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setCookies(data.cookies || 0);
        setTotalCookies(data.totalCookies || 0);
        setClickValue(data.clickValue || 1);
        setTotalClicks(data.totalClicks || 0);
        setGenerators(data.generators || initialGenerators);
        setUpgrades(data.upgrades || initialUpgrades);
        setAchievements(data.achievements || initialAchievements);
      } catch (error) {
        console.error('Failed to load save data:', error);
      }
    }
  }, []);

  // Auto-save
  useEffect(() => {
    saveIntervalRef.current = setInterval(() => {
      const saveData = {
        cookies,
        totalCookies,
        clickValue,
        totalClicks,
        generators,
        upgrades,
        achievements,
        lastSave: Date.now()
      };
      localStorage.setItem('cookieClickerSave', JSON.stringify(saveData));
    }, 5000);

    return () => {
      if (saveIntervalRef.current) {
        clearInterval(saveIntervalRef.current);
      }
    };
  }, [cookies, totalCookies, clickValue, totalClicks, generators, upgrades, achievements]);

  // Calculate cookies per second
  useEffect(() => {
    let cps = 0;
    generators.forEach(generator => {
      let production = generator.baseProduction * generator.count;
      
      // Apply generator-specific upgrades
      upgrades.forEach(upgrade => {
        if (upgrade.purchased && upgrade.type === 'generator' && upgrade.targetGenerator === generator.id) {
          production *= upgrade.multiplier;
        }
      });

      // Apply global production upgrades
      upgrades.forEach(upgrade => {
        if (upgrade.purchased && upgrade.type === 'production') {
          production *= upgrade.multiplier;
        }
      });

      cps += production;
    });
    setCookiesPerSecond(cps);
  }, [generators, upgrades]);

  // Production loop
  useEffect(() => {
    if (cookiesPerSecond > 0) {
      productionIntervalRef.current = setInterval(() => {
        const production = cookiesPerSecond / 10; // Update 10 times per second for smoothness
        setCookies(prev => prev + production);
        setTotalCookies(prev => prev + production);
      }, 100);
    }

    return () => {
      if (productionIntervalRef.current) {
        clearInterval(productionIntervalRef.current);
      }
    };
  }, [cookiesPerSecond]);

  // Check achievements
  useEffect(() => {
    setAchievements(prev => prev.map(achievement => {
      if (achievement.unlocked) return achievement;

      let progress = 0;
      switch (achievement.type) {
        case 'cookies':
          progress = totalCookies;
          break;
        case 'clicks':
          progress = totalClicks;
          break;
        case 'generators':
          progress = generators.reduce((sum, gen) => sum + gen.count, 0);
          break;
      }

      if (progress >= achievement.requirement) {
        toast({
          title: "Achievement Unlocked! 🏆",
          description: `${achievement.name}: ${achievement.description}`,
        });
        return { ...achievement, unlocked: true };
      }
      return achievement;
    }));
  }, [totalCookies, totalClicks, generators, toast]);

  const handleCookieClick = () => {
    let currentClickValue = clickValue;
    
    // Apply click upgrades
    upgrades.forEach(upgrade => {
      if (upgrade.purchased && upgrade.type === 'click') {
        currentClickValue *= upgrade.multiplier;
      }
    });

    setCookies(prev => prev + currentClickValue);
    setTotalCookies(prev => prev + currentClickValue);
    setTotalClicks(prev => prev + 1);
    
    // Click effect animation
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 150);
  };

  const buyGenerator = (generatorId: string) => {
    const generator = generators.find(g => g.id === generatorId);
    if (!generator) return;

    const cost = Math.floor(generator.baseCost * Math.pow(1.15, generator.count));
    
    if (cookies >= cost) {
      setCookies(prev => prev - cost);
      setGenerators(prev => prev.map(g => 
        g.id === generatorId ? { ...g, count: g.count + 1 } : g
      ));
      
      toast({
        title: "Generator Purchased! 🏪",
        description: `Bought ${generator.name} for ${formatNumber(cost)} cookies`,
      });
    }
  };

  const buyUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade || upgrade.purchased) return;

    if (cookies >= upgrade.cost) {
      setCookies(prev => prev - upgrade.cost);
      setUpgrades(prev => prev.map(u => 
        u.id === upgradeId ? { ...u, purchased: true } : u
      ));
      
      if (upgrade.type === 'click') {
        setClickValue(prev => prev * upgrade.multiplier);
      }
      
      toast({
        title: "Upgrade Purchased! ⬆️",
        description: `${upgrade.name}: ${upgrade.description}`,
      });
    }
  };

  const formatNumber = (num: number): string => {
    if (num < 1000) return Math.floor(num).toString();
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
    if (num < 1000000000000) return (num / 1000000000).toFixed(1) + 'B';
    return (num / 1000000000000).toFixed(1) + 'T';
  };

  const resetGame = () => {
    localStorage.removeItem('cookieClickerSave');
    setCookies(0);
    setTotalCookies(0);
    setClickValue(1);
    setTotalClicks(0);
    setGenerators(initialGenerators);
    setUpgrades(initialUpgrades);
    setAchievements(initialAchievements);
    toast({
      title: "Game Reset! 🔄",
      description: "Starting fresh with a new bakery!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-orbitron text-4xl font-bold text-amber-800 flex items-center gap-2">
            <Cookie className="w-8 h-8" />
            Cookie Empire
          </h1>
          <p className="text-amber-600 font-rajdhani">Build your cookie empire!</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/')}>
            🏠 Home
          </Button>
          <Button variant="destructive" onClick={resetGame}>
            🔄 Reset
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Cookie Area */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="text-6xl font-bold text-amber-800 mb-2">
                  {formatNumber(cookies)} 🍪
                </div>
                <div className="text-lg text-amber-600">
                  {formatNumber(cookiesPerSecond)} cookies per second
                </div>
                <div className="text-sm text-amber-500">
                  Total baked: {formatNumber(totalCookies)} | Clicks: {totalClicks}
                </div>
              </div>
              
              <button
                onClick={handleCookieClick}
                className={`text-8xl hover:scale-110 active:scale-95 transition-all duration-150 cursor-pointer select-none ${
                  clickEffect ? 'scale-125' : ''
                }`}
                style={{ filter: clickEffect ? 'brightness(1.3)' : 'none' }}
              >
                🍪
              </button>
              
              <div className="mt-4 text-lg text-amber-700">
                Click value: {formatNumber(clickValue * upgrades.filter(u => u.purchased && u.type === 'click').reduce((acc, u) => acc * u.multiplier, 1))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements ({achievements.filter(a => a.unlocked).length}/{achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`p-2 rounded border text-center ${
                      achievement.unlocked 
                        ? 'bg-yellow-100 border-yellow-300' 
                        : 'bg-gray-100 border-gray-300 opacity-50'
                    }`}
                  >
                    <div className="text-lg">{achievement.icon}</div>
                    <div className="text-xs font-semibold">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Store */}
        <div className="space-y-6">
          {/* Generators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="w-5 h-5" />
                Generators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {generators.map(generator => {
                const cost = Math.floor(generator.baseCost * Math.pow(1.15, generator.count));
                const canAfford = cookies >= cost;
                
                return (
                  <Button
                    key={generator.id}
                    variant={canAfford ? "default" : "outline"}
                    className="w-full p-3 h-auto justify-between"
                    onClick={() => buyGenerator(generator.id)}
                    disabled={!canAfford}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{generator.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold">{generator.name}</div>
                        <div className="text-xs opacity-75">{generator.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{formatNumber(cost)}</div>
                      <Badge variant="secondary">{generator.count}</Badge>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* Upgrades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Upgrades
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {upgrades.filter(upgrade => !upgrade.purchased).map(upgrade => {
                const canAfford = cookies >= upgrade.cost;
                
                return (
                  <Button
                    key={upgrade.id}
                    variant={canAfford ? "default" : "outline"}
                    className="w-full p-3 h-auto justify-between"
                    onClick={() => buyUpgrade(upgrade.id)}
                    disabled={!canAfford}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{upgrade.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold">{upgrade.name}</div>
                        <div className="text-xs opacity-75">{upgrade.description}</div>
                      </div>
                    </div>
                    <div className="font-bold">{formatNumber(upgrade.cost)}</div>
                  </Button>
                );
              })}
              {upgrades.every(upgrade => upgrade.purchased) && (
                <div className="text-center text-gray-500 py-4">
                  All upgrades purchased! 🎉
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Minigame;