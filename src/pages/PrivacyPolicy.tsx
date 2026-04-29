import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">
              Política de Privacidade
            </h1>

            <p className="text-sm text-slate-400 mb-10">
              Última atualização: 29/04/2026
            </p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <p>
                A sua privacidade é importante para nós. Esta Política de
                Privacidade explica como o TokDrop coleta, utiliza e protege
                informações dos usuários que acessam nosso site.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                1. Informações que coletamos
              </h2>

              <p>
                O TokDrop não exige cadastro para uso da ferramenta. Podemos
                coletar informações técnicas básicas, como endereço IP, tipo de
                navegador, dispositivo utilizado, páginas acessadas e dados de
                navegação para fins de segurança, análise e melhoria do serviço.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                2. Links enviados pelos usuários
              </h2>

              <p>
                Os links inseridos na ferramenta são utilizados apenas para
                processar a solicitação do usuário. Não vendemos, alugamos ou
                compartilhamos links enviados com terceiros para fins comerciais.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                3. Cookies
              </h2>

              <p>
                Podemos usar cookies para melhorar a experiência do usuário,
                analisar tráfego e personalizar conteúdo. O usuário pode
                desativar cookies diretamente nas configurações do navegador.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                4. Google AdSense e anúncios
              </h2>

              <p>
                Futuramente, o TokDrop poderá exibir anúncios de terceiros,
                incluindo Google AdSense. Esses parceiros podem utilizar cookies
                para exibir anúncios personalizados com base nas visitas do
                usuário a este e outros sites.
              </p>

              <p>
                O usuário pode consultar as configurações de anúncios do Google
                para controlar a personalização de anúncios.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                5. Formulário de contato
              </h2>

              <p>
                Quando o usuário envia uma mensagem pela página de contato,
                podemos receber nome, e-mail e mensagem enviada. Essas
                informações são usadas apenas para responder ao contato.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                6. Compartilhamento de dados
              </h2>

              <p>
                Não vendemos dados pessoais dos usuários. Informações podem ser
                compartilhadas apenas quando necessário para cumprir obrigações
                legais, proteger nossos direitos ou manter a segurança do site.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                7. Segurança
              </h2>

              <p>
                Utilizamos medidas razoáveis para proteger as informações dos
                usuários. No entanto, nenhum sistema online é totalmente seguro,
                e não podemos garantir segurança absoluta.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                8. Direitos do usuário
              </h2>

              <p>
                O usuário pode solicitar informações, correção ou remoção de
                dados enviados voluntariamente através do contato oficial:
                brgamesrjppp@gmail.com.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                9. Alterações nesta política
              </h2>

              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente.
                Recomendamos que os usuários revisem esta página regularmente.
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                10. Contato
              </h2>

              <p>
                Para dúvidas sobre esta Política de Privacidade, entre em
                contato pelo e-mail: brgamesrjppp@gmail.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
