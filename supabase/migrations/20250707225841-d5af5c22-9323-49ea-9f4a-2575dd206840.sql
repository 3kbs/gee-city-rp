-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create shop_items table for item management
CREATE TABLE public.shop_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  image_url TEXT,
  rarity TEXT NOT NULL DEFAULT 'common' CHECK (rarity IN ('common', 'rare', 'epic', 'legendary')),
  stock INTEGER NOT NULL DEFAULT 0,
  effects TEXT[],
  requirements TEXT[],
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create cars table for car management
CREATE TABLE public.cars (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER,
  color TEXT,
  license_plate TEXT,
  image_url TEXT,
  owner_name TEXT,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'in_use', 'maintenance')),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create team_members table for team management
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  department TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for shop_items
CREATE POLICY "Users can view their own shop items" ON public.shop_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own shop items" ON public.shop_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own shop items" ON public.shop_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own shop items" ON public.shop_items
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for cars
CREATE POLICY "Users can view their own cars" ON public.cars
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own cars" ON public.cars
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cars" ON public.cars
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cars" ON public.cars
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for team_members
CREATE POLICY "Users can view their own team members" ON public.team_members
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own team members" ON public.team_members
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own team members" ON public.team_members
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own team members" ON public.team_members
  FOR DELETE USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_shop_items_updated_at
  BEFORE UPDATE ON public.shop_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cars_updated_at
  BEFORE UPDATE ON public.cars
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();