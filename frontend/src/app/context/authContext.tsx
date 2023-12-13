"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { VerifyTokenHandler } from "@components/VerifyTokenHandler";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    password: string,
    email: string
  ) => Promise<void>;
  currentUser: {
    username: string;
    email: string;
  } | null;
  logout: () => void;
  token: string | null;
  verifyToken: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    username: string;
    email: string;
  } | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/auth/login",
        { username, password }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const verifyToken = async () => {
    const frontendToken = localStorage.getItem("token");

    if (frontendToken) {
      const { data, status } = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/auth/authenticate",
        { frontendToken }
      );
      console.log(data,status)
      const username = data.username;
      const email = data.email;
      if (status === 200) {
        setCurrentUser({ username, email });
        setToken(data.id);
        setIsAuthenticated(true);
        console.log(isAuthenticated, currentUser, token)
        router.push('/to-do')
        return;
      }
    }
  };

  const register = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/auth/register",
        { username, password, email }
      );
      console.log("Registration successful", response);
    } catch (error) {
      console.error("Registration failed:", error);
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        register,
        currentUser,
        logout,
        token,
        verifyToken,
      }}
    >
      {children}
      <VerifyTokenHandler/>
    </AuthContext.Provider>
  );
};
