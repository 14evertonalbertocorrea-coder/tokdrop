import React from 'react';
import { motion } from 'motion/react';
import { Download, AlertCircle, RefreshCcw, User, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export interface VideoResult {
  videoUrl: string;
  title: string;
  author: string;
  thumbnail: string;
}

interface ResultBoxProps {
  result: VideoResult | null;
  error: string | null;
  onReset: () => void;
}

export default function ResultBox({ result, error, onReset }: ResultBoxProps) {
  if (!result && !error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto mt-12 overflow-hidden"
    >
      {error ? (
        <div className="bg-white border border-brand/10 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-12 h-12 bg-brand/5 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Ops! Algo deu errado</h3>
          <p className="text-xs text-gray-500 mb-6 font-medium">
            {error}
          </p>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            <RefreshCcw size={14} />
            Tentar outro
          </button>
        </div>
      ) : result ? (
        <div className="border border-dashed border-green-200 bg-green-50/50 rounded-xl p-4 flex items-center justify-between flex-col md:flex-row gap-4 shadow-sm">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0">
               <img 
                 src={result.thumbnail || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=100"} 
                 alt={result.title} 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-900 truncate pr-4">Vídeo Processado!</span>
              <span className="text-[11px] text-gray-500 truncate pr-4">Por @{result.author}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <a
                href={`/api/proxy?url=${encodeURIComponent(result.videoUrl)}`}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-brand text-white rounded-lg text-sm font-bold hover:bg-brand-dark transition-all transform hover:scale-[1.02] shadow-md"
              >
                <Download size={16} />
                Baixar MP4
              </a>
              <button
                 onClick={onReset}
                 className="p-2 text-gray-400 hover:text-brand transition-colors"
                 title="Cancelar"
              >
                <RefreshCcw size={18} />
              </button>
            </div>
            <a 
              href={result.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-center text-gray-400 hover:text-brand font-bold uppercase tracking-widest transition-colors"
            >
              Problemas no download? Tente o link direto
            </a>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}
