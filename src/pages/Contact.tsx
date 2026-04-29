import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                Fale Conosco
              </span>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Como podemos ajudar?
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                Tem alguma dúvida, sugestão de melhoria ou encontrou algum problema?
                Entre em contato conosco.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">E-mail Direto</h3>
                    <p className="text-slate-500">brgamesrjppp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand border border-slate-100">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Facebook Oficial</h3>
                    <a
                      href="https://www.facebook.com/profile.php?id=61573324993872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-brand"
                    >
                      facebook.com/tokdropoficial
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <form
                action="https://formsubmit.co/brgamesrjppp@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Novo contato TokDrop" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Ex: joao@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Como podemos te ajudar hoje?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold hover:bg-brand transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enviar Mensagem</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
