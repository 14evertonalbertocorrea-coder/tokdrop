import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-105 transition-transform">
            <Download size={20} className="text-white" />
          </div>

          <div className="leading-tight">
            <span className="block font-extrabold text-xl tracking-tight text-gray-950">
              Tok<span className="text-brand">Drop</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Video Downloader
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
          <Link to="/" className="hover:text-brand transition-colors">
            Início
          </Link>
          <a href="#como-usar" className="hover:text-brand transition-colors">
            Como usar
          </a>
          <a href="#faq" className="hover:text-brand transition-colors">
            FAQ
          </a>
          <Link to="/contact" className="hover:text-brand transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <ShieldCheck size={15} className="text-green-500" />
            Grátis e rápido
          </div>

          <a
            href="#download"
            className="bg-black text-white px-5 py-2.5 rounded-xl text-xs font-extrabold hover:bg-brand transition-all shadow-lg active:scale-95"
          >
            Baixar Agora
          </a>
        </div>
      </div>
    </header>
  );
}
