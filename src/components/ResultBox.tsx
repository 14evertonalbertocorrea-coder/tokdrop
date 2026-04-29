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

  const safeError =
    typeof error === 'string'
      ? error
      : 'Não foi possível processar este vídeo no momento.';

  const safeTitle =
    typeof result?.title === 'string' ? result.title : 'Vídeo Processado!';

  const safeAuthor =
    typeof result?.author === 'string' ? result.author : 'TikTok User';

  const safeThumbnail =
    typeof result?.thumbnail === 'string' && result.thumbnail
      ? result.thumbnail
      : 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=100';

  const safeVideoUrl =
    typeof result?.videoUrl === 'string' ? result.videoUrl : '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto mt-12 overflow-hidden"
    >
      {error ? (
        <div className="bg-white border border-red-100 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={24} />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Ops! Algo deu errado
          </h3>

          <p className="text-sm text-gray-500 mb-6 font-medium">
            {safeError}
          </p>

          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            <RefreshCcw size={14} />
            Tentar outro
          </button>
        </div>
      ) : result && safeVideoUrl ? (
        <div className="border border-dashed border-green-200 bg-green-50/50 rounded-xl p-4 flex items-center justify-between flex-col md:flex-row gap-4 shadow-sm">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0">
              <img
                src={safeThumbnail}
                alt={safeTitle}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-900 truncate pr-4">
                {safeTitle}
              </span>
              <span className="text-[11px] text-gray-500 truncate pr-4">
                Por @{safeAuthor}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <a
                href={safeVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
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
              href={safeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-center text-gray-400 hover:text-brand font-bold uppercase tracking-widest transition-colors"
            >
              Problemas no download? Tente o link direto
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-red-100 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Não foi possível gerar o link do vídeo.
          </p>

          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            <RefreshCcw size={14} />
            Tentar outro
          </button>
        </div>
      )}
    </motion.div>
  );
}
