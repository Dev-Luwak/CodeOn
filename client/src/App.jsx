import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        <span className="text-white">CodeOn</span>{" "}
        <span className="text-gradient">Learn by Watching + Building</span>
      </h1>
      <p className="text-zinc-300 max-w-xl text-center">
        Watch a YouTube tutorial, code alongside in a built-in editor, and see a live preview—on one screen.
      </p>
      <div className="flex gap-3">
        <Link className="rounded-xl px-5 py-3 border-gradient shadow-glow"
              to="/login">
          <span className="block rounded-xl bg-[#111113]">Get Started</span>
        </Link>
        <a className="rounded-xl px-5 py-3 bg-gradient-to-r from-brand-start via-brand-mid to-brand-end"
           href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </main>
  );
}

function Login() {
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm border-gradient rounded-2xl">
        <div className="rounded-2xl bg-[#18181B] p-6 space-y-4">
          <h2 className="text-xl font-bold">Login</h2>
          <form className="space-y-3">
            <input className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
                   placeholder="Email" type="email" />
            <input className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
                   placeholder="Password" type="password" />
            <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-brand-start via-brand-mid to-brand-end py-2 font-medium">
              Sign in
            </button>
          </form>
          <a className="text-sm text-zinc-400 hover:underline" href="#">Forgot password?</a>
          <a className="block text-center rounded-lg border border-white/10 py-2"
             href={`${import.meta.env.VITE_API_URL || "http://localhost:4000"}/api/auth/google`}>
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
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

