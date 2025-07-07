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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="font-orbitron text-2xl font-bold text-foreground">GEE City Store</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Main
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-5xl md:text-6xl font-black text-foreground mb-6">
            GEE City Store
          </h1>
          <p className="font-rajdhani text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover premium content, exclusive items, and unlock the full potential of your GEE City experience.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">Featured</Badge>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
                  GEE City Premium Pass
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  The ultimate GEE City experience with exclusive access to premium features, 
                  custom content, and VIP support.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="font-orbitron text-3xl font-bold text-foreground">€19.99</span>
                  <span className="text-muted-foreground line-through text-xl">€29.99</span>
                  <Badge variant="secondary">33% Off</Badge>
                </div>
                <Button size="lg" className="font-rajdhani font-semibold">
                  Get Premium Pass
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
                  alt="Premium Pass"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Products
            </h2>
            <p className="font-rajdhani text-lg text-muted-foreground">
              Choose from our selection of premium content and features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-orbitron font-bold text-foreground text-lg">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button size="sm" className="font-rajdhani">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to enhance your experience?
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground mb-8">
            Join thousands of players who have upgraded their GEE City adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-rajdhani font-semibold">
              Browse All Products
            </Button>
            <Button variant="outline" size="lg" className="font-rajdhani font-semibold">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;