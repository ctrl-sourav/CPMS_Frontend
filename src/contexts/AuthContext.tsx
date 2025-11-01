import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
  avatar?: string;
  specialty?: string;
  uniqueId?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'doctor' | 'patient';
  specialty?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('cpms_user');
    const storedToken = localStorage.getItem('cpms_token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock API call - in real app, this would call the backend
      const mockUsers = [
        { 
          id: '1', 
          name: 'Admin One', 
          email: 'admin@cpms.test', 
          password: 'admin123', 
          role: 'admin' as const,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
        },
        { 
          id: '2', 
          name: 'Dr. Rekha Sharma', 
          email: 'dr.rekha@cpms.test', 
          password: 'doctor123', 
          role: 'doctor' as const,
          specialty: 'Cardiology',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rekha'
        },
        { 
          id: '3', 
          name: 'Rahul Kumar', 
          email: 'rahul@cpms.test', 
          password: 'patient123', 
          role: 'patient' as const,
          uniqueId: 'PT-1001',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul'
        },
      ];

      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid credentials');
      }

      const { password: _, ...userWithoutPassword } = foundUser;
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('cpms_token', mockToken);
      localStorage.setItem('cpms_user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      // Mock registration - in real app, this would call the backend
      const newUser: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        role: data.role,
        specialty: data.specialty,
        uniqueId: data.role === 'patient' ? `PT-${Math.floor(1000 + Math.random() * 9000)}` : undefined,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`
      };

      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('cpms_token', mockToken);
      localStorage.setItem('cpms_user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('cpms_token');
    localStorage.removeItem('cpms_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
