import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Realizar la lógica de autenticación aquí, por ejemplo:
    if (username === 'usuario' && password === 'contraseña') {
      setUser({ username });
      localStorage.setItem('user', JSON.stringify({ username }));
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
