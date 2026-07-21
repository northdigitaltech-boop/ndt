"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0d1f35] border border-cyan-500/30 rounded-2xl p-8 w-full max-w-sm shadow-2xl shadow-cyan-500/10"
      >
        <h1 className="text-2xl font-extrabold text-white mb-1">Admin Login</h1>
        <p className="text-gray-400 text-sm mb-6">NorthDigital Tech content manager</p>

        <label className="block text-gray-400 text-sm font-semibold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full bg-[#0a1628] border border-white/15 focus:border-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
          placeholder="••••••••"
        />

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}
