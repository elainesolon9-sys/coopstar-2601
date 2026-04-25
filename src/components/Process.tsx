'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, PhoneCall, Truck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Solicitação',
    description: 'Entre em contato via telefone ou site para solicitar sua coleta.',
    icon: PhoneCall,
    color: 'bg-blue-500',
  },
  {
    title: 'Agendamento',
    description: 'Nossa central identifica o entregador mais próximo de você.',
    icon: MousePointerClick,
    color: 'bg-purple-500',
  },
  {
    title: 'Transporte',
    description: 'Sua encomenda é transportada com segurança e rapidez.',
    icon: Truck,
    color: 'bg-coopstar-red',
  },
  {
    title: 'Entrega',
    description: 'Confirmação imediata da entrega realizada com sucesso.',
    icon: CheckCircle2,
    color: 'bg-green-500',
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-coopstar-red font-bold uppercase tracking-widest text-sm mb-2">Processo</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-4">Como trabalhamos</p>
            <div className="w-20 h-1.5 bg-coopstar-red mx-auto rounded-full mb-6" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center text-white mx-auto mb-6 shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
