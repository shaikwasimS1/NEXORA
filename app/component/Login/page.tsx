'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Page will be created soon! 🚀");
    }, 1200);
  };

  return (
    <div className="min-h-screen mt-20 bg-[#0a0a0a] flex items-center justify-center px-6 py-12 font-sans overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#1a1a2e_0%,#0a0a0a_70%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />

      <div className="relative w-full max-w-md">
        
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 mb-6">
            <span className="text-3xl font-black text-black">A</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white">NEXORA</h1>
          <p className="text-zinc-500 mt-2 text-sm">Digital Studio</p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>
            <p className="text-zinc-400 mt-2 text-sm">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs tracking-widest text-zinc-500 mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 outline-none transition-all"
                placeholder="hello@wcreators.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs tracking-widest text-zinc-500 mb-2">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 text-black font-bold py-4 rounded-2xl text-sm tracking-widest transition-all active:scale-[0.98] disabled:opacity-70"
            >
              {isLoading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <div className="text-amber-400 text-xl mb-3">🚧</div>
            <h3 className="text-white font-medium mb-1">Login Page Coming Soon</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We&apos;re building something amazing.<br />
              Full authentication system will be ready shortly.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-zinc-500 text-xs mt-8 tracking-widest">
          © 2026 W. CREATORS • All Rights Reserved
        </p>
      </div>
    </div>
  );
}