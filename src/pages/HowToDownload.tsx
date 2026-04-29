import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HowToDownload() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-black text-slate-900 mb-6">
              Como baixar vídeos do TikTok sem marca d'água
            </h1>

            <p className="text-slate-500 leading-relaxed mb-8">
              Baixar vídeos públicos do TikTok sem marca d'água ficou muito mais simples com ferramentas online.
              O TokDrop permite que qualquer usuário cole o link do vídeo desejado e faça o download em formato MP4
              com rapidez, sem precisar instalar programas no computador ou aplicativos no celular.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Passo a passo para baixar</h2>

            <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
              <li>Abra o aplicativo TikTok e copie o link do vídeo público.</li>
              <li>Acesse a página inicial do TokDrop.</li>
              <li>Cole o endereço no campo de download.</li>
              <li>Clique no botão baixar e aguarde o processamento.</li>
              <li>Faça o download do arquivo MP4 em alta qualidade.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Vantagens do TokDrop</h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Diferente de muitos downloaders online, o TokDrop foi otimizado para oferecer velocidade,
              interface limpa, compatibilidade mobile e simplicidade no uso. A ferramenta é gratuita
              e pode ser utilizada quantas vezes desejar.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">É seguro usar?</h2>

            <p className="text-slate-600 leading-relaxed">
              Sim. O TokDrop não exige cadastro e não solicita instalação de extensões.
              Basta colar o link e baixar. O processamento é feito online diretamente no navegador.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
