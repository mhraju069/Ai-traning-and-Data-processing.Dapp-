import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      console.log('Checking token:', token); // ✅ debug line

      if (!token) {
        console.log('No token found');
        setIsAuthenticated(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:8000/api/check-authentication/', {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('Auth response:', res.status); // ✅ debug

        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Auth check failed:', err); // ✅ debug
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
};
