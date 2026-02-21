import { createContext, useState, useEffect } from "react";
import {
  setSession,
  clearSession,
  isSessionValid,
  getSession,
} from "../utils/sesion";
export const AuthContext = createContext();

const SESSION_TIME = 5 * 60 * 1000; // 5 minutes

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const SESSION_TIME = 5 * 60 * 1000;

useEffect(() => {
  if (isSessionValid()) {
    const session = getSession();
    setUser(session.user);
  } else {
    clearSession();
  }
}, []);

const login = (email, password) => {
  const saved = JSON.parse(localStorage.getItem("user"));

  if (saved?.email === email && saved?.password === password) {
    setSession(saved, SESSION_TIME);
    setUser(saved);
    return true;
  }

  return false;
};

const logout = () => {
  clearSession();
  setUser(null);
};

   const register = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};