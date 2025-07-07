import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Login: Attempting login with:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log('Login: Auth response:', { data, error });

      if (error) {
        console.log('Login: Error occurred:', error);
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('Login: Success, navigating to /admin');
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard!",
        });
        navigate('/admin');
      }
    } catch (error) {
      console.log('Login: Catch block error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gaming-dark relative flex items-center justify-center">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-gaming-gray to-gaming-dark opacity-90 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-red rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <Card className="gaming-card border border-neon-red/30">
          <CardHeader className="text-center">
            <div className="mb-4">
              <h1 className="font-orbitron text-3xl font-bold text-white neon-glow mb-2">
                GEE City Admin
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full animate-glow-pulse"></div>
            </div>
            <CardTitle className="font-rajdhani text-xl text-gray-300">
              Administrator Login
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 font-rajdhani">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@geecity.com"
                  required
                  className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400 focus:border-neon-red"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 font-rajdhani">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400 focus:border-neon-red"
                />
              </div>
              
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold text-lg py-3 transition-all duration-300 hover:shadow-neon-red/50"
              >
                {loading ? 'Signing In...' : 'Access Admin Dashboard'}
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gaming-gray">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="w-full border-neon-red/50 text-gray-300 hover:bg-neon-red/10 hover:text-white transition-all duration-300"
              >
                ← Back to Main Site
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-rajdhani">
            Authorized personnel only. All access is monitored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;