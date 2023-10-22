import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/authContext';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const token = localStorage.getItem('token');

  useEffect(() => {
  if (!isAuthenticated || !token) {
    router.push('/login');
  }
  }, [isAuthenticated, token]);

  return (
    <>
      {isAuthenticated ? children : null}
    </>
  );
};
