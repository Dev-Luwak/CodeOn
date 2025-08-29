import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in
  const [loading, setLoading] = useState(true);

  // TODO: Replace with real /api/auth/me when backend is ready
  useEffect(() => {
    setLoading(false);
  }, []);

  const login = (mockUser = { id: "demo", name: "Demo User" }) =>
    setUser(mockUser);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
