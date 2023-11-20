"use client"
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/authContext';

export const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      if (!authContext?.isAuthenticated || !token) {
        router.push('/login');
      }
    }
  }, [authContext?.isAuthenticated, router]);

  return (
    <>
      {authContext?.isAuthenticated ? children : null}
    </>
  );
};
