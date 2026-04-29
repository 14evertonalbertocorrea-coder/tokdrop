import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-display font-bold mb-8">Política de Privacidade</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Última atualização: {new Date().toLocaleDateString()}</p>
          
          <p>
            No TikTokSave, a privacidade dos nossos visitantes é uma das nossas principais prioridades. Este documento de Política de Privacidade contém tipos de informações que são coletadas e registradas pelo site e como as usamos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Arquivos de Log</h2>
          <p>
            O TikTokSave segue um procedimento padrão de uso de arquivos de log. Esses arquivos registram visitantes quando eles visitam sites. Todas as empresas de hospedagem fazem isso e uma parte das análises dos serviços de hospedagem. As informações coletadas por arquivos de log incluem endereços de protocolo de internet (IP), tipo de navegador, Provedor de Serviços de Internet (ISP), carimbo de data e hora, páginas de referência/saída e possivelmente o número de cliques.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Cookies e Web Beacons</h2>
          <p>
            Como qualquer outro site, o TikTokSave usa 'cookies'. Esses cookies são usados para armazenar informações, incluindo as preferências dos visitantes e as páginas no site que o visitante acessou ou visitou. As informações são usadas para otimizar a experiência dos usuários, personalizando o conteúdo da nossa página web com base no tipo de navegador dos visitantes e/ou outras informações.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Google DoubleClick DART Cookie</h2>
          <p>
            O Google é um dos fornecedores terceirizados em nosso site. Ele também usa cookies, conhecidos como cookies DART, para veicular anúncios aos visitantes do nosso site com base em sua visita ao site e a outros sites na internet. No entanto, os visitantes podem optar por recusar o uso de cookies DART visitando a Política de Privacidade da rede de anúncios e conteúdo do Google.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Nossos Parceiros de Publicidade</h2>
          <p>
            Alguns anunciantes em nosso site podem usar cookies e web beacons. Nossos parceiros de publicidade incluem:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google AdSense</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Suas Informações</h2>
          <p>
            Nós não coletamos informações de identificação pessoal (PII) dos usuários que baixam vídeos. O link do vídeo colado é usado apenas para processar o pedido e não é armazenado permanentemente vinculado a você.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
