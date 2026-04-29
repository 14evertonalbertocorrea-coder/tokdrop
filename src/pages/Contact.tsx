import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Fale Conosco</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Como podemos ajudar?</h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                Tem alguma dúvida, sugestão de melhoria ou encontrou um bug? Nossa equipe está pronta para ouvir você.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">E-mail Direto</h3>
                    <p className="text-slate-500">contato@tiktoksave.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand border border-slate-100">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Redes Sociais</h3>
                    <p className="text-slate-500">@tiktoksave_oficial</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-slate-500 font-medium">Agradecemos o seu contato. Responderemos o mais breve possível.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: João Silva"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">E-mail</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: joao@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">Mensagem</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Como podemos te ajudar hoje?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-brand/10 outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold hover:bg-brand transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Enviar Mensagem</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
