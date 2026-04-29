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
        <AdBanner label="Patrocinado" className="mt-4 mb-0" />

        <section
          id="download"
          className="relative pt-10 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-widest mb-8">
                +100.000 downloads realizados
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-gray-950 tracking-tight leading-[1.05] mb-6">
                TikTok Video Downloader <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-pink-400 to-brand-secondary">
                  Fast, Free & HD
                </span>
              </h1>

              <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Baixe vídeos públicos do TikTok em MP4 sem complicação.
                Ferramenta online, rápida, gratuita e compatível com celular,
                tablet e computador.
              </p>

              <DownloadForm onDownload={handleDownload} isLoading={isLoading} />

              <div id="result-area">
                <ResultBox result={result} error={error} onReset={handleReset} />
              </div>

              <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-5 px-4">
                  <div className="text-2xl font-black text-gray-900">100K+</div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-gray-400">
                    Downloads
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-5 px-4">
                  <div className="text-2xl font-black text-gray-900">99%</div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-gray-400">
                    Taxa de sucesso
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-5 px-4">
                  <div className="text-2xl font-black text-gray-900">HD</div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-gray-400">
                    Qualidade máxima
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 py-5 px-4">
                  <div className="text-2xl font-black text-gray-900">Free</div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-gray-400">
                    Uso ilimitado
                  </div>
                </div>
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
                forma rápida, prática e sem instalar aplicativos. Basta copiar o
                link do TikTok, colar na ferramenta e iniciar o download.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Como baixar vídeos do TikTok sem marca d'água
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Para baixar um vídeo público do TikTok, copie o link do vídeo,
                  cole no campo principal do TokDrop e clique no botão de baixar.
                  A ferramenta processa o endereço e gera um link MP4 para salvar
                  no celular ou computador.
                </p>
              </article>

              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  TikTok Downloader para Android e iPhone
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O TokDrop funciona direto no navegador do celular, sem instalar
                  aplicativos. Você pode usar no Android, iPhone, tablet ou PC,
                  mantendo uma experiência rápida, simples e responsiva.
                </p>
              </article>

              <article className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Download online grátis em MP4
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A ferramenta é gratuita e foi criada para facilitar o download
                  de vídeos públicos em formato MP4. Não exigimos login, senha ou
                  instalação de extensões no navegador.
                </p>
              </article>
            </div>
          </div>
        </section>

        <AdBanner label="Publicidade" />

        <section className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight mb-10 text-center">
              Guia rápido para usar o TokDrop
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  1. Copie o link do vídeo
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Abra o TikTok, escolha um vídeo público e use a opção de
                  compartilhar para copiar o link do conteúdo.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  2. Cole no campo principal
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Volte ao TokDrop, cole o link copiado no campo de download e
                  clique no botão para processar o vídeo.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  3. Baixe o arquivo MP4
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Quando o vídeo for processado, clique em baixar MP4 para salvar
                  o arquivo no seu dispositivo.
                </p>
              </div>
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
