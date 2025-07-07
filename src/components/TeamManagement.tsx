import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Users, UserPlus, Settings, Trash2 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  lastActive: Date;
  status: 'active' | 'inactive';
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

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'John Admin',
      email: 'admin@geecity.com',
      role: 'Super Admin',
      permissions: AVAILABLE_PERMISSIONS,
      lastActive: new Date('2024-01-20'),
      status: 'active'
    },
    {
      id: 2,
      name: 'Sarah Manager',
      email: 'sarah@geecity.com',
      role: 'Content Manager',
      permissions: ['manage_content', 'manage_vehicles', 'manage_shop'],
      lastActive: new Date('2024-01-19'),
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Support',
      email: 'mike@geecity.com',
      role: 'Support Agent',
      permissions: ['view_analytics', 'moderate_chat'],
      lastActive: new Date('2024-01-18'),
      status: 'inactive'
    }
  ]);

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
    permissions: [] as string[]
  });

  const [editingRole, setEditingRole] = useState<string | null>(null);
  const [editPermissions, setEditPermissions] = useState<string[]>([]);

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email || !newMember.role) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const selectedRole = roles.find(r => r.id === newMember.role);
    const member: TeamMember = {
      id: Date.now(),
      name: newMember.name,
      email: newMember.email,
      role: selectedRole?.name || newMember.role,
      permissions: selectedRole?.permissions || [],
      lastActive: new Date(),
      status: 'active'
    };

    setTeamMembers([...teamMembers, member]);
    setNewMember({ name: '', email: '', role: '', permissions: [] });
    
    toast({
      title: "Team Member Added",
      description: `${member.name} has been added to the team`,
    });
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
    toast({
      title: "Member Removed",
      description: "Team member has been removed",
    });
  };

  const handleTogglePermission = (permission: string) => {
    setEditPermissions(prev => 
      prev.includes(permission) 
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSaveRolePermissions = (roleId: string) => {
    setRoles(roles.map(role => 
      role.id === roleId 
        ? { ...role, permissions: editPermissions }
        : role
    ));
    
    // Update team members with this role
    setTeamMembers(teamMembers.map(member => {
      const memberRole = roles.find(r => r.name === member.role);
      return memberRole?.id === roleId 
        ? { ...member, permissions: editPermissions }
        : member;
    }));

    setEditingRole(null);
    setEditPermissions([]);
    
    toast({
      title: "Permissions Updated",
      description: "Role permissions have been saved",
    });
  };

  const startEditingRole = (role: Role) => {
    setEditingRole(role.id);
    setEditPermissions([...role.permissions]);
  };

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Full Name"
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
            <Select value={newMember.role} onValueChange={(value) => setNewMember({ ...newMember, role: value })}>
              <SelectTrigger className="bg-gaming-gray border-gaming-gray text-white">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-gray">
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id} className="text-white hover:bg-gaming-dark">
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
                  <p className="text-gray-300 text-sm mb-1">{member.email}</p>
                  <p className="text-gray-400 text-xs">Last active: {member.lastActive.toLocaleDateString()}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.permissions.map((permission) => (
                      <Badge key={permission} variant="outline" className="text-xs text-blue-400 border-blue-400">
                        {permission.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
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

      {/* Role Permissions Management */}
      <Card className="gaming-card border border-gaming-gray">
        <CardHeader>
          <h3 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Role Permissions
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {roles.map((role) => (
              <div key={role.id} className="p-4 bg-gaming-dark/30 rounded-lg border border-gaming-gray/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-orbitron text-white font-semibold">{role.name}</h4>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => startEditingRole(role)}
                    className="border-neon-red text-neon-red hover:bg-neon-red hover:text-white"
                  >
                    Edit Permissions
                  </Button>
                </div>
                
                {editingRole === role.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {AVAILABLE_PERMISSIONS.map((permission) => (
                        <div key={permission} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${role.id}-${permission}`}
                            checked={editPermissions.includes(permission)}
                            onCheckedChange={() => handleTogglePermission(permission)}
                          />
                          <label 
                            htmlFor={`${role.id}-${permission}`}
                            className="text-sm text-gray-300 cursor-pointer"
                          >
                            {permission.replace('_', ' ')}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleSaveRolePermissions(role.id)}
                        className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani"
                      >
                        Save Changes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setEditingRole(null)}
                        className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission) => (
                      <Badge key={permission} variant="outline" className="text-xs text-blue-400 border-blue-400">
                        {permission.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamManagement;