import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const API_URL = "http://localhost:3000";
const API_URL = "https://tattobackend.onrender.com";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setForm({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isLogin ? `${API_URL}/api/auth/login` : `${API_URL}/api/auth/signup`;
      const body = isLogin
        ? { email: form.email.trim(), password: form.password }
        : { username: form.username.trim(), email: form.email.trim(), password: form.password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        toast.success(isLogin ? "Login successful" : "Signup successful");
        navigate("/admin/dashboard");
      } else {
        toast.error(data.message || "Authentication failed");
      }
    } catch (err) {
      toast.error("Request failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-3xl shadow-2xl px-10 py-12 mt-14 border border-orange-600 mb-20 mt-40">
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full rounded-[14px] border border-orange-600 bg-gray-800 px-5 py-3 text-white placeholder-orange-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required={!isLogin}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-orange-600 bg-gray-800 px-5 py-3 text-white placeholder-orange-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-[14px] border border-orange-600 bg-gray-800 px-5 py-3 text-white placeholder-orange-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white font-bold py-3 rounded-[14px] hover:bg-orange-700 transition-colors"
        >
          {loading ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-orange-400 mt-4 cursor-pointer" onClick={toggleMode}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
}
