import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const WHATSAPP_NUMBER = '569XXXXXXXX'; // TODO: reemplazar por el número real (formato: 56912345678)

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <div className="heroCard">
              <div className="heroGrid">
                <div>
                  <div className="kicker">
                    <span className="pill">Representación comercial</span>
                    <span className="pill">TV Cable + Digital</span>
                    <span className="pill">Chile</span>
                  </div>

                  <h1>Espacios publicitarios en señales premium y medios digitales</h1>
                  <p className="lead">
                    Especialistas en la comercialización de espacios publicitarios en señales premium de TV Cable y medios digitales en Chile.
                  </p>

                  <div className="ctaRow">
                    <a className="button" href="mailto:Katina.elgueta@crossmediaplay.com">Contactar por correo</a>
                    <a className="button secondary" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                    <span className="smallNote">Respuesta rápida para cotizaciones y disponibilidad.</span>
                  </div>
                </div>

                <div className="grid2">
                  <div className="card">
                    <h3>Qué hacemos</h3>
                    <ul className="list">
                      <li>Venta y planificación de pauta en TV Cable premium</li>
                      <li>Propuestas integradas TV + digital</li>
                      <li>Formatos especiales, patrocinios y presencia de marca</li>
                      <li>Acompañamiento comercial de inicio a fin</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3>Por qué Cross Media Play</h3>
                    <ul className="list">
                      <li>Representantes exclusivos de venta de NBCUniversal Networks (TV Cable)</li>
                      <li>Inventario premium y audiencias consolidadas</li>
                      <li>Soluciones a medida para marcas y agencias</li>
                      <li>Ejecución ágil y soporte cercano</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="section" style={{paddingTop: 26}}>
              <h2 className="sectionTitle">Canales representados</h2>
              <p className="sectionSubtitle">Señales premium disponibles para campañas en el mercado chileno.</p>

              <div className="logoStrip" aria-label="Logos de canales">
                <div className="logoTile"><img src="/logos/universal-tv.png" alt="Universal TV" /></div>
                <div className="logoTile"><img src="/logos/studio-universal.png" alt="Studio Universal" /></div>
                <div className="logoTile"><img src="/logos/telemundo.png" alt="Telemundo Internacional" /></div>
                <div className="logoTile"><img src="/logos/e-entertainment.jpeg" alt="E! Entertainment" /></div>
                <div className="logoTile"><img src="/logos/usa.svg" alt="USA Network" /></div>
                <div className="logoTile"><img src="/logos/universal-plus.svg" alt="Universal+" /></div>
              </div>

              <p className="smallNote" style={{marginTop: 10}}>
                ¿Quieres ver detalle de señales y formatos? Revisa <Link href="/canales">Canales</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="sectionTitle">Trabajamos con anunciantes y agencias</h2>
            <p className="sectionSubtitle">
              Nuestros clientes incluyen a los principales anunciadores del mercado chileno, y colaboramos con agencias para maximizar resultados.
            </p>

            <div className="grid2">
              <div className="card">
                <h3>Para marcas</h3>
                <ul className="list">
                  <li>Propuestas alineadas a objetivos (awareness, consideración, lanzamientos)</li>
                  <li>Inventario premium para contextos de alta afinidad</li>
                  <li>Recomendaciones por audiencia y temporalidad</li>
                </ul>
              </div>
              <div className="card">
                <h3>Para agencias</h3>
                <ul className="list">
                  <li>Información clara de disponibilidad y formatos</li>
                  <li>Soporte para planificación y optimización</li>
                  <li>Coordinación ágil para cierres y implementación</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
