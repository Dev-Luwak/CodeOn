import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
// TODO: import Login, Register, Dashboard, etc.

function Login() {
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm border-gradient rounded-2xl">
        <div className="rounded-2xl bg-[#18181B] p-6 space-y-4">
          <h2 className="text-xl font-bold">Login</h2>
          <form className="space-y-3">
            <input
              className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
              placeholder="Email"
              type="email"
            />
            <input
              className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
              placeholder="Password"
              type="password"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-brand-start via-brand-mid to-brand-end py-2 font-medium"
            >
              Sign in
            </button>
          </form>
          <a className="text-sm text-zinc-400 hover:underline" href="#">
            Forgot password?
          </a>
          <a
            className="block text-center rounded-lg border border-white/10 py-2"
            href={`${
              import.meta.env.VITE_API_URL || "http://localhost:4000"
            }/api/auth/google`}
          >
            Continue with Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/paths" element={<div>Paths Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Route>
        {/* Workspace without NavBar */}
        <Route path="/project/:id" element={<div>Workspace Page</div>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
