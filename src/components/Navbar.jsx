
import { useState } from "react";

import {
  Menu,
  X,
  Moon,
  Sun,
  Heart,
  UserRound,
  Home
} from "lucide-react";

import {
  Link,
  NavLink
} from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    darkMode,
    toggleTheme
  } = useTheme();

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Properties",
      path: "/properties"
    },
    {
      name: "Agents",
      path: "/agents"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">

      <div className="container-custom">

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-500/30">
              <Home size={22} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Nivara<span className="text-brand-600">.</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Estates
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive
                      ? "text-brand-600"
                      : "text-slate-600 hover:text-brand-600 dark:text-slate-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* FAVOURITES */}

            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`
              }
            >
              <Heart size={17} />
              Favourites
            </NavLink>

            {/* LOGIN */}

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <UserRound size={17} />
              Login
            </Link>

            {/* EXPLORE HOMES */}

            <Link
              to="/properties"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
            >
              Explore Homes
            </Link>

            {/* THEME TOGGLE */}

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

          </div>

          {/* MOBILE ACTIONS */}

          <div className="flex items-center gap-2 lg:hidden">

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (
          <div className="border-t border-slate-200 py-5 dark:border-slate-800 lg:hidden">

            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10"
                        : "text-slate-600 dark:text-slate-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* MOBILE FAVOURITES — BEFORE LOGIN */}

              <NavLink
                to="/favourites"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10"
                      : "text-slate-700 dark:text-slate-200"
                  }`
                }
              >
                <Heart size={17} />
                Favourites
              </NavLink>

              {/* MOBILE LOGIN */}

              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                <UserRound size={17} />
                Login
              </Link>

              {/* MOBILE EXPLORE HOMES */}

              <Link
                to="/properties"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Explore Homes
              </Link>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;