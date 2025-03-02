import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext); // ✅ Rename to useAuthContext

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
