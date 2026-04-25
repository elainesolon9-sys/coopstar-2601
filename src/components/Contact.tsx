'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-coopstar-red font-bold uppercase tracking-widest text-sm mb-2">Contato</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-6">Pronto para agilizar sua logística?</p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fale conosco hoje mesmo. Nossa equipe está pronta para oferecer a melhor solução de transporte para sua necessidade.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coopstar-red/10 rounded-xl flex items-center justify-center text-coopstar-red flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Telefone</p>
                  <p className="text-xl font-bold text-gray-900">(11) 5052-3563</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coopstar-red/10 rounded-xl flex items-center justify-center text-coopstar-red flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Endereço</p>
                  <p className="text-xl font-bold text-gray-900 italic">Av. Jurucê, 898 - Moema - SP</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coopstar-red/10 rounded-xl flex items-center justify-center text-coopstar-red flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Horário</p>
                  <p className="text-xl font-bold text-gray-900">Seg - Sex: 08:00 às 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
               <p className="text-gray-600">"Prestam um excelente serviço, sempre pontuais e cuidadosos com as encomendas. Recomendo muito!"</p>
               <p className="text-sm font-bold text-gray-900 mt-4">— Cliente Corporativo, Moema</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-coopstar-red" />
              <h3 className="text-2xl font-bold text-gray-900">Envie uma mensagem</h3>
            </div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h4>
                <p className="text-green-700">Obrigado pelo contato. Retornaremos em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nome</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coopstar-red/20 focus:border-coopstar-red transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">E-mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@suaempresa.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coopstar-red/20 focus:border-coopstar-red transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Assunto</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coopstar-red/20 focus:border-coopstar-red transition-all">
                    <option>Cotação de Moto Frete</option>
                    <option>Contrato Mensalista</option>
                    <option>Dúvidas Gerais</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mensagem</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Como podemos ajudar sua empresa hoje?" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coopstar-red/20 focus:border-coopstar-red transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-coopstar-red text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-500/30 group"
                >
                  Enviar Solicitação
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
