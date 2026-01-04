import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="Cross Media Play - Inicio">
          <img src="/logos/cmp-logo.jpeg" alt="Cross Media Play" />
          <div className="brandTitle">
            <strong>Cross Media Play</strong>
            <span>Comercialización publicitaria • Chile</span>
          </div>
        </Link>

        <nav aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/canales">Canales</Link>
          <Link href="/clientes">Clientes</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
