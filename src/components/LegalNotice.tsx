import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section id="aviso-legal" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <ShieldAlert size={150} />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/20 text-brand px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand/30">
              <ShieldAlert size={14} />
              Aviso Legal
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight tracking-tight">Responsabilidade & Direitos Autorais</h2>
            
            <div className="space-y-4 text-gray-400 text-xs font-medium leading-relaxed font-mono">
              <p>
                Este site foi criado exclusivamente para fins educacionais e de conveniência pessoal.
              </p>
              <p>
                Como usuário, você é o único responsável pelo uso das mídias baixadas. <span className="text-white font-bold underline decoration-brand underline-offset-4">Você só deve baixar vídeos de sua própria autoria</span>, vídeos com autorização expressa do criador original ou conteúdos permitidos.
              </p>
              <p className="text-gray-500 font-sans italic pt-4">
                Não incentivamos nem apoiamos a violação de direitos autorais ou o uso indevido de propriedade intelectual de terceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
