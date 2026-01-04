export default function Footer() {
  return (
    <footer>
      <div className="container footerGrid">
        <div className="smallNote">© {new Date().getFullYear()} Cross Media Play · Chile</div>
        <div className="smallNote">
          Contacto: <a href="mailto:Katina.elgueta@crossmediaplay.com">Katina.elgueta@crossmediaplay.com</a>
        </div>
      </div>
    </footer>
  );
}
