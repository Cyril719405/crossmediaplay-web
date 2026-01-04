import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Servicios() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">Servicios</h1>
          <p className="sectionSubtitle">Soluciones comerciales para campañas en TV Cable premium y medios digitales en Chile.</p>

          <div className="grid2">
            <div className="card">
              <h3>Comercialización de espacios</h3>
              <ul className="list">
                <li>Venta de pauta en señales premium de TV Cable</li>
                <li>Planificación de campañas por audiencia y objetivos</li>
                <li>Gestión de disponibilidad, cierres y calendario</li>
              </ul>
            </div>

            <div className="card">
              <h3>Formatos especiales</h3>
              <ul className="list">
                <li>Patrocinios y presencias de marca</li>
                <li>Menciones / integraciones (según disponibilidad)</li>
                <li>Paquetes y propuestas a medida</li>
              </ul>
            </div>

            <div className="card">
              <h3>Propuestas integradas</h3>
              <ul className="list">
                <li>Combinación TV + digital para mayor alcance</li>
                <li>Estrategia de cobertura y frecuencia</li>
                <li>Recomendaciones de pauta por temporada</li>
              </ul>
            </div>

            <div className="card">
              <h3>Soporte para agencias</h3>
              <ul className="list">
                <li>Respuestas rápidas para cotización y espacios</li>
                <li>Documentación y material comercial</li>
                <li>Acompañamiento en todo el proceso</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
