// src/components/ui/Ui.jsx
import React from "react";

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-[#090e17]/80 backdrop-blur-md rounded-3xl border border-white/10 shadow-[0_0_30px_-15px_rgba(6,182,212,0.1)] transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] hover:border-cyan-500/30 ${className}`}
  >
    {children}
  </div>
);

export const Badge = ({ type }) => {
  const safeType = type || "guest"; // Perlindungan jika prop type kosong

  // Mapping warna disesuaikan dengan tema Dark Cyber Luxury
  const map = {
    // Role Pengguna
    admin:
      "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]", // Emas Cyber
    guru: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]", // Cyan Holografik
    siswa:
      "bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]", // Ungu Elegan

    // Status Ujian
    Aktif:
      "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    Selesai: "bg-white/5 text-slate-400 border-white/10",
    Draft: "bg-amber-500/10 text-amber-400/80 border-amber-500/30",

    // Default
    guest: "bg-white/5 text-slate-500 border-white/5",
  };

  return (
    <span
      className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border flex items-center justify-center w-max transition-colors ${map[safeType] || map.guest}`}
    >
      {safeType}
    </span>
  );
};
