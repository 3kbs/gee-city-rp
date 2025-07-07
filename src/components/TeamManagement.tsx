import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Users, UserPlus, Settings, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { supabase as authService } from '@/lib/auth';

interface TeamMember {
  id: string;
  name: string;
  email?: string;
  role: string;
  phone?: string;
  avatar_url?: string;
  department?: string;
  status: 'active' | 'inactive' | 'pending';
  created_at?: string;
  updated_at?: string;
}

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

const AVAILABLE_PERMISSIONS = [
  'manage_users',
  'manage_content',
  'manage_tasks',
  'view_analytics',
  'system_settings',
  'moderate_chat',
  'manage_vehicles',
  'manage_shop'
];

const TeamManagement = () => {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const [roles, setRoles] = useState<Role[]>([
    {
      id: 'super_admin',
      name: 'Super Admin',
      permissions: AVAILABLE_PERMISSIONS
    },
    {
      id: 'content_manager',
      name: 'Content Manager',
      permissions: ['manage_content', 'manage_vehicles', 'manage_shop']
    },
    {
      id: 'support_agent',
      name: 'Support Agent',
      permissions: ['view_analytics', 'moderate_chat']
    }
  ]);

  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: '',
    phone: '',
    department: ''
  });

  // Load team members from database
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data: { user } } = await authService.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTeamMembers((data || []).map(member => ({
        ...member,
        status: member.status as 'active' | 'inactive' | 'pending'
      })));
    } catch (error) {
      console.error('Error fetching team members:', error);
      toast({
        title: "Error",
        description: "Failed to load team members",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async () => {
    if (!newMember.name || !newMember.role) {
      toast({
        title: "Error",
        description: "Please fill in name and role",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: { user } } = await authService.auth.getUser();
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to add team members",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('team_members')
        .insert({
          name: newMember.name,
          email: newMember.email,
          role: newMember.role,
          phone: newMember.phone,
          department: newMember.department,
          status: 'active',
          user_id: user.id
        })
        .select()
        .single();

      if (error) throw error;

      const typedMember = {
        ...data,
        status: data.status as 'active' | 'inactive' | 'pending'
      };
      setTeamMembers([typedMember, ...teamMembers]);
      setNewMember({ name: '', email: '', role: '', phone: '', department: '' });
      
      toast({
        title: "Team Member Added",
        description: `${data.name} has been added to the team`,
      });
    } catch (error) {
      console.error('Error adding team member:', error);
      toast({
        title: "Error",
        description: "Failed to add team member",
        variant: "destructive",
      });
    }
  };

  const handleRemoveMember = async (id: string) => {
    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTeamMembers(teamMembers.filter(member => member.id !== id));
      toast({
        title: "Member Removed",
        description: "Team member has been removed",
      });
    } catch (error) {
      console.error('Error removing team member:', error);
      toast({
        title: "Error",
        description: "Failed to remove team member",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-white font-rajdhani">Loading team members...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Add New Member */}
      <Card className="gaming-card border border-neon-red/30">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white neon-glow flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Add Team Member
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input
              placeholder="Full Name *"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Role *"
              value={newMember.role}
              onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Phone Number"
              value={newMember.phone}
              onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Department"
              value={newMember.department}
              onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
            />
          </div>
          <Button 
            onClick={handleAddMember}
            className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold"
          >
            Add Member
          </Button>
        </CardContent>
      </Card>

      {/* Team Members List */}
      <Card className="gaming-card border border-gaming-gray">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team Members ({teamMembers.length})
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 bg-gaming-dark/50 rounded-lg border border-gaming-gray/50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-orbitron text-white font-semibold">{member.name}</h4>
                    <Badge className={member.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                      {member.status}
                    </Badge>
                    <Badge variant="outline" className="text-neon-red border-neon-red">
                      {member.role}
                    </Badge>
                  </div>
                  {member.email && <p className="text-gray-300 text-sm mb-1">{member.email}</p>}
                  {member.phone && <p className="text-gray-300 text-sm mb-1">Phone: {member.phone}</p>}
                  {member.department && <p className="text-gray-300 text-sm mb-1">Department: {member.department}</p>}
                  <p className="text-gray-400 text-xs">Created: {member.created_at ? new Date(member.created_at).toLocaleDateString() : 'N/A'}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleRemoveMember(member.id)}
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default TeamManagement;