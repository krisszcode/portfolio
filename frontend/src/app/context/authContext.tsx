'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string, email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const register = async (username: string, password: string, email: string) => {
    try {
      await axios.post('http://localhost:4000/api/auth/register', { username, password, email });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
