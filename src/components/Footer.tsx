import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-black text-xl text-gray-950 mb-2">
            Tok<span className="text-brand">Drop</span>
          </h3>
          <p className="text-sm text-gray-500">
            Ferramenta online para baixar vídeos públicos do TikTok em MP4.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Conteúdo</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="/#download">Baixar vídeo</a>
            <a href="/#como-usar">Como usar</a>
            <a href="/#faq">Perguntas frequentes</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <Link to="/privacy-policy">Política de Privacidade</Link>
            <Link to="/terms">Termos de Uso</Link>
            <Link to="/contact">Contato</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
        © {new Date().getFullYear()} TokDrop. Todos os direitos reservados.
      </div>
    </footer>
  );
}
