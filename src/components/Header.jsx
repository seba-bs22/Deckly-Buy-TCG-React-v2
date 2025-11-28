import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() === "") return;

    // Pasamos la query al Search.jsx usando state
    navigate("/search", { state: { query } });
  };

  return (
    <header>
      <div className="bloque-buscador">
        <div className="logo">
          <img src="/img/decklybuytcg.png" alt="Logo DecklyBuyTCG" />
        </div>

        <div className="buscador">
          <input
            type="text"
            placeholder="BUSCA TU CARTA"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="boton-ingresar">
          <Link to="/login">
            <button>Ingresar →</button>
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
};

export default Header;
