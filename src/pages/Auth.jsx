import {
  ArrowLeft,
  Eye,
  EyeOff,
  Home,
  LockKeyhole,
  Mail,
  UserRound
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignup =
    location.pathname === "/signup";

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      isSignup
        ? "Account created successfully!"
        : "Welcome back to Nivara Estates!"
    );

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 dark:bg-slate-950">

      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">

        <div className="relative hidden overflow-hidden lg:block">

          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90"
            alt="Luxury interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/65" />

          <div className="relative z-10 flex h-full items-end p-14">

            <div className="max-w-xl text-white">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
                Nivara Estates
              </p>

              <h1 className="mt-4 text-5xl font-extrabold leading-tight">
                A better way to find where you belong.
              </h1>

              <p className="mt-5 leading-7 text-slate-300">
                Save your favorite properties, connect
                with trusted agents and make your next
                move with confidence.
              </p>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-center px-5 py-12">

          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mb-8 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Home size={20} />
              </div>

              <div>

                <h1 className="text-xl font-extrabold dark:text-white">
                  Nivara<span className="text-brand-600">.</span>
                </h1>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Estates
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-9">

              <h2 className="text-2xl font-extrabold dark:text-white">
                {isSignup
                  ? "Create your account"
                  : "Welcome back"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {isSignup
                  ? "Start your property journey today."
                  : "Sign in to continue your property journey."}
              </p>

              {message && (
                <div className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  {message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {isSignup && (
                  <div>

                    <label className="mb-2 block text-sm font-semibold dark:text-white">
                      Full Name
                    </label>

                    <div className="relative">

                      <UserRound
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />

                    </div>

                  </div>
                )}

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Password
                  </label>

                  <div className="relative">

                    <LockKeyhole
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      required
                      minLength={6}
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (value) => !value
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>

                </div>

                {!isSignup && (
                  <div className="flex justify-end">

                    <button
                      type="button"
                      className="text-xs font-semibold text-brand-600"
                    >
                      Forgot password?
                    </button>

                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  {isSignup
                    ? "Create Account"
                    : "Sign In"}
                </button>

              </form>

              <p className="mt-7 text-center text-sm text-slate-500">

                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}

                <Link
                  to={
                    isSignup
                      ? "/login"
                      : "/signup"
                  }
                  className="font-bold text-brand-600"
                >
                  {isSignup
                    ? "Sign In"
                    : "Create one"}
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Auth;