"use client"
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/authContext';

export const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();
  console.log(authContext?.isAuthenticated)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      console.log()
      if (!token || !authContext?.isAuthenticated) {
        router.push('/login');
      }
    }
  }, [authContext?.isAuthenticated]);

  return (
    <>
      {authContext?.isAuthenticated ? children : null}
    </>
  );
};
