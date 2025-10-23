import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="bloque-buscador">
      <div className="logo">
        <img src="/img/decklybuytcg.png" alt="Logo DecklyBuyTCG" />
      </div>
      <div className="buscador">
        <input type="text" placeholder="BUSCA TU CARTA" id="search-input" />
        <button id="search-button">Buscar</button>
      </div>
      <div className="boton-ingresar">
        <Link to="/login">
        <button id="login-button">Ingresar →</button>
        </Link>
      </div>
    </div>
    <nav>
      <ul className="barra-navegacion">
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/categories">CATEGORÍAS</Link></li>
        <li><Link to="/offers">OFERTAS</Link></li>
        <li><Link to="/contact">CONTACTO</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
