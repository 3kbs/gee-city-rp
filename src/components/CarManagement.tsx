import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Car, Plus, Edit, Trash2, Upload } from 'lucide-react';

interface CarModel {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  specifications: {
    engine: string;
    horsepower: number;
    topSpeed: number;
    acceleration: string;
  };
  status: 'available' | 'limited' | 'sold_out';
  createdAt: Date;
}

const CAR_CATEGORIES = [
  'Sports Car',
  'Luxury',
  'SUV',
  'Truck',
  'Motorcycle',
  'Electric',
  'Classic',
  'Tuner'
];

const CAR_BRANDS = [
  'BMW',
  'Mercedes',
  'Audi',
  'Ferrari',
  'Lamborghini',
  'Porsche',
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Nissan',
  'McLaren'
];

const CarManagement = () => {
  const { toast } = useToast();

  const [cars, setCars] = useState<CarModel[]>([
    {
      id: 1,
      name: 'M4 Competition',
      brand: 'BMW',
      category: 'Sports Car',
      price: 75000,
      description: 'High-performance sports coupe with twin-turbo engine',
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
      specifications: {
        engine: 'Twin-Turbo V6',
        horsepower: 503,
        topSpeed: 250,
        acceleration: '0-60 in 3.8s'
      },
      status: 'available',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Huracan Evo',
      brand: 'Lamborghini',
      category: 'Sports Car',
      price: 208000,
      description: 'Iconic Italian supercar with naturally aspirated V10',
      imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
      specifications: {
        engine: 'V10 Naturally Aspirated',
        horsepower: 630,
        topSpeed: 325,
        acceleration: '0-60 in 2.9s'
      },
      status: 'limited',
      createdAt: new Date('2024-01-10')
    },
    {
      id: 3,
      name: 'Model S Plaid',
      brand: 'Tesla',
      category: 'Electric',
      price: 135000,
      description: 'Ultra-high performance electric sedan',
      imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400',
      specifications: {
        engine: 'Triple Motor Electric',
        horsepower: 1020,
        topSpeed: 320,
        acceleration: '0-60 in 1.9s'
      },
      status: 'available',
      createdAt: new Date('2024-01-05')
    }
  ]);

  const [newCar, setNewCar] = useState<Partial<CarModel>>({
    name: '',
    brand: '',
    category: '',
    price: 0,
    description: '',
    imageUrl: '',
    specifications: {
      engine: '',
      horsepower: 0,
      topSpeed: 0,
      acceleration: ''
    },
    status: 'available'
  });

  const [editingCar, setEditingCar] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterBrand, setFilterBrand] = useState<string>('all');

  const handleAddCar = () => {
    if (!newCar.name || !newCar.brand || !newCar.category || !newCar.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const car: CarModel = {
      id: Date.now(),
      name: newCar.name!,
      brand: newCar.brand!,
      category: newCar.category!,
      price: newCar.price!,
      description: newCar.description || '',
      imageUrl: newCar.imageUrl || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
      specifications: newCar.specifications!,
      status: newCar.status as 'available' | 'limited' | 'sold_out',
      createdAt: new Date()
    };

    setCars([...cars, car]);
    setNewCar({
      name: '',
      brand: '',
      category: '',
      price: 0,
      description: '',
      imageUrl: '',
      specifications: { engine: '', horsepower: 0, topSpeed: 0, acceleration: '' },
      status: 'available'
    });
    
    toast({
      title: "Car Added",
      description: `${car.name} has been added to the inventory`,
    });
  };

  const handleDeleteCar = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
    toast({
      title: "Car Removed",
      description: "Car has been removed from inventory",
    });
  };

  const handleUpdateStatus = (id: number, status: 'available' | 'limited' | 'sold_out') => {
    setCars(cars.map(car => 
      car.id === id ? { ...car, status } : car
    ));
  };

  const filteredCars = cars.filter(car => {
    const categoryMatch = filterCategory === 'all' || car.category === filterCategory;
    const brandMatch = filterBrand === 'all' || car.brand === filterBrand;
    return categoryMatch && brandMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500 text-white';
      case 'limited': return 'bg-yellow-500 text-white';
      case 'sold_out': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Car */}
      <Card className="gaming-card border border-neon-red/30">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white neon-glow flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Car
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              placeholder="Car Name"
              value={newCar.name || ''}
              onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Select value={newCar.brand || ''} onValueChange={(value) => setNewCar({ ...newCar, brand: value })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {CAR_BRANDS.map((brand) => (
                  <SelectItem key={brand} value={brand} className="text-white hover:bg-gaming-dark">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={newCar.category || ''} onValueChange={(value) => setNewCar({ ...newCar, category: value })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {CAR_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-gaming-dark">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Price"
              type="number"
              value={newCar.price || ''}
              onChange={(e) => setNewCar({ ...newCar, price: parseInt(e.target.value) || 0 })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Image URL"
              value={newCar.imageUrl || ''}
              onChange={(e) => setNewCar({ ...newCar, imageUrl: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Select value={newCar.status || 'available'} onValueChange={(value) => setNewCar({ ...newCar, status: value as any })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="available" className="text-white hover:bg-gaming-dark">Available</SelectItem>
                <SelectItem value="limited" className="text-white hover:bg-gaming-dark">Limited</SelectItem>
                <SelectItem value="sold_out" className="text-white hover:bg-gaming-dark">Sold Out</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Textarea
            placeholder="Car Description"
            value={newCar.description || ''}
            onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
            className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Engine Type"
              value={newCar.specifications?.engine || ''}
              onChange={(e) => setNewCar({ 
                ...newCar, 
                specifications: { ...newCar.specifications!, engine: e.target.value }
              })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Horsepower"
              type="number"
              value={newCar.specifications?.horsepower || ''}
              onChange={(e) => setNewCar({ 
                ...newCar, 
                specifications: { ...newCar.specifications!, horsepower: parseInt(e.target.value) || 0 }
              })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Top Speed (km/h)"
              type="number"
              value={newCar.specifications?.topSpeed || ''}
              onChange={(e) => setNewCar({ 
                ...newCar, 
                specifications: { ...newCar.specifications!, topSpeed: parseInt(e.target.value) || 0 }
              })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="0-60 Acceleration"
              value={newCar.specifications?.acceleration || ''}
              onChange={(e) => setNewCar({ 
                ...newCar, 
                specifications: { ...newCar.specifications!, acceleration: e.target.value }
              })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
          </div>
          
          <Button 
            onClick={handleAddCar}
            className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold"
          >
            Add Car to Inventory
          </Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="gaming-card border border-gaming-gray">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-300 font-rajdhani">Filter by:</span>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="all" className="text-white hover:bg-gaming-dark">All Categories</SelectItem>
                {CAR_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-gaming-dark">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterBrand} onValueChange={setFilterBrand}>
              <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="all" className="text-white hover:bg-gaming-dark">All Brands</SelectItem>
                {CAR_BRANDS.map((brand) => (
                  <SelectItem key={brand} value={brand} className="text-white hover:bg-gaming-dark">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Car Inventory */}
      <Card className="gaming-card border border-gaming-gray">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
            <Car className="w-5 h-5" />
            Car Inventory ({filteredCars.length})
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-gaming-dark/50 rounded-lg border border-gaming-gray/50 overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={car.imageUrl} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getStatusColor(car.status)}`}>
                    {car.status.replace('_', ' ')}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-orbitron text-white font-semibold">{car.name}</h4>
                    <Badge variant="outline" className="text-neon-red border-neon-red">
                      {car.brand}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{car.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-neon-red font-semibold">${car.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Power:</span>
                      <span className="text-white">{car.specifications.horsepower} HP</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Top Speed:</span>
                      <span className="text-white">{car.specifications.topSpeed} km/h</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={car.status} onValueChange={(value) => handleUpdateStatus(car.id, value as any)}>
                      <SelectTrigger className="flex-1 bg-gaming-gray border-gaming-gray text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gaming-gray border-gaming-gray">
                        <SelectItem value="available" className="text-white hover:bg-gaming-dark">Available</SelectItem>
                        <SelectItem value="limited" className="text-white hover:bg-gaming-dark">Limited</SelectItem>
                        <SelectItem value="sold_out" className="text-white hover:bg-gaming-dark">Sold Out</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteCar(car.id)}
                      className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarManagement;