"use client";

import { useState, useContext } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Context/useContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include", 
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      setTimeout(() => {
        navigate("/main");
      }, 100);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1A1A21] to-[#2A1A3A] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen relative z-10">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex items-center justify-center p-8 relative">
          <div className="max-w-md text-center space-y-8">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                FutureLens
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Decorative Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1A1A21] to-[#2A1A3A] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <div className="text-6xl">🔮</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome Back to the Future
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Continue your journey of exploring alternative futures and
                making better decisions with AI-powered insights.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: "🚀", label: "AI Powered" },
                { icon: "📊", label: "Data Driven" },
                { icon: "🎯", label: "Precise" },
              ].map(({ icon, label }, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {icon}
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Logo */}
            <div className="text-center lg:hidden mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                FutureLens
              </h1>
            </div>

            {/* Form Container */}
            <div className="bg-gradient-to-br from-[#1A1A21]/80 to-[#2A1A3A]/80 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 shadow-2xl hover:border-purple-500/40 transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Sign In
                </h2>
                <p className="text-gray-400 text-sm">
                  Access your future scenarios
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 bg-gray-800/50 border border-gray-600 rounded-xl px-4 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 bg-gray-800/50 border border-gray-600 rounded-xl px-4 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                  <div className="text-right">
                    <Link
                      to="#"
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    ></Link>
                  </div>
                </div>

                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  </div>
                )}

                <Button
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Sign In</span>
                      <span>→</span>
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    New to FutureLens?{" "}
                    <Link
                      to="/register"
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="text-center text-xs text-gray-500">
              <p>
                By signing in, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
