'use client'
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await register(username, password, email);
      setIsSuccessful(true);
    } catch (error) {
      setIsSuccessful(false);
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-1/3 mx-auto mt-20 shadow-lg">
      <h1 className="text-2xl mb-4">Register</h1>
      <input name='username' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="p-2 mb-4 w-full border rounded" />
      <input name='password' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-2 mb-4 w-full border rounded" />
      <input name='email' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="p-2 mb-4 w-full border rounded" />
      <button type="submit" className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600">Register</button>
    </form>
  );
};

export default Register;

