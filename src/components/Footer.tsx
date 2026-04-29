import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-14 bg-white border-t border-gray-200 px-6 flex items-center justify-between shrink-0">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} TokDrop • SEO Optimized
        </div>
        <div className="flex gap-4 text-[11px] font-medium text-gray-500">
          <Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand transition-colors">Terms of Use</Link>
          <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
