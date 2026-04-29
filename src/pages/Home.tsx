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
      if (response.data.success) {
        setResult(response.data);
      } else {
        setError(response.data.error || 'Não foi possível processar o vídeo.');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao conectar ao servidor. Tente novamente.');
    } finally {
      setIsLoading(false);
      // Smooth scroll to result
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
        {/* Banner Ad 1 */}
        <AdBanner label="Patrocinado" className="mt-4 mb-0" />

        {/* Hero Section */}
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

              {/* Form Component */}
              <DownloadForm onDownload={handleDownload} isLoading={isLoading} />
              
              {/* Result Area */}
              <div id="result-area">
                <ResultBox result={result} error={error} onReset={handleReset} />
              </div>

              {/* Utility Info (Previously features) */}
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
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-0 -translate-x-1/2 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* Ad Banner 2 */}
        <AdBanner label="Publicidade" />

        <HowToUse />
        
        {/* Ad Banner 3 */}
        <AdBanner label="Anúncio" />

        {/* Features Content (Simple Text Section for SEO) */}
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-8 text-center uppercase tracking-tighter">Por que usar o TokDrop?</h2>
                <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                    <p>
                        O TikTok é uma das plataformas de vídeo mais populares do mundo, repleta de conteúdo criativo, informativo e divertido. No entanto, o aplicativo oficial nem sempre permite que você salve os vídeos que mais gosta diretamente no seu dispositivo, ou muitas vezes adiciona uma marca d'água que pode atrapalhar a visualização.
                    </p>
                    <p>
                        Nossa ferramenta foi desenvolvida para solucionar esse problema, oferecendo um sistema simples onde você pode <strong>baixar vídeos do TikTok online</strong> em segundos. Seja para assistir offline, compartilhar em outras redes ou guardar para referência futura, o TokDrop é o seu parceiro ideal.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="text-slate-900 font-bold mb-3">Velocidade Máxima</h3>
                            <p className="text-sm">Nossos servidores são otimizados para processar links instantaneamente, garantindo que você não perca tempo esperando.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="text-slate-900 font-bold mb-3">Privacidade Garantida</h3>
                            <p className="text-sm">Não rastreamos suas atividades nem salvamos o histórico de downloads. Sua navegação é segura conosco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FAQ />
        
        <LegalNotice />

        {/* Ad Banner 4 */}
        <AdBanner label="Fim de Conteúdo" className="mb-16" />
      </main>

      <Footer />
    </div>
  );
}
