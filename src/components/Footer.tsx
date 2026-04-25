import Link from 'next/link';
import { Package, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-coopstar-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl italic">C</span>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white">
                COOPSTAR<span className="text-coopstar-red italic">EXPRESS</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Referência em logística rápida e segura em Moema e região. Há anos entregando confiança e agilidade para sua empresa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-coopstar-red transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-coopstar-red transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-coopstar-red transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Página Inicial</Link></li>
              <li><Link href="#servicos" className="text-gray-400 hover:text-white transition-colors">Nossos Serviços</Link></li>
              <li><Link href="#processo" className="text-gray-400 hover:text-white transition-colors">Como Funciona</Link></li>
              <li><Link href="#contato" className="text-gray-400 hover:text-white transition-colors">Localização</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Moto Frete Expresso</li>
              <li>Contratos Corporativos</li>
              <li>Distribuição de Encomendas</li>
              <li>Logística Reversa</li>
              <li>Entregas Agendadas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Localização</h4>
            <p className="text-gray-400 mb-4">
              Av. Jurucê, 898 - Moema <br />
              São Paulo - SP, 04080-012
            </p>
            <p className="text-gray-400">
              (11) 5052-3563 <br />
              atendimento@coopstar.com.br
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacidade</Link>
            <Link href="#" className="hover:text-white">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
