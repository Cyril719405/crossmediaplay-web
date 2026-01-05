import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#canales', label: 'Canales' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logos/cmp-logo.svg"
            alt="Cross Media Play"
            width={120}
            height={50}
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white font-medium relative py-1
                         after:content-[''] after:absolute after:bottom-0 after:left-0
                         after:w-0 after:h-0.5 after:bg-orange-primary
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 w-3/4 h-screen bg-dark/98 backdrop-blur-lg
                      flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                      }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover:text-orange-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
