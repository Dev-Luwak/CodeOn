import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import { RequireAuth, RedirectIfAuthed } from "./routes/guards";
import Login from "./pages/Login"; // Use Login.jsx directly

export default function App() {
  const [showModal, setShowModal] = useState(false); // State to control the modal

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes that render with NavBar */}
          <Route
            element={
              <MainLayout onLoginClick={() => setShowModal(true)} /> // Pass setShowModal to MainLayout
            }
          >
            <Route path="/" element={<Landing />} />

            <Route
              path="/login"
              element={
                <RedirectIfAuthed>
                  <Login /> {/* Use Login.jsx for the standalone page */}
                </RedirectIfAuthed>
              }
            />
            <Route
              path="/register"
              element={
                <RedirectIfAuthed>
                  <div>Register Page</div>
                </RedirectIfAuthed>
              }
            />

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <div>Dashboard Page</div>
                </RequireAuth>
              }
            />

            <Route path="/paths" element={<div>Paths Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Route>

          {/* Workspace without NavBar */}
          <Route path="/project/:id" element={<div>Workspace Page</div>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Login Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-md">
              <Login /> {/* Use Login.jsx for the modal */}
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        )}
      </BrowserRouter>
    </AuthProvider>
  );
}
