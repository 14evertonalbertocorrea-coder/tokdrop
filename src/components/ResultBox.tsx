import React from 'react';
import { motion } from 'motion/react';
import { Download, AlertCircle, RefreshCcw } from 'lucide-react';

export interface VideoResult {
  videoUrl?: string;
  title?: string;
  author?: string;
  thumbnail?: string;
}

interface ResultBoxProps {
  result: VideoResult | null;
  error: string | null;
  onReset: () => void;
}

export default function ResultBox({ result, error, onReset }: ResultBoxProps) {
  if (!result && !error) return null;

  const safeVideoUrl = result?.videoUrl || '';
  const safeTitle = result?.title || 'Vídeo processado com sucesso';
  const safeAuthor = result?.author || 'TikTok User';
  const safeThumbnail =
    result?.thumbnail ||
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=100';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mt-12"
    >
      {error ? (
        <div className="bg-white border border-red-200 rounded-2xl p-8 text-center shadow-lg">
          <AlertCircle className="mx-auto mb-4 text-red-500" size={32} />

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Ops! Algo deu errado
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            {typeof error === 'string'
              ? error
              : 'Não foi possível processar este vídeo.'}
          </p>

          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-5 py-3 rounded-xl text-sm font-bold hover:bg-gray-200"
          >
            <RefreshCcw size={16} />
            Tentar outro
          </button>
        </div>
      ) : (
        <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-lg text-center">
          <img
            src={safeThumbnail}
            alt={safeTitle}
            className="w-24 h-24 object-cover rounded-xl mx-auto mb-4"
            referrerPolicy="no-referrer"
          />

          <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2">
            {safeTitle}
          </h3>

          <p className="text-xs text-gray-500 mb-6">
            Por @{safeAuthor}
          </p>

          {safeVideoUrl ? (
            <a
              href={safeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl text-sm font-bold hover:bg-gray-800 transition"
            >
              <Download size={18} />
              Baixar MP4
            </a>
          ) : (
            <p className="text-sm text-red-500 mb-4">
              Não foi possível gerar o link de download.
            </p>
          )}

          <button
            onClick={onReset}
            className="mt-4 text-xs text-gray-400 hover:text-black font-bold"
          >
            Tentar outro vídeo
          </button>
        </div>
      )}
    </motion.div>
  );
}
