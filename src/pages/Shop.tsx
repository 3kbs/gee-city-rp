import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'GEE City Premium Pass',
    price: '€19.99',
    originalPrice: '€29.99',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    category: 'Membership',
    description: 'Unlock exclusive features and premium content',
    badge: 'Best Value'
  },
  {
    id: 2,
    name: 'Starter Pack',
    price: '€9.99',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    category: 'Bundle',
    description: 'Perfect for new players getting started'
  },
  {
    id: 3,
    name: 'VIP Experience',
    price: '€49.99',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    category: 'Premium',
    description: 'Ultimate GEE City experience with all perks',
    badge: 'Most Popular'
  },
  {
    id: 4,
    name: 'Custom Vehicle Pack',
    price: '€14.99',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    category: 'Vehicles',
    description: 'Exclusive vehicles for your character'
  },
  {
    id: 5,
    name: 'Property Bundle',
    price: '€24.99',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'Real Estate',
    description: 'Premium properties and apartments'
  },
  {
    id: 6,
    name: 'Season Pass',
    price: '€34.99',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    category: 'Seasonal',
    description: 'Access to all seasonal content and events'
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-gaming-dark relative">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-gaming-gray to-gaming-dark opacity-90 pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      {/* Header */}
      <header className="relative z-50 border-b border-gaming-gray bg-gaming-dark/95 backdrop-blur sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="font-orbitron text-2xl font-bold text-white neon-glow">GEE City Store</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all duration-300"
            >
              Back to Main
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gaming-dark/80 to-gaming-gray/50">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-5xl md:text-6xl font-black text-white mb-6 animate-glow-pulse">
            GEE City Store
            <span className="text-neon-red"> 🛒</span>
          </h1>
          <p className="font-rajdhani text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover premium content, exclusive items, and unlock the full potential of your GEE City experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full animate-glow-pulse"></div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="gaming-card bg-gradient-to-r from-neon-red/20 via-gaming-gray to-neon-red/10 p-8 md:p-12 mb-16 border border-neon-red/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-neon-red text-white animate-glow-pulse">Featured</Badge>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4 neon-glow">
                  GEE City Premium Pass
                </h2>
                <p className="text-gray-300 text-lg mb-6 font-rajdhani">
                  The ultimate GEE City experience with exclusive access to premium features, 
                  custom content, and VIP support.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="font-orbitron text-3xl font-bold text-neon-red animate-glow-pulse">€19.99</span>
                  <span className="text-gray-400 line-through text-xl">€29.99</span>
                  <Badge variant="secondary" className="bg-dark-red text-white">33% Off</Badge>
                </div>
                <Button 
                  size="lg" 
                  className="font-rajdhani font-semibold bg-neon-red hover:bg-red-600 text-white border-0 shadow-lg hover:shadow-neon-red/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Premium Pass
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
                  alt="Premium Pass"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover border border-neon-red/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-red/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4 neon-glow">
              All Products
            </h2>
            <p className="font-rajdhani text-lg text-gray-300">
              Choose from our selection of premium content and features
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="gaming-card group hover:scale-105 transition-all duration-300 border border-gaming-gray hover:border-neon-red bg-gaming-gray/50 backdrop-blur">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/60 to-transparent"></div>
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-neon-red text-white animate-glow-pulse">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs bg-gaming-gray border border-neon-red/30 text-gray-300">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-white mb-2 group-hover:text-neon-red transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 font-rajdhani">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-orbitron font-bold text-neon-red text-lg">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="font-rajdhani bg-neon-red hover:bg-red-600 text-white border-0 transition-all duration-300 hover:shadow-neon-red/50"
                      >
                        Buy Now
                      </Button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gaming-gray/30 to-gaming-dark/50 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6 neon-glow">
            Ready to enhance your experience?
            <span className="text-neon-red"> ⚡</span>
          </h2>
          <p className="font-rajdhani text-lg text-gray-300 mb-8">
            Join thousands of players who have upgraded their GEE City adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-rajdhani font-semibold bg-neon-red hover:bg-red-600 text-white border-0 shadow-lg hover:shadow-neon-red/50 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Products
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-rajdhani font-semibold border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;