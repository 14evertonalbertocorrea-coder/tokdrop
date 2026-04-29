import React, { useState } from 'react';
import { Search, Loader2, X, ClipboardPaste } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface DownloadFormProps {
  onDownload: (url: string) => Promise<void>;
  isLoading: boolean;
}

export default function DownloadForm({ onDownload, isLoading }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Por favor, cole um link do TikTok.');
      return;
    }

    if (!url.includes('tiktok.com')) {
      setError('Link inválido. Certifique-se de que é um link do TikTok.');
      return;
    }

    await onDownload(url);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Falha ao acessar a área de transferência', err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="relative flex items-center gap-4">
        <div className="relative flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand transition-all">
          <div className="absolute left-4 text-gray-400">
             <Search size={20} />
          </div>
          
          <input
            type="text"
            placeholder="Cole o link do TikTok aqui..."
            className="w-full pl-12 pr-10 py-4 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none text-sm md:text-base font-medium"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />

          {url && (
            <button
              type="button"
              onClick={() => setUrl('')}
              className="absolute right-3 p-1.5 text-gray-400 hover:text-brand transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand transition-all transform hover:scale-[1.02] shadow-lg flex items-center gap-2 shrink-0 active:scale-95 disabled:opacity-70 disabled:cursor-wait"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Search size={20} />
          )}
          <span className="hidden md:inline">Baixar</span>
        </button>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -bottom-6 left-2 text-brand font-bold text-[10px] uppercase tracking-wider"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
      
      {!isLoading && !url && (
         <button
            type="button"
            onClick={handlePaste}
            className="w-fit text-gray-400 hover:text-brand transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            <ClipboardPaste size={14} />
            Colar link da área de transferência
          </button>
      )}
    </div>
  );
}
