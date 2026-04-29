import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MobileDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-black text-slate-900 mb-6">
              TikTok Downloader para celular Android e iPhone
            </h1>

            <p className="text-slate-500 leading-relaxed mb-8">
              Se você procura uma maneira rápida de baixar vídeos do TikTok no celular,
              o TokDrop funciona perfeitamente em dispositivos Android, iPhone, tablets e navegadores móveis.
              Não é necessário instalar aplicativo nem ocupar memória do aparelho.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Como usar no celular</h2>

            <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
              <li>Abra o TikTok e toque em compartilhar.</li>
              <li>Selecione copiar link.</li>
              <li>Abra o navegador e acesse TokDrop.</li>
              <li>Cole o link na caixa principal.</li>
              <li>Toque em baixar vídeo e salve no aparelho.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Compatibilidade total</h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Nossa ferramenta foi construída com design responsivo, carregamento rápido
              e botões otimizados para toque, garantindo uma experiência simples e sem travamentos
              em qualquer smartphone moderno.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Download ilimitado</h2>

            <p className="text-slate-600 leading-relaxed">
              Você pode baixar quantos vídeos públicos desejar sem limite diário,
              totalmente grátis e com velocidade estável.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
