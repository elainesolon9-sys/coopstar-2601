'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Qual o tempo médio de coleta em Moema?',
    answer: 'Nosso tempo médio de coleta na região de Moema é de 15 a 30 minutos após a solicitação, dependendo da disponibilidade imediata e trânsito.',
  },
  {
    question: 'Vocês atendem apenas empresas ou pessoas físicas também?',
    answer: 'Atendemos ambos! Embora nosso foco principal seja o corporativo, realizamos serviços para pessoas físicas com a mesma agilidade e segurança.',
  },
  {
    question: 'Quais regiões de São Paulo vocês atendem?',
    answer: 'Atendemos toda a capital de São Paulo, Grande São Paulo e cidades do interior e litoral sob consulta prévia.',
  },
  {
    question: 'Como é feito o pagamento dos serviços?',
    answer: 'Para serviços avulsos, aceitamos Pix, dinheiro ou cartões. Para empresas, oferecemos faturamento mensal mediante contrato e análise de crédito.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
               <HelpCircle className="text-coopstar-red" size={40} />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tire suas dúvidas rápidas sobre nossos serviços.</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-coopstar-red flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-coopstar-red flex-shrink-0" size={20} />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
