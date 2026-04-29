import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-display font-bold mb-8">Termos de Uso</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Ao acessar o site TikTokSave, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Uso da Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia de um vídeo através do TikTokSave apenas para visualização pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modificar ou copiar os materiais de terceiros sem autorização;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site TikTokSave;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor sem permissão.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Isenção de Responsabilidade</h2>
          <p>
            Os materiais no site TikTokSave são fornecidos 'como estão'. TikTokSave não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Limitações</h2>
          <p>
            Em nenhum caso o TikTokSave ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em TikTokSave.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Conteúdo de Terceiros</h2>
          <p>
            O TikTokSave não revisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por TikTokSave do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
