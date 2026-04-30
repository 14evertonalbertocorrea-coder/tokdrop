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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section
          id="download"
          className="relative pt-8 pb-20 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-widest mb-6">
                +127.483 downloads realizados com sucesso
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-gray-950 tracking-tight leading-[1.05] mb-5">
                TikTok Video Downloader <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-pink-400 to-brand-secondary">
                  Fast, Free & HD
                </span>
              </h1>

              <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Baixe vídeos públicos do TikTok em MP4 sem complicação.
                Ferramenta online, rápida, gratuita e compatível com celular,
                tablet e computador.
              </p>

              <DownloadForm onDownload={handleDownload} isLoading={isLoading} />

              <div id="result-area">
                <ResultBox result={result} error={error} onReset={handleReset} />
              </div>

              <div className="mt-12 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-4 px-3">
                  <div className="text-2xl font-black text-gray-900">127K+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Downloads
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-4 px-3">
                  <div className="text-2xl font-black text-gray-900">99.2%</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Taxa de sucesso
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-4 px-3">
                  <div className="text-2xl font-black text-gray-900">8</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Online agora
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-4 px-3">
                  <div className="text-2xl font-black text-gray-900">HD</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Qualidade máxima
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-4 px-3">
                  <div className="text-2xl font-black text-gray-900">24h</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Disponível
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">SSL Secure</span>
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">No Login Required</span>
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Unlimited Use</span>
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-full">Mobile Friendly</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-20 left-0 -translate-x-1/2 w-72 h-72 bg-brand/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-10 right-0 translate-x-1/2 w-96 h-96 bg-brand-secondary/10 blur-[140px] rounded-full pointer-events-none"></div>
        </section>

        <AdBanner label="Publicidade" />

        <HowToUse />

        <AdBanner label="Anúncio" />

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight mb-6">
                Baixar vídeo do TikTok nunca foi tão simples
              </h2>

              <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                O TokDrop foi criado para quem precisa salvar vídeos públicos de
                forma rápida, prática e sem instalar aplicativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Sem marca d'água
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Processamento rápido para gerar vídeo MP4 pronto para salvar.
                </p>
              </article>

              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Compatível com celular
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Android, iPhone, tablet e computador sem instalar aplicativos.
                </p>
              </article>

              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Uso gratuito
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ferramenta online gratuita para downloads públicos ilimitados.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FAQ />

        <LegalNotice />

        <AdBanner label="Fim de Conteúdo" className="mb-16" />
      </main>

      <Footer />
    </div>
  );
}
