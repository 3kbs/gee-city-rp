import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Package, Plus, Trash2, Edit } from 'lucide-react';

interface ShopItem {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  description: string;
  imageUrl: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  stock: number;
  effects?: string[];
  requirements?: string[];
  createdAt: Date;
}

const ITEM_CATEGORIES = [
  'Weapons',
  'Clothing',
  'Accessories',
  'Vehicles Parts',
  'Properties',
  'Tools',
  'Consumables',
  'Currency Packs'
];

const ITEM_TYPES = {
  'Weapons': ['Pistol', 'Rifle', 'Shotgun', 'Melee', 'Explosive'],
  'Clothing': ['Shirts', 'Pants', 'Shoes', 'Hats', 'Jackets', 'Masks'],
  'Accessories': ['Watches', 'Chains', 'Glasses', 'Rings', 'Earrings'],
  'Vehicles Parts': ['Engine', 'Wheels', 'Spoilers', 'Paint', 'Exhaust'],
  'Properties': ['Apartments', 'Houses', 'Garages', 'Businesses'],
  'Tools': ['Lockpicks', 'Repair Kits', 'Hacking Devices'],
  'Consumables': ['Health Packs', 'Energy Drinks', 'Food'],
  'Currency Packs': ['Small Pack', 'Medium Pack', 'Large Pack', 'Mega Pack']
};

const RARITY_COLORS = {
  common: 'bg-gray-500 text-white',
  rare: 'bg-blue-500 text-white',
  epic: 'bg-purple-500 text-white',
  legendary: 'bg-yellow-500 text-black'
};

const ItemManagement = () => {
  const { toast } = useToast();

  const [items, setItems] = useState<ShopItem[]>([
    {
      id: 1,
      name: 'Ceramic Pistol',
      category: 'Weapons',
      type: 'Pistol',
      price: 5000,
      description: 'High-quality ceramic pistol with excellent durability',
      imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400',
      rarity: 'rare',
      stock: 25,
      effects: ['Damage: 35', 'Range: Medium', 'Stealth: High'],
      requirements: ['Level 15', 'Gun License'],
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Designer Hoodie',
      category: 'Clothing',
      type: 'Jackets',
      price: 150,
      description: 'Premium streetwear hoodie with custom designs',
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      rarity: 'common',
      stock: 100,
      effects: ['Style: +5', 'Warmth: +3'],
      requirements: [],
      createdAt: new Date('2024-01-12')
    },
    {
      id: 3,
      name: 'Turbo Kit',
      category: 'Vehicles Parts',
      type: 'Engine',
      price: 25000,
      description: 'High-performance turbo kit for sports cars',
      imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      rarity: 'epic',
      stock: 5,
      effects: ['Power: +150 HP', 'Speed: +25%', 'Fuel Consumption: +20%'],
      requirements: ['Mechanic Level 8', 'Compatible Vehicle'],
      createdAt: new Date('2024-01-08')
    }
  ]);

  const [newItem, setNewItem] = useState<Partial<ShopItem>>({
    name: '',
    category: '',
    type: '',
    price: 0,
    description: '',
    imageUrl: '',
    rarity: 'common',
    stock: 0,
    effects: [],
    requirements: []
  });

  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterRarity, setFilterRarity] = useState<string>('all');

  const handleAddItem = () => {
    if (!newItem.name || !newItem.category || !newItem.type || !newItem.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const item: ShopItem = {
      id: Date.now(),
      name: newItem.name!,
      category: newItem.category!,
      type: newItem.type!,
      price: newItem.price!,
      description: newItem.description || '',
      imageUrl: newItem.imageUrl || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      rarity: newItem.rarity as any,
      stock: newItem.stock || 0,
      effects: newItem.effects || [],
      requirements: newItem.requirements || [],
      createdAt: new Date()
    };

    setItems([...items, item]);
    setNewItem({
      name: '',
      category: '',
      type: '',
      price: 0,
      description: '',
      imageUrl: '',
      rarity: 'common',
      stock: 0,
      effects: [],
      requirements: []
    });
    
    toast({
      title: "Item Added",
      description: `${item.name} has been added to the shop`,
    });
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from the shop",
    });
  };

  const handleUpdateStock = (id: number, newStock: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, stock: newStock } : item
    ));
  };

  const filteredItems = items.filter(item => {
    const categoryMatch = filterCategory === 'all' || item.category === filterCategory;
    const rarityMatch = filterRarity === 'all' || item.rarity === filterRarity;
    return categoryMatch && rarityMatch;
  });

  const getAvailableTypes = (category: string) => {
    return ITEM_TYPES[category as keyof typeof ITEM_TYPES] || [];
  };

  return (
    <div className="space-y-6">
      {/* Add New Item */}
      <Card className="gaming-card border border-neon-red/30">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white neon-glow flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Item
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              placeholder="Item Name"
              value={newItem.name || ''}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Select 
              value={newItem.category || ''} 
              onValueChange={(value) => setNewItem({ ...newItem, category: value, type: '' })}
            >
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {ITEM_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-gaming-dark">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select 
              value={newItem.type || ''} 
              onValueChange={(value) => setNewItem({ ...newItem, type: value })}
              disabled={!newItem.category}
            >
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {getAvailableTypes(newItem.category || '').map((type) => (
                  <SelectItem key={type} value={type} className="text-white hover:bg-gaming-dark">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={newItem.rarity || 'common'} onValueChange={(value) => setNewItem({ ...newItem, rarity: value as any })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="common" className="text-white hover:bg-gaming-dark">Common</SelectItem>
                <SelectItem value="rare" className="text-white hover:bg-gaming-dark">Rare</SelectItem>
                <SelectItem value="epic" className="text-white hover:bg-gaming-dark">Epic</SelectItem>
                <SelectItem value="legendary" className="text-white hover:bg-gaming-dark">Legendary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Price"
              type="number"
              value={newItem.price || ''}
              onChange={(e) => setNewItem({ ...newItem, price: parseInt(e.target.value) || 0 })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Stock Quantity"
              type="number"
              value={newItem.stock || ''}
              onChange={(e) => setNewItem({ ...newItem, stock: parseInt(e.target.value) || 0 })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Image URL"
              value={newItem.imageUrl || ''}
              onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
          </div>
          
          <Textarea
            placeholder="Item Description"
            value={newItem.description || ''}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
          />
          
          <Button 
            onClick={handleAddItem}
            className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold"
          >
            Add Item to Shop
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
                {ITEM_CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-gaming-dark">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterRarity} onValueChange={setFilterRarity}>
              <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                <SelectItem value="all" className="text-white hover:bg-gaming-dark">All Rarities</SelectItem>
                <SelectItem value="common" className="text-white hover:bg-gaming-dark">Common</SelectItem>
                <SelectItem value="rare" className="text-white hover:bg-gaming-dark">Rare</SelectItem>
                <SelectItem value="epic" className="text-white hover:bg-gaming-dark">Epic</SelectItem>
                <SelectItem value="legendary" className="text-white hover:bg-gaming-dark">Legendary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Items Inventory */}
      <Card className="gaming-card border border-gaming-gray">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
            <Package className="w-5 h-5" />
            Shop Items ({filteredItems.length})
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gaming-dark/50 rounded-lg border border-gaming-gray/50 overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${RARITY_COLORS[item.rarity]}`}>
                    {item.rarity}
                  </Badge>
                  <Badge className={`absolute top-2 left-2 ${item.stock > 0 ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    Stock: {item.stock}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-orbitron text-white font-semibold">{item.name}</h4>
                    <Badge variant="outline" className="text-neon-red border-neon-red">
                      {item.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-neon-red font-semibold">${item.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{item.category}</span>
                    </div>
                  </div>

                  {item.effects && item.effects.length > 0 && (
                    <div className="mb-3">
                      <span className="text-gray-400 text-sm">Effects:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.effects.map((effect, index) => (
                          <Badge key={index} variant="outline" className="text-xs text-blue-400 border-blue-400">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={item.stock}
                      onChange={(e) => handleUpdateStock(item.id, parseInt(e.target.value) || 0)}
                      className="flex-1 bg-gaming-gray border-gaming-gray text-white"
                      min="0"
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteItem(item.id)}
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

export default ItemManagement;