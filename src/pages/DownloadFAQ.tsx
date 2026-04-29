import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DownloadFAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-black text-slate-900 mb-6">
              Perguntas frequentes sobre baixar vídeos do TikTok
            </h1>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  O TokDrop é gratuito?
                </h2>
                <p>
                  Sim. O TokDrop pode ser utilizado gratuitamente e sem limite de uso
                  para baixar vídeos públicos do TikTok.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Precisa instalar aplicativo?
                </h2>
                <p>
                  Não. Todo o processo funciona diretamente no navegador,
                  sem necessidade de instalação.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Funciona no celular?
                </h2>
                <p>
                  Sim. O TokDrop é compatível com Android, iPhone, tablets e computadores.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Posso baixar qualquer vídeo?
                </h2>
                <p>
                  Apenas vídeos públicos e acessíveis podem ser processados pela ferramenta.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  É seguro usar o TokDrop?
                </h2>
                <p>
                  Sim. Não exigimos login, senha nem instalação de softwares externos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
