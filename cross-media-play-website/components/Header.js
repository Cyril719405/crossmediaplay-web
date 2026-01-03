
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/canales">Canales</Link>
        <Link href="/clientes">Clientes</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
