import React from 'react';
import { Check } from 'lucide-react';

const faqs = [
  {
    q: "O serviço de download é gratuito?",
    a: "Sim, o TikTokSave é 100% gratuito e você pode baixar quantos vídeos quiser sem pagar nada."
  },
  {
    q: "Preciso instalar algum software ou extensão?",
    a: "Não. Nosso site funciona diretamente no navegador do seu PC, Android ou iPhone sem necessidade de aplicativos extras."
  },
  {
    q: "Onde os vídeos são salvos?",
    a: "Geralmente, os vídeos são salvos na pasta 'Downloads' do seu dispositivo, a menos que você tenha configurado um local diferente."
  },
  {
    q: "Posso baixar vídeos privados?",
    a: "Não. Por questões de segurança e privacidade, nossa ferramenta só permite o download de vídeos configurados como públicos no TikTok."
  },
  {
    q: "O site armazena os vídeos baixados?",
    a: "Não. Não armazenamos vídeos nem mantemos logs do que você baixa. Todo o processo acontece em tempo real."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Perguntas Frequentes</h2>
          <p className="text-gray-500 text-sm">Tire suas dúvidas sobre o funcionamento da nossa plataforma.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-3">
                <span className="text-brand font-display font-extrabold">Q.</span>
                {faq.q}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium pl-6 border-l-2 border-gray-100">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
