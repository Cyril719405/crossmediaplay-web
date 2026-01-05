import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Datos de canales
const channels = [
  { name: 'Universal TV', logo: '/logos/universal-tv.png' },
  { name: 'Studio Universal', logo: '/logos/studio-universal.png' },
  { name: 'Telemundo', logo: '/logos/telemundo.png' },
  { name: 'USA Network', logo: '/logos/usa.png' },
  { name: 'E! Entertainment', logo: '/logos/e-entertainment.png' },
  { name: 'Universal+', logo: '/logos/universal-plus.png' },
  { name: 'PorcelTV', logo: '/logos/porceltv.webp' },
  { name: 'Etermax', logo: '/logos/etermax.png' },
  { name: 'Tastemade', logo: '/logos/tastemade.webp' },
];

// Datos de clientes
const clients = [
  { name: 'Apple', logo: null },
  { name: 'Netflix', logo: null },
  { name: 'L\'Oréal', logo: null },
  { name: 'Entel', logo: null },
  { name: 'UNICEF', logo: null },
  { name: 'Beiersdorf', logo: null },
  { name: 'Kraft Heinz', logo: null },
  { name: 'Lindt', logo: null },
  { name: 'AIEP', logo: null },
  { name: 'Polla Chilena', logo: null },
  { name: 'ECUSA', logo: null },
  { name: 'Galderma', logo: null },
  { name: 'Farmacias Knop', logo: null },
  { name: 'Cosmetica Nacional', logo: null },
  { name: 'PedidosYa', logo: null },
];

// Datos de servicios
const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Venta de Espacios',
    description: 'Comercializamos espacios publicitarios en TV Cable y medios digitales en Chile.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Planificación de Campañas',
    description: 'Desarrollamos estrategias personalizadas para maximizar el impacto de tu marca.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Coordinación Integral',
    description: 'Gestionamos la relación completa entre agencias, anunciantes y canales para una ejecución impecable.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Servicios de Tráfico',
    description: 'Administración de campañas, manejo de órdenes de publicidad e interacción con sistema Mydas de NBCUniversal.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Control de Campañas',
    description: 'Administración y seguimiento completo de campañas publicitarias para asegurar su correcta ejecución.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Prestación de Servicios',
    description: 'Gestión integral de tráfico publicitario: inserción de pautas, control de transmisión, verificación de inserciones y respaldo para facturación.',
  },
];

export default function Home() {
  // Animaciones on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Cross Media Play | Publicidad en TV Cable y Medios Digitales</title>
        <meta name="description" content="Comercialización de espacios publicitarios en TV Cable y medios digitales en Chile. Representamos a Universal TV, Studio Universal, Telemundo, USA Network, E! y Universal+." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Cross Media Play | Publicidad en TV Cable y Medios Digitales" />
        <meta property="og:description" content="Comercialización de espacios publicitarios en TV Cable y medios digitales en Chile." />
        <meta property="og:image" content="/logos/cmp-logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cross Media Play | Publicidad en TV Cable y Medios Digitales" />
        <meta name="twitter:description" content="Comercialización de espacios publicitarios en TV Cable y medios digitales en Chile." />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-5 pt-28 pb-20 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Background glow */}
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(ellipse,rgba(245,124,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Conectamos marcas con{' '}
            <span className="bg-gradient-to-r from-orange-primary to-orange-dark bg-clip-text text-transparent">
              millones de hogares
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Comercialización de espacios publicitarios en TV Cable y<br className="hidden md:block" />medios digitales en Chile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="btn-primary">
              Contáctanos
            </a>
            <a href="#servicios" className="btn-outline">
              Nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 md:py-28 px-5 bg-dark-section animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2>Sobre Nosotros</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-primary mb-6">
                Una empresa de medios
              </h3>
              <p className="text-gray-400 mb-4 text-lg">
                Cross Media Play es una empresa especializada en la comercialización de espacios publicitarios en TV Cable y medios digitales en Chile.
              </p>
              <p className="text-gray-400 mb-4">
                Trabajamos con los principales canales de televisión por cable, conectando marcas con millones de hogares a través de contenido de alta calidad.
              </p>
              <p className="text-gray-400 mb-4">
                Nuestra experiencia en el mercado nos permite ofrecer soluciones publicitarias efectivas y estratégicas para cada cliente.
              </p>
              <p className="text-gray-400">
                Contamos con <span className="text-orange-primary font-semibold">automatizaciones propias</span> que optimizan los flujos de trabajo mediante software desarrollado a medida para la industria.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="card-glass p-6 text-center">
                <span className="text-4xl font-extrabold text-orange-primary block">6+</span>
                <span className="text-gray-400 text-sm mt-2 block">Canales</span>
              </div>
              <div className="card-glass p-6 text-center">
                <span className="text-4xl font-extrabold text-orange-primary block">100%</span>
                <span className="text-gray-400 text-sm mt-2 block">Cobertura Nacional</span>
              </div>
              <div className="card-glass p-6 text-center">
                <span className="text-4xl font-extrabold text-orange-primary block">TV</span>
                <span className="text-gray-400 text-sm mt-2 block">Cable</span>
              </div>
              <div className="card-glass p-6 text-center">
                <span className="text-4xl font-extrabold text-orange-primary block">Chile</span>
                <span className="text-gray-400 text-sm mt-2 block">Mercado Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 md:py-28 px-5 bg-dark animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Ofrecemos soluciones integrales para maximizar el impacto de tu marca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-glass p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-primary to-orange-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-16 h-16 bg-orange-primary/10 rounded-2xl flex items-center justify-center mb-6 text-orange-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canales Section */}
      <section id="canales" className="py-20 md:py-28 px-5 bg-dark-section animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2>Canales Representados</h2>
            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Trabajamos con los principales canales de TV Cable y Streaming
            </p>
            <p className="text-orange-primary font-semibold mt-4">
              Representante exclusivo de NBCUniversal Networks en Chile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 flex items-center justify-center min-h-[100px] md:min-h-[120px] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,124,0,0.2)]"
              >
                {channel.logo ? (
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    width={120}
                    height={60}
                    className="max-w-[80px] md:max-w-[120px] max-h-[40px] md:max-h-[60px] object-contain"
                  />
                ) : (
                  <span className="text-charcoal font-bold text-lg">{channel.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-20 md:py-28 px-5 bg-dark animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <h2>Nuestros Clientes</h2>
            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Trabajamos con los principales anunciantes del mercado chileno
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-[1px] rounded-xl bg-gradient-to-r from-orange-primary to-orange-dark transition-all duration-300 hover:scale-105"
              >
                <div className="bg-dark h-full p-4 md:p-6 flex items-center justify-center min-h-[80px] rounded-xl">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={50}
                      className="max-w-[70px] md:max-w-[100px] max-h-[30px] md:max-h-[50px] object-contain"
                    />
                  ) : (
                    <span className="text-gray-300 font-medium text-xs md:text-sm text-center">{client.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 md:py-28 px-5 bg-dark-section relative overflow-hidden animate-on-scroll">
        <div className="absolute bottom-[-50%] left-[-20%] w-[60%] h-[100%] bg-[radial-gradient(ellipse,rgba(245,124,0,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="section-title">
            <h2>Contacto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagen del edificio */}
            <div className="card-glass p-4 overflow-hidden">
              <Image
                src="/edificio.png"
                alt="Oficinas Cross Media Play - La Capitania 80"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Info de contacto */}
            <div className="card-glass p-8 md:p-10 text-center">
              <p className="text-gray-400 text-lg mb-8">
                Estamos listos para ayudarte a llevar tu marca a millones de hogares. Escríbenos y conversemos sobre tu proyecto.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:Katina.elgueta@crossmediaplay.com"
                  className="inline-block text-base md:text-lg font-semibold text-orange-primary bg-orange-primary/10 px-5 py-3 rounded-xl hover:bg-orange-primary/20 transition-colors"
                >
                  Katina.elgueta@crossmediaplay.com
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=La+Capitania+80+Las+Condes+Santiago+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-400 hover:text-orange-primary transition-colors"
                >
                  <svg className="w-5 h-5 text-orange-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>La Capitania 80, oficina 108</span>
                </a>
              </div>

              <div className="mt-6">
                <a href="mailto:Katina.elgueta@crossmediaplay.com" className="btn-primary">
                  Enviar Mensaje
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
