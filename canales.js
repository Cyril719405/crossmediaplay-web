import Header from '../components/Header';
import Footer from '../components/Footer';

const canales = [
  { name: 'Universal TV', file: '/logos/universal-tv.png' },
  { name: 'Studio Universal', file: '/logos/studio-universal.png' },
  { name: 'Telemundo Internacional', file: '/logos/telemundo.png' },
  { name: 'USA Network', file: '/logos/usa.svg' },
  { name: 'E! Entertainment', file: '/logos/e-entertainment.jpeg' },
  { name: 'Universal+', file: '/logos/universal-plus.svg' },
];

export default function Canales() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">Canales representados</h1>
          <p className="sectionSubtitle">
            Señales premium disponibles para acciones publicitarias en Chile.
          </p>

          <div className="logoStrip" style={{gap: 16}}>
            {canales.map((c) => (
              <div key={c.name}>
                <div className="logoTile" style={{height: 74, minWidth: 210}}>
                  <img src={c.file} alt={c.name} style={{maxHeight: 44, maxWidth: 170}} />
                </div>
                <div className="logoCaption">{c.name}</div>
              </div>
            ))}
          </div>

          <div style={{marginTop: 28}} className="card">
            <h3>Formatos y disponibilidad</h3>
            <p className="sectionSubtitle" style={{marginBottom: 0}}>
              Para recibir una propuesta (mix de señales, duración, fechas y formatos), escríbenos y te enviamos alternativas según objetivo de campaña.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
