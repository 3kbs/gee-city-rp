import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Car, Plus, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface CarData {
  id: string;
  name: string;
  make: string;
  model: string;
  year?: number;
  color?: string;
  license_plate?: string;
  image_url?: string;
  owner_name?: string;
  status: 'available' | 'in_use' | 'maintenance';
  created_at?: string;
  updated_at?: string;
}

const CAR_MAKES = [
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
  'McLaren',
  'Tesla'
];

const CarManagement = () => {
  const { toast } = useToast();
  const [cars, setCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cars from database
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCars((data || []).map(car => ({
        ...car,
        status: car.status as 'available' | 'in_use' | 'maintenance'
      })));
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast({
        title: "Error",
        description: "Failed to load cars",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const [newCar, setNewCar] = useState({
    name: '',
    make: '',
    model: '',
    year: new Date().getFullYear(),
    color: '',
    license_plate: '',
    image_url: '',
    owner_name: '',
    status: 'available' as 'available' | 'in_use' | 'maintenance'
  });

  const [filterMake, setFilterMake] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const handleAddCar = async () => {
    if (!newCar.name || !newCar.make || !newCar.model) {
      toast({
        title: "Error",
        description: "Please fill in name, make, and model",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to add cars",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('cars')
        .insert({
          name: newCar.name,
          make: newCar.make,
          model: newCar.model,
          year: newCar.year,
          color: newCar.color,
          license_plate: newCar.license_plate,
          image_url: newCar.image_url || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
          owner_name: newCar.owner_name,
          status: newCar.status,
          user_id: user.id
        })
        .select()
        .single();

      if (error) throw error;

      const typedCar = {
        ...data,
        status: data.status as 'available' | 'in_use' | 'maintenance'
      };
      setCars([typedCar, ...cars]);
      setNewCar({
        name: '',
        make: '',
        model: '',
        year: new Date().getFullYear(),
        color: '',
        license_plate: '',
        image_url: '',
        owner_name: '',
        status: 'available'
      });
      
      toast({
        title: "Car Added",
        description: `${data.name} has been added to the fleet`,
      });
    } catch (error) {
      console.error('Error adding car:', error);
      toast({
        title: "Error",
        description: "Failed to add car",
        variant: "destructive",
      });
    }
  };

  const handleDeleteCar = async (id: string) => {
    try {
      const { error } = await supabase
        .from('cars')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setCars(cars.filter(car => car.id !== id));
      toast({
        title: "Car Removed",
        description: "Car has been removed from the fleet",
      });
    } catch (error) {
      console.error('Error removing car:', error);
      toast({
        title: "Error",
        description: "Failed to remove car",
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'available' | 'in_use' | 'maintenance') => {
    try {
      const { error } = await supabase
        .from('cars')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setCars(cars.map(car => 
        car.id === id ? { ...car, status: newStatus } : car
      ));
      toast({
        title: "Status Updated",
        description: "Car status has been updated",
      });
    } catch (error) {
      console.error('Error updating car status:', error);
      toast({
        title: "Error",
        description: "Failed to update car status",
        variant: "destructive",
      });
    }
  };

  const filteredCars = cars.filter(car => {
    const makeMatch = filterMake === 'all' || car.make === filterMake;
    const statusMatch = filterStatus === 'all' || car.status === filterStatus;
    return makeMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500 text-white';
      case 'in_use': return 'bg-blue-500 text-white';
      case 'maintenance': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-white font-rajdhani">Loading cars...</div>
      </div>
    );
  }

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
              placeholder="Car Name *"
              value={newCar.name}
              onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Select value={newCar.make} onValueChange={(value) => setNewCar({ ...newCar, make: value })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Make *" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {CAR_MAKES.map((make) => (
                  <SelectItem key={make} value={make} className="text-white hover:bg-gaming-dark">
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Model *"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Year"
              type="number"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: parseInt(e.target.value) || new Date().getFullYear() })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Color"
              value={newCar.color}
              onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="License Plate"
              value={newCar.license_plate}
              onChange={(e) => setNewCar({ ...newCar, license_plate: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Owner Name"
              value={newCar.owner_name}
              onChange={(e) => setNewCar({ ...newCar, owner_name: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Image URL"
              value={newCar.image_url}
              onChange={(e) => setNewCar({ ...newCar, image_url: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Select value={newCar.status} onValueChange={(value) => setNewCar({ ...newCar, status: value as any })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="available" className="text-white hover:bg-gaming-dark">Available</SelectItem>
                <SelectItem value="in_use" className="text-white hover:bg-gaming-dark">In Use</SelectItem>
                <SelectItem value="maintenance" className="text-white hover:bg-gaming-dark">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={handleAddCar}
            className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold"
          >
            Add Car to Fleet
          </Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="gaming-card border border-gaming-gray">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-300 font-rajdhani">Filter by:</span>
            <Select value={filterMake} onValueChange={setFilterMake}>
              <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="all" className="text-white hover:bg-gaming-dark">All Makes</SelectItem>
                {CAR_MAKES.map((make) => (
                  <SelectItem key={make} value={make} className="text-white hover:bg-gaming-dark">
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="all" className="text-white hover:bg-gaming-dark">All Status</SelectItem>
                <SelectItem value="available" className="text-white hover:bg-gaming-dark">Available</SelectItem>
                <SelectItem value="in_use" className="text-white hover:bg-gaming-dark">In Use</SelectItem>
                <SelectItem value="maintenance" className="text-white hover:bg-gaming-dark">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Car Fleet */}
      <Card className="gaming-card border border-gaming-gray">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
            <Car className="w-5 h-5" />
            Car Fleet ({filteredCars.length})
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-gaming-dark/50 rounded-lg border border-gaming-gray/50 overflow-hidden">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={car.image_url || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500'} 
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
                      {car.make}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Model:</span>
                      <span className="text-white">{car.model}</span>
                    </div>
                    {car.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year:</span>
                        <span className="text-white">{car.year}</span>
                      </div>
                    )}
                    {car.color && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Color:</span>
                        <span className="text-white">{car.color}</span>
                      </div>
                    )}
                    {car.license_plate && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">License:</span>
                        <span className="text-white">{car.license_plate}</span>
                      </div>
                    )}
                    {car.owner_name && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Owner:</span>
                        <span className="text-white">{car.owner_name}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-400">Created:</span>
                      <span className="text-white">{car.created_at ? new Date(car.created_at).toLocaleDateString() : 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={car.status} onValueChange={(value) => handleStatusChange(car.id, value as any)}>
                      <SelectTrigger className="flex-1 bg-gaming-gray border-gaming-gray text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gaming-gray border-gaming-gray">
                        <SelectItem value="available" className="text-white hover:bg-gaming-dark">Available</SelectItem>
                        <SelectItem value="in_use" className="text-white hover:bg-gaming-dark">In Use</SelectItem>
                        <SelectItem value="maintenance" className="text-white hover:bg-gaming-dark">Maintenance</SelectItem>
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