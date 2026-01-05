import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <Image
            src="/logos/cmp-logo.png"
            alt="Cross Media Play"
            width={100}
            height={40}
            className="h-8 w-auto mx-auto opacity-80"
          />
        </div>
        <p className="text-gray-500 text-sm">
          © {currentYear} Cross Media Play®. Una empresa de medios. Todos los derechos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-1">
          La Capitania 80, oficina 108 - Chile
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="#nosotros"
            className="text-gray-500 hover:text-orange-primary text-sm transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-gray-500 hover:text-orange-primary text-sm transition-colors"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="text-gray-500 hover:text-orange-primary text-sm transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
