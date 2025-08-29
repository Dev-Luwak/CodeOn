import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function NavBar({ onLoginClick }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#features", label: "Features" },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-[#111113] shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-white font-extrabold text-2xl relative group"
        >
          CodeOn
          <span className="absolute inset-0 bg-gradient-to-r from-[#3E8EFF] via-[#FE6CBB] to-[#A06AFE] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer text-transparent bg-clip-text">
            CodeOn
          </span>
        </Link>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-zinc-300 hover:text-white transition ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#3E8EFF] via-[#FE6CBB] to-[#A06AFE] transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Right: Auth buttons / Avatar */}
        <div className="flex items-center gap-3">
          {!loggedIn ? (
            <>
              <Button variant="outline" size="sm" onClick={onLoginClick}>
                Login
              </Button>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <div className="relative group">
                <img
                  src="https://ui-avatars.com/api/?name=User"
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border border-white/20 cursor-pointer"
                />
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#18181B] border border-white/10 shadow-lg hidden group-hover:block">
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="w-full text-left px-4 py-2 hover:bg-white/5"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
