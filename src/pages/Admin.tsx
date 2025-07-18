import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import TeamManagement from '@/components/TeamManagement';
import CarManagement from '@/components/CarManagement';
import ItemManagement from '@/components/ItemManagement';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: number;
  status: 'open' | 'in-progress' | 'completed';
  author: string;
  createdAt: Date;
  replies: Reply[];
}

interface Reply {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
}

const priorityConfig = {
  1: { label: 'Very Low', color: 'bg-gray-500', textColor: 'text-gray-400' },
  2: { label: 'Low', color: 'bg-blue-500', textColor: 'text-blue-400' },
  3: { label: 'Medium', color: 'bg-yellow-500', textColor: 'text-yellow-400' },
  4: { label: 'High', color: 'bg-orange-500', textColor: 'text-orange-400' },
  5: { label: 'Critical', color: 'bg-neon-red', textColor: 'text-neon-red' },
};

const statusConfig = {
  'open': { label: 'Open', color: 'bg-green-500/20 text-green-400 border-green-400' },
  'in-progress': { label: 'In Progress', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-400' },
  'completed': { label: 'Completed', color: 'bg-gray-500/20 text-gray-400 border-gray-400' },
};

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Implement new vehicle system',
      description: 'Add support for custom vehicle modifications and upgrades in the game engine.',
      priority: 4,
      status: 'in-progress',
      author: 'Admin',
      createdAt: new Date('2024-01-15'),
      replies: [
        {
          id: 1,
          content: 'Started working on the basic structure. Should be ready for testing next week.',
          author: 'Developer',
          createdAt: new Date('2024-01-16'),
        }
      ]
    },
    {
      id: 2,
      title: 'Fix player housing bugs',
      description: 'Several players reported issues with furniture placement and property ownership.',
      priority: 5,
      status: 'open',
      author: 'Support',
      createdAt: new Date('2024-01-10'),
      replies: []
    },
    {
      id: 3,
      title: 'Add new Discord integration',
      description: 'Integrate Discord Rich Presence and server notifications.',
      priority: 2,
      status: 'completed',
      author: 'Admin',
      createdAt: new Date('2024-01-05'),
      replies: [
        {
          id: 2,
          content: 'Integration completed and tested. Live on production.',
          author: 'Developer',
          createdAt: new Date('2024-01-12'),
        }
      ]
    },
  ]);

  const [newTask, setNewTask] = useState<{
    title: string;
    description: string;
    priority: number;
    status: 'open' | 'in-progress' | 'completed';
  }>({
    title: '',
    description: '',
    priority: 3,
    status: 'open',
  });

  const [newReply, setNewReply] = useState<{[key: number]: string}>({});
  const [sortBy, setSortBy] = useState<'priority' | 'date' | 'status'>('priority');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || '');
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
      navigate('/login');
    }
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) {
      toast({
        title: "Error",
        description: "Task title is required",
        variant: "destructive",
      });
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      status: newTask.status,
      author: 'Admin',
      createdAt: new Date(),
      replies: [],
    };

    setTasks([task, ...tasks]);
    setNewTask({ title: '', description: '', priority: 3, status: 'open' });
    
    toast({
      title: "Task Created",
      description: "New task has been added to the list",
    });
  };

  const handleAddReply = (taskId: number) => {
    const replyContent = newReply[taskId];
    if (!replyContent?.trim()) return;

    const reply: Reply = {
      id: Date.now(),
      content: replyContent,
      author: 'Admin',
      createdAt: new Date(),
    };

    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, replies: [...task.replies, reply] }
        : task
    ));

    setNewReply({ ...newReply, [taskId]: '' });
    
    toast({
      title: "Reply Added",
      description: "Your reply has been posted",
    });
  };

  const handleStatusChange = (taskId: number, newStatus: 'open' | 'in-progress' | 'completed') => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus }
        : task
    ));
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    switch (sortBy) {
      case 'priority':
        return b.priority - a.priority;
      case 'date':
        return b.createdAt.getTime() - a.createdAt.getTime();
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-gaming-gray to-gaming-dark opacity-90 pointer-events-none"></div>
      
      {/* Header */}
      <header className="relative z-50 border-b border-gaming-gray bg-gaming-dark/95 backdrop-blur sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="font-orbitron text-xl md:text-2xl font-bold text-white neon-glow">Admin Dashboard</h1>
              <span className="hidden md:inline text-gray-400 font-rajdhani">|</span>
              <span className="hidden md:inline text-neon-red font-rajdhani text-sm">{userEmail}</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Logout
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/')}
                className="border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all duration-300"
              >
                Back to Main
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Sidebar - Navigation & Quick Stats */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <Card className="gaming-card border border-neon-red/30">
              <CardHeader>
                <h3 className="font-orbitron text-lg font-bold text-white neon-glow">📊 Quick Stats</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-rajdhani">Total Tasks</span>
                  <Badge className="bg-neon-red text-white">{tasks.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-rajdhani">Open Tasks</span>
                  <Badge className="bg-green-500 text-white">{tasks.filter(t => t.status === 'open').length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-rajdhani">In Progress</span>
                  <Badge className="bg-yellow-500 text-white">{tasks.filter(t => t.status === 'in-progress').length}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card className="gaming-card border border-gaming-gray">
              <CardHeader>
                <h3 className="font-orbitron text-lg font-bold text-white">📋 Dashboard Menu</h3>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gaming-gray">
                    📝 Task Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gaming-gray">
                    👥 Team Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gaming-gray">
                    🚗 Content Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gaming-gray">
                    ⚙️ System Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area with Tabs */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="tasks" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-gaming-gray border border-gaming-gray">
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-neon-red data-[state=active]:text-white text-gray-300 font-rajdhani"
                >
                  📝 Tasks
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className="data-[state=active]:bg-neon-red data-[state=active]:text-white text-gray-300 font-rajdhani"
                >
                  👥 Team
                </TabsTrigger>
                <TabsTrigger 
                  value="cars" 
                  className="data-[state=active]:bg-neon-red data-[state=active]:text-white text-gray-300 font-rajdhani"
                >
                  🚗 Cars
                </TabsTrigger>
                <TabsTrigger 
                  value="items" 
                  className="data-[state=active]:bg-neon-red data-[state=active]:text-white text-gray-300 font-rajdhani"
                >
                  📦 Items
                </TabsTrigger>
              </TabsList>

              {/* Task Management Tab */}
              <TabsContent value="tasks" className="space-y-6">
                {/* Create New Task */}
                <Card className="gaming-card border border-neon-red/30">
                  <CardHeader>
                    <h2 className="font-orbitron text-xl font-bold text-white neon-glow">
                      📝 Create New Task
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Task title..."
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
                    />
                    
                    <Textarea
                      placeholder="Task description..."
                      value={newTask.description}
                      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                      className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400 min-h-[100px]"
                    />
                    
                    <div className="flex gap-4">
                      <Select value={newTask.priority.toString()} onValueChange={(value) => setNewTask({ ...newTask, priority: parseInt(value) })}>
                        <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gaming-gray border-gaming-gray">
                          {Object.entries(priorityConfig).map(([priority, config]) => (
                            <SelectItem key={priority} value={priority} className="text-white hover:bg-gaming-dark">
                              <span className={`inline-block w-3 h-3 rounded-full ${config.color} mr-2`}></span>
                              Priority {priority} - {config.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select value={newTask.status} onValueChange={(value) => setNewTask({ ...newTask, status: value as 'open' | 'in-progress' | 'completed' })}>
                        <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gaming-gray border-gaming-gray">
                          {Object.entries(statusConfig).map(([status, config]) => (
                            <SelectItem key={status} value={status} className="text-white hover:bg-gaming-dark">
                              {config.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Button 
                        onClick={handleCreateTask}
                        className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani font-semibold"
                      >
                        Create Task
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Sort Controls */}
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 font-rajdhani">Sort by:</span>
                  <Select value={sortBy} onValueChange={(value: 'priority' | 'date' | 'status') => setSortBy(value)}>
                    <SelectTrigger className="w-48 bg-gaming-gray border-gaming-gray text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gaming-gray border-gaming-gray">
                      <SelectItem value="priority" className="text-white hover:bg-gaming-dark">Priority</SelectItem>
                      <SelectItem value="date" className="text-white hover:bg-gaming-dark">Date</SelectItem>
                      <SelectItem value="status" className="text-white hover:bg-gaming-dark">Status</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Task Forum */}
                <div className="space-y-6">
                  {sortedTasks.map((task) => (
                    <Card key={task.id} className="gaming-card border border-gaming-gray hover:border-neon-red/50 transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Task Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={`${priorityConfig[task.priority as keyof typeof priorityConfig].color} text-white font-bold`}>
                                P{task.priority}
                              </Badge>
                              <Badge variant="outline" className={statusConfig[task.status].color}>
                                {statusConfig[task.status].label}
                              </Badge>
                            </div>
                            
                            <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-neon-red transition-colors">
                              {task.title}
                            </h3>
                            
                            <p className="text-gray-300 font-rajdhani mb-3">
                              {task.description}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>By <span className="text-neon-red">{task.author}</span></span>
                              <span>•</span>
                              <span>{task.createdAt.toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{task.replies.length} replies</span>
                            </div>
                          </div>

                          <Select value={task.status} onValueChange={(value) => handleStatusChange(task.id, value as 'open' | 'in-progress' | 'completed')}>
                            <SelectTrigger className="w-40 bg-gaming-gray border-gaming-gray text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gaming-gray border-gaming-gray">
                              {Object.entries(statusConfig).map(([status, config]) => (
                                <SelectItem key={status} value={status} className="text-white hover:bg-gaming-dark">
                                  {config.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Replies */}
                        {task.replies.length > 0 && (
                          <div className="border-t border-gaming-gray pt-4 mt-4">
                            <h4 className="text-gray-300 font-rajdhani font-semibold mb-3">Replies:</h4>
                            <div className="space-y-3">
                              {task.replies.map((reply) => (
                                <div key={reply.id} className="bg-gaming-dark/50 rounded-lg p-3 border border-gaming-gray/50">
                                  <p className="text-gray-300 mb-2">{reply.content}</p>
                                  <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span className="text-neon-red">{reply.author}</span>
                                    <span>•</span>
                                    <span>{reply.createdAt.toLocaleDateString()}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Add Reply */}
                        <div className="border-t border-gaming-gray pt-4 mt-4">
                          <div className="flex gap-3">
                            <Input
                              placeholder="Add a reply..."
                              value={newReply[task.id] || ''}
                              onChange={(e) => setNewReply({ ...newReply, [task.id]: e.target.value })}
                              className="bg-gaming-gray border-gaming-gray text-white placeholder:text-gray-400"
                              onKeyPress={(e) => e.key === 'Enter' && handleAddReply(task.id)}
                            />
                            <Button 
                              onClick={() => handleAddReply(task.id)}
                              className="bg-neon-red hover:bg-red-600 text-white border-0 font-rajdhani"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {sortedTasks.length === 0 && (
                  <Card className="gaming-card text-center py-12">
                    <CardContent>
                      <p className="text-gray-400 font-rajdhani text-lg">No tasks found. Create your first task above!</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Team Management Tab */}
              <TabsContent value="team">
                <TeamManagement />
              </TabsContent>

              {/* Car Management Tab */}
              <TabsContent value="cars">
                <CarManagement />
              </TabsContent>

              {/* Item Management Tab */}
              <TabsContent value="items">
                <ItemManagement />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;