import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/auth.service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await authService.getMe();
          if (response.success) {
            setUser(response.data.user);
            setToken(storedToken);
            setIsAuthenticated(true);
          } else {
            logout();
          }
        } catch (error) {
          console.error('Auth initialization failed:', error);
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      
      if (response.success) {
        const { token: newToken, user: userData } = response.data;
        
        // Save token
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(userData);
        setIsAuthenticated(true);
        
        return { success: true, user: userData };
      }
      
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  // Update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated,
    login,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};