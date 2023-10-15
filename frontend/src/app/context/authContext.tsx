"use client"
// frontend/context/AuthContext.tsx
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

// Authentikációs állapot és metódusok
const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Bejelentkezés
  const login = () => {
    setIsAuthenticated(true);
  };

  // Kijelentkezés
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
