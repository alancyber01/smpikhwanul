// src/pages/LoginPage.jsx
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  Loader2,
  Eye,
  EyeOff,
  ShieldAlert,
  Fingerprint,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import logoTADBIRA from "../assets/logotadbira_biru.svg";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(username, password);
      console.log("Let's Go! Akses berhasil.");
    } catch (err) {
      setError("Username atau password salah. Akses ditolak.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Wrapper responsif dengan teknik zoom dari kode asli Anda
    <div className="bg-[#030712] flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden origin-top-left w-full h-screen md:w-[133.333vw] md:h-[133.333vh] md:[zoom:0.75] selection:bg-cyan-500/30">
      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f4f4f 1px, transparent 1px),
            linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* EFEK CAHAYA AURORA FUTURISTIK */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen"
        />

        <motion.div
          animate={{
            x: [0, -60, 0, 40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      {/* CARD KONTANER UTAMA */}
      <div className="w-full max-w-[420px] relative z-10 group perspective-1000">
        {/* Border Glow Berputar */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_70%,#06b6d4_80%,#a855f7_100%)] pointer-events-none"
          />
        </div>

        {/* Card Body */}
        <div className="relative bg-[#090e17]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 sm:p-10 shadow-[0_0_80px_-20px_rgba(6,182,212,0.15)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          {/* HEADER & LOGO */}
          <div className="flex flex-col items-center mb-10 text-center relative">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center group/logo">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl group-hover/logo:bg-cyan-400/30 transition-all duration-500"></div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-full h-full p-2 flex items-center justify-center text-cyan-400"
              >
                {/* Logo SVG Asli Diimplementasikan di sini */}
                <img
                  src={logoTADBIRA}
                  alt="Logo TADBIRA"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] rounded-full border border-cyan-500/10 border-dashed pointer-events-none"
              />
            </div>

            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 tracking-wider mb-2">
              TADBIRA
            </h1>

            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs font-semibold text-cyan-400/80 uppercase tracking-[0.3em]">
                Tata Kelola Digital
              </p>
              <p className="text-[9px] font-medium text-slate-500 uppercase tracking-[0.2em]">
                Berbasis Akurasi &bull; OBT 2026
              </p>
            </div>
          </div>

          {/* ALERT ERROR */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="p-3 bg-red-500/10 border border-red-500/30 backdrop-blur-md rounded-xl flex items-center gap-3 text-red-400 shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)]">
                  <ShieldAlert size={18} className="shrink-0" />
                  <span className="text-xs font-medium tracking-wide">
                    {error}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Input Username */}
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase text-slate-400 ml-1 tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 inline-block animate-pulse"></span>
                Username
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within/input:text-cyan-400 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl font-medium text-sm text-white outline-none focus:bg-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600 shadow-inner"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-400 group-focus-within/input:w-3/4 transition-all duration-300 opacity-50 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase text-slate-400 ml-1 tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500 inline-block animate-pulse"></span>
                Password
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within/input:text-purple-400 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl font-medium text-sm text-white outline-none focus:bg-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-600 shadow-inner tracking-widest"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-purple-400 group-focus-within/input:w-3/4 transition-all duration-300 opacity-50 shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="relative w-full group/btn overflow-hidden rounded-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>

                <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>

                <div className="relative w-full py-4 flex items-center justify-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] group-hover/btn:shadow-[0_0_30px_-5px_rgba(6,182,212,0.8)] transition-all">
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin text-cyan-200"
                      />
                      <span className="text-cyan-100">Otentikasi...</span>
                    </>
                  ) : (
                    <>
                      <Fingerprint
                        size={18}
                        className="text-cyan-200 group-hover/btn:scale-110 transition-transform"
                      />
                      Login
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>

          {/* FOOTER */}
          <div className="mt-8 pt-6 border-t border-white/5 relative z-10 text-center">
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
              Sistem Keamanan Terenkripsi
            </p>
            <p className="text-[8px] text-slate-700 mt-1 uppercase tracking-widest">
              &copy; 2026 Ahmad Maulana &bull; V.2.0.4
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `,
        }}
      />
    </div>
  );
};

export default LoginPage;
