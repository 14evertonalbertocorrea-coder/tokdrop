# TokDrop - TikTok Video Downloader

Um serviço moderno, rápido e gratuito para baixar vídeos do TikTok sem marca d'água.

## 🚀 Tecnologias
- **Frontend:** React + Vite + Tailwind CSS + Framer Motion
- **Backend:** Express (Node.js)
- **API:** Integração com TikWM (Estável e Gratuita)

## 🛠️ Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/tokdrop.git
   cd tokdrop
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:3000`.

## 📦 Como subir no GitHub

1. Crie um novo repositório vazio no GitHub.
2. No seu terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TokDrop ready for production"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/tokdrop.git
   git push -u origin main
   ```

## 🌐 Como fazer Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório `tokdrop`.
4. A Vercel detectará automaticamente as configurações de Vite.
5. **Importante:** Nas configurações do projeto na Vercel, certifique-se de que o comando de build seja `npm run build` e o diretório de saída seja `dist`.
6. Clique em **Deploy**.

## 📝 Notas de Versão
- O projeto utiliza a API TikWM como fonte primária para garantir estabilidade fora do ambiente de desenvolvimento.
- Possui espaços reservados para Google AdSense no componente `AdBanner.tsx`.
- Totalmente responsivo e otimizado para SEO.
