import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-black text-2xl text-gray-950 mb-3">
            Tok<span className="text-brand">Drop</span>
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Plataforma online para baixar vídeos públicos do TikTok em MP4 com rapidez,
            segurança e compatibilidade com celular ou computador.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Navegação</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="/#download">Baixar vídeo TikTok</a>
            <a href="/#como-usar">Como usar a ferramenta</a>
            <a href="/#faq">FAQ Downloader</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Institucional</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <Link to="/privacy-policy">Política de Privacidade</Link>
            <Link to="/terms">Termos de Uso</Link>
            <Link to="/contact">Contato</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Palavras chave</h4>
          <div className="text-sm text-gray-500 leading-7">
            baixar vídeo do TikTok<br />
            tiktok downloader mp4<br />
            download tiktok online<br />
            salvar vídeo tiktok grátis
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-100 text-xs text-gray-400 leading-relaxed">
        © {new Date().getFullYear()} TokDrop. Todos os direitos reservados. Esta ferramenta processa apenas links públicos disponibilizados pelo usuário.
      </div>
    </footer>
  );
}
