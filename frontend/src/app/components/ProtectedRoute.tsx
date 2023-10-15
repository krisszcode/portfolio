'use client'
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';

interface ProtectedRouteProps {
    children: ReactNode;
  }

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuth(); // Feltételezzük, hogy van egy ilyen hook

  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);
  

  if (typeof window === 'undefined') {
    return null; // SSR alatt ne rendereljünk semmit
  }

  return (
    <>
      {isAuthenticated ? children : null}
    </>
  );
};
