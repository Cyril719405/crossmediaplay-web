import Header from '../components/Header';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '569XXXXXXXX'; // TODO: reemplazar por el número real (formato: 56912345678)

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">Contacto</h1>
          <p className="sectionSubtitle">
            Cuéntanos tu objetivo (marca, fechas, presupuesto aproximado, señal(es) de interés) y te enviamos una propuesta.
          </p>

          <div className="grid2">
            <div className="card">
              <h3>Correo</h3>
              <p className="sectionSubtitle" style={{marginBottom: 10}}>
                Para cotizaciones y disponibilidad:
              </p>
              <a className="button" href="mailto:Katina.elgueta@crossmediaplay.com">Katina.elgueta@crossmediaplay.com</a>
            </div>

            <div className="card">
              <h3>WhatsApp</h3>
              <p className="sectionSubtitle" style={{marginBottom: 10}}>
                Respuesta rápida (reemplaza el número en el código cuando lo tengas confirmado).
              </p>
              <a className="button secondary" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Abrir WhatsApp</a>
              <p className="smallNote" style={{marginTop: 10}}>Formato recomendado: 56912345678</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
