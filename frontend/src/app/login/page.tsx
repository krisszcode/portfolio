'use client'
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(username, password);
      window.location.href = '/todo';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-1/3 mx-auto mt-20 shadow-lg">
      <h1 className="text-2xl mb-4">Login</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="p-2 mb-4 w-full border rounded" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-2 mb-4 w-full border rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">Login</button>
    </form>
  );
};

export default Login;

