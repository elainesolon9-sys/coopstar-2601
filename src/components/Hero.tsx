'use client';

import { motion } from 'framer-motion';
import { Package, Truck, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-coopstar-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-coopstar-red/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-coopstar-red/10 border border-coopstar-red/20 rounded-full text-coopstar-red text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              Logística Express com Confiança
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Sua encomenda em boas mãos, <span className="text-coopstar-red italic">rapidez</span> que sua empresa precisa.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Logística inteligente e entregas rápidas para Moema e toda São Paulo. 
              Soluções personalizadas em moto frete para otimizar o fluxo da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="group flex items-center justify-center gap-2 bg-coopstar-red text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-500/20"
              >
                Solicitar Entrega
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-bold hover:border-coopstar-red hover:text-coopstar-red transition-all"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                    User
                  </div>
                ))}
              </div>
              <p>+5.000 entregas realizadas com sucesso</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-coopstar-red to-red-400 rounded-[2rem] rotate-6 opacity-10 blur-2xl" />
              {/* Note: In a real project we'd use Image from next/image here */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative">
                <Image 
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Logistics Courier"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coopstar-red/40 to-transparent" />
                
                {/* Floating card info */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 -left-8 glass-morphism p-4 rounded-2xl shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Status</p>
                      <p className="font-bold text-gray-900">Entrega Concluída</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute top-8 -right-8 glass-morphism p-4 rounded-2xl shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coopstar-red rounded-full flex items-center justify-center text-white">
                      <Package size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Agilidade</p>
                      <p className="font-bold text-gray-900">Coleta em 15min</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
