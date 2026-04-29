import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 flex items-center justify-between shrink-0 shadow-sm h-14">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-dark flex items-center justify-center rounded-lg shadow-md group-hover:scale-105 transition-transform">
            <Download size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Tok<span className="text-brand">Drop</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link to="/" className="hover:text-brand transition-colors">Início</Link>
          <a href="#como-usar" className="hover:text-brand transition-colors">How to use</a>
          <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
          <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="bg-brand-dark text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-brand transition-all shadow-md active:scale-95"
          >
            Baixar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
