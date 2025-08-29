import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // or a spinner
  return user ? children : <Navigate to="/" replace />;
}

export function RedirectIfAuthed({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/dashboard" replace /> : children;
}
