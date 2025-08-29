import { Link } from "react-router-dom";
import AuthModal from "../components/AuthModal";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Register() {
  const { login } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real POST /api/auth/register then auto-login or fetch /me
    login({ id: "demo", name: "Demo User" });
  };

  return (
    <AuthModal title="Create your account">
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
          placeholder="Name"
          required
        />
        <input
          className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2"
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>

      <div className="my-4 flex items-center gap-3 text-zinc-500">
        <div className="h-px flex-1 bg-white/10" /> or{" "}
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <a
        className="block text-center rounded-lg border-gradient shadow-glow"
        href={`${API}/api/auth/google`}
      >
        <span className="block rounded-lg bg-[#111113] px-4 py-2">
          Continue with Google
        </span>
      </a>

      <div className="mt-4 text-sm text-zinc-400">
        Already have an account?{" "}
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </AuthModal>
  );
}
