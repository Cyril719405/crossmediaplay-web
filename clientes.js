import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Clientes() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">Clientes</h1>
          <p className="sectionSubtitle">
            Nuestros clientes son los principales anunciadores del mercado chileno.
          </p>

          <div className="grid2">
            <div className="card">
              <h3>Anunciantes</h3>
              <p className="sectionSubtitle">
                Podemos mostrar logos y casos cuando estén autorizados. Si quieres, envíanos la lista de marcas y los incorporamos como grilla.
              </p>
              <ul className="list">
                <li>Retail / e-commerce</li>
                <li>Banca y servicios financieros</li>
                <li>Telecomunicaciones</li>
                <li>Automotriz</li>
                <li>Consumo masivo</li>
              </ul>
            </div>

            <div className="card">
              <h3>Agencias</h3>
              <p className="sectionSubtitle">
                Trabajamos con agencias de medios y creativas para acelerar cotizaciones, cierres y ejecuciones.
              </p>
              <ul className="list">
                <li>Soporte comercial y coordinación</li>
                <li>Materiales y fichas de formatos</li>
                <li>Propuestas integradas TV + digital</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
