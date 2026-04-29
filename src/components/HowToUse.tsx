import React from 'react';
import { Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Smartphone className="text-brand" size={24} />,
    title: "Cole o link",
    description: "Abra o TikTok e copie a URL do vídeo público que deseja salvar."
  },
  {
    icon: <Zap className="text-brand-secondary" size={24} />,
    title: "Aguarde o processamento",
    description: "Cole o link em nosso campo de busca e clique no botão de baixar."
  },
  {
    icon: <ShieldCheck className="text-green-500" size={24} />,
    title: "Faça o download",
    description: "Escolha o formato e salve o vídeo em seu dispositivo instantaneamente."
  }
];

export default function HowToUse() {
  return (
    <section id="como-usar" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Como baixar vídeos do TikTok?</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Siga os passos abaixo e tenha seu vídeo preferido em segundos, sem marca d'água.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-blue-500 font-display">01</span> Como usar?
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              Copie o link do vídeo no app TikTok, cole no campo acima e clique em baixar. Em segundos o arquivo estará pronto.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-brand font-display">02</span> Recursos
            </h3>
            <ul className="text-[11px] text-gray-500 leading-tight space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand rounded-full"></div>
                Download Grátis Ilimitado
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand rounded-full"></div>
                Alta Velocidade
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand rounded-full"></div>
                Interface Premium
              </li>
            </ul>
          </div>

          <div className="bg-brand-dark p-6 rounded-xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:scale-110 transition-transform">
               <Smartphone size={100} />
            </div>
            <h3 className="text-sm font-bold mb-2 text-white flex items-center gap-2 relative z-10">
              <span className="text-brand-secondary font-display">03</span> Mobile Ready
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed font-medium relative z-10">
              Totalmente compatível com Android e iOS. Baixe seus vídeos preferidos em qualquer lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
