// src/components/layout/Dashboard.jsx
import React, { useState, useContext } from "react";
import { LogOut, Menu } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { Badge } from "../ui/Ui";
import logoMasda from "../../assets/logo.svg";

const Dashboard = ({
  children,
  menu = [],
  active,
  setActive,
  zoomOut = true,
}) => {
  const { user, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={`bg-[#030712] text-slate-200 flex overflow-hidden font-sans relative origin-top-left ${
        zoomOut
          ? "w-full h-screen md:w-[133.333vw] md:h-[133.333vh] md:[zoom:0.75]"
          : "w-full h-screen"
      }`}
    >
      {/* ========================================== */}
      {/* BACKGROUND STATIS: GRID & AURORA (SUPER RINGAN) */}
      {/* ========================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f4f4f 1px, transparent 1px),
              linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Aurora Cyan Statis (Kiri Atas) */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen" />

        {/* Aurora Ungu Statis (Kanan Bawah) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* OVERLAY UNTUK MOBILE DENGAN EFEK BLUR GELAP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[#030712]/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR (Glassmorphism Gelap - z-index lebih tinggi dari background) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#090e17]/95 backdrop-blur-2xl border-r border-white/5 transition-transform duration-500 lg:translate-x-0 lg:static flex flex-col h-full shadow-[4px_0_24px_rgba(0,0,0,0.2)] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* LOGO AREA */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
              <img
                src={logoMasda}
                alt="Logo TADBIRA"
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] relative z-10"
              />
            </div>
            <div>
              <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">
                TADBIRA
              </h2>
              <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest leading-none mt-1.5">
                Version 2.0
              </p>
            </div>
          </div>
        </div>

        {/* MENU TENGAH */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-hide relative z-10">
          <nav className="space-y-2">
            {menu.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 text-sm overflow-hidden relative group/menu ${
                    isActive
                      ? "text-white font-bold shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] border border-cyan-500/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-cyan-300 font-medium border border-transparent"
                  }`}
                >
                  {/* Efek gradient latar belakang untuk menu aktif */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-90"></div>
                  )}

                  <div className="relative z-10 flex items-center gap-4 w-full">
                    {item.icon && (
                      <item.icon
                        size={20}
                        className={
                          isActive
                            ? "text-cyan-100"
                            : "text-slate-500 group-hover/menu:text-cyan-400 transition-colors"
                        }
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* PROFIL & LOGOUT BAWAH */}
        <div className="p-6 border-t border-white/5 space-y-4 bg-[#090e17]/80 shrink-0 relative z-10">
          <div className="flex items-center gap-4 p-3.5 bg-white/5 border border-white/10 rounded-2xl shadow-inner">
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center font-black text-cyan-400 uppercase shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              {user?.nama?.[0] || "U"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                {user?.nama || "User"}
              </p>
              <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mt-0.5">
                {user?.role || "GUEST"}
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-red-400 font-bold text-sm bg-red-500/5 hover:bg-red-500/20 hover:text-red-300 border border-transparent hover:border-red-500/30 transition-all"
          >
            <LogOut size={18} /> Keluar Sistem
          </button>
        </div>
      </aside>

      {/* KONTEN KANAN */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative z-10">
        {/* HEADER ATAS (Glassmorphism Gelap) */}
        <header className="h-20 shrink-0 bg-[#090e17]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-slate-400 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-white/10"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 text-lg md:text-xl tracking-tight uppercase">
              {menu.find((m) => m.id === active)?.label || "Dashboard"}
            </h2>
          </div>
          <div className="hidden md:block">
            <Badge type={user?.role || "guest"} />
          </div>
        </header>

        {/* AREA SCROLL KONTEN UTAMA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
