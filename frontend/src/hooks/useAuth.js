import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { login, register, logout, getCurrentUser } from '../services/authService';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    const userData = await login(credentials);
    setUser(userData);
  };

  const handleRegister = async (userData) => {
    await register(userData);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const getUser = () => {
    return getCurrentUser();
  };

  return {
    user,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    getUser,
  };
};

export default useAuth;