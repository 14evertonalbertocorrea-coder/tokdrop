import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadForm from '../components/DownloadForm';
import ResultBox, { VideoResult } from '../components/ResultBox';
import AdBanner from '../components/AdBanner';
import HowToUse from '../components/HowToUse';
import FAQ from '../components/FAQ';
import LegalNotice from '../components/LegalNotice';
import { motion } from 'motion/react';
import { Star, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VideoResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (url: string) => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await axios.post('/api/download', { url });

      if (response && response.data && response.data.success === true) {
        setResult(response.data);
      } else {
        setResult(null);
        setError(
          response?.data?.error ||
          'Não foi possível processar este vídeo no momento. Verifique se o link é público e tente novamente.'
        );
      }
    } catch (err: any) {
      console.log('Erro API:', err);

      setResult(null);
      setError(
        err?.response?.data?.error ||
        'Não foi possível processar este vídeo no momento. Tente novamente em instantes.'
      );
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        const resultEl = document.getElementById('result-area');
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <AdBanner label="Patrocinado" className="mt-4 mb-0" />

        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                Baixar Vídeos com <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-secondary">TokDrop</span>
              </h1>
              
              <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10 font-medium">
                Baixe vídeos públicos em alta qualidade de forma rápida e simples. Cole o link abaixo e comece agora.
              </p>

              <DownloadForm onDownload={handleDownload} isLoading={isLoading} />
              
              <div id="result-area">
                <ResultBox result={result} error={error} onReset={handleReset} />
              </div>

              <div className="mt-20 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest border border-gray-100 rounded-lg py-3 bg-white">
                   <Shield size={14} className="text-brand" />
                   <span>Seguro</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest border border-gray-100 rounded-lg py-3 bg-white">
                   <Smartphone size={14} className="text-brand-secondary" />
                   <span>Mobile</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest border border-gray-100 rounded-lg py-3 bg-white">
                   <Star size={14} className="text-yellow-400" />
                   <span>Grátis</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest border border-gray-100 rounded-lg py-3 bg-white">
                   <Star size={14} className="text-green-400" />
                   <span>HD Qualidade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <AdBanner label="Publicidade" />
        <HowToUse />
        <AdBanner label="Anúncio" />
        <FAQ />
        <LegalNotice />
        <AdBanner label="Fim de Conteúdo" className="mb-16" />
      </main>

      <Footer />
    </div>
  );
}
