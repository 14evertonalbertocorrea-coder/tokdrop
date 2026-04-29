import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">
              Termos de Uso
            </h1>

            <p className="text-sm text-slate-400 mb-10">
              Última atualização: 29/04/2026
            </p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <p>
                Ao acessar e utilizar o TokDrop, o usuário concorda com os
                presentes Termos de Uso, bem como com todas as leis e normas
                aplicáveis.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                1. Objetivo da ferramenta
              </h2>

              <p>
                O TokDrop oferece uma ferramenta online destinada a facilitar o
                acesso e o download de conteúdos públicos disponibilizados em
                plataformas de terceiros mediante solicitação direta do usuário.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                2. Responsabilidade do usuário
              </h2>

              <p>
                O usuário é integralmente responsável pelo uso que faz da
                ferramenta, incluindo a verificação de permissões, direitos
                autorais, autorizações de uso e conformidade com as políticas da
                plataforma de origem do conteúdo.
              </p>

              <p>
                O TokDrop não incentiva, promove ou se responsabiliza por uso
                indevido de conteúdos protegidos por direitos autorais.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                3. Disponibilidade do serviço
              </h2>

              <p>
                O serviço é fornecido de forma gratuita e pode sofrer
                interrupções, manutenções, alterações técnicas ou limitações sem
                aviso prévio.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                4. Propriedade intelectual
              </h2>

              <p>
                Todo o conteúdo visual, identidade, marca, design, textos e
                estrutura do TokDrop pertencem aos seus responsáveis legais,
                sendo proibida a reprodução sem autorização.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                5. Limitação de responsabilidade
              </h2>

              <p>
                O TokDrop não garante disponibilidade contínua, ausência de
                falhas, compatibilidade universal ou funcionamento ininterrupto.
                O uso da ferramenta é feito por conta e risco do usuário.
              </p>

              <p>
                Não nos responsabilizamos por perdas, danos, bloqueios de conta,
                problemas em dispositivos, violações de terceiros ou quaisquer
                consequências decorrentes do uso do serviço.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                6. Links e serviços de terceiros
              </h2>

              <p>
                O TokDrop pode depender de recursos, plataformas, conteúdos,
                APIs ou conexões externas de terceiros para funcionamento. Não
                possuímos controle sobre políticas ou disponibilidade desses
                serviços.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                7. Publicidade
              </h2>

              <p>
                Este site poderá exibir anúncios patrocinados, banners,
                conteúdos promocionais e programas de monetização de terceiros.
                Não nos responsabilizamos por produtos ou serviços anunciados por
                parceiros externos.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                8. Alterações nos termos
              </h2>

              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a
                qualquer momento. O uso contínuo da plataforma após alterações
                representa concordância automática do usuário.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                9. Contato oficial
              </h2>

              <p>
                Para dúvidas legais ou administrativas, o contato oficial é:
                brgamesrjppp@gmail.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
