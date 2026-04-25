'use client';

import { motion } from 'framer-motion';
import { Truck, Clock, Shield, Building2, PackageCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'Moto Frete Corporativo',
    description: 'Solução ideal para empresas que precisam de entregas rápidas e recorrentes de documentos e pequenas encomendas.',
    icon: Building2,
    delay: 0.1,
  },
  {
    title: 'Entregas Expressas',
    description: 'Coleta imediata e entrega direta. O caminho mais rápido entre você e seu destino em toda SP.',
    icon: Zap,
    delay: 0.2,
  },
  {
    title: 'Logística para E-commerce',
    description: 'Agilize suas vendas com um serviço de entrega eficiente e pontual, garantindo a satisfação do seu cliente.',
    icon: PackageCheck,
    delay: 0.3,
  },
  {
    title: 'Distribuição de Brindes',
    description: 'Realizamos a entrega cuidadosa de brindes e produtos promocionais em grandes volumes.',
    icon: Truck,
    delay: 0.4,
  },
  {
    title: 'Gestão de Protocolos',
    description: 'Segurança total no transporte de documentos confidenciais com protocolo de recebimento digital.',
    icon: Shield,
    delay: 0.5,
  },
  {
    title: 'Atendimento Agendado',
    description: 'Programe suas entregas fixas e otimize custos com nossa logística de roteirização inteligente.',
    icon: Clock,
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-coopstar-red font-bold uppercase tracking-widest text-sm mb-2">O que fazemos</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-4">Soluções Completas em Logística</p>
            <div className="w-20 h-1.5 bg-coopstar-red mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Oferecemos serviços especializados para atender desde pequenas demandas até grandes fluxos corporativos.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 group transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-coopstar-red mb-6 group-hover:bg-coopstar-red group-hover:text-white transition-all transform group-hover:rotate-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-coopstar-red font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
