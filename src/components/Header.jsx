import React from 'react';

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
        <button id="login-button">Ingresar →</button>
      </div>
    </div>
    <nav>
      <ul className="barra-navegacion">
        <li><a href="#">INICIO</a></li>
        <li><a href="#">CATEGORÍAS</a></li>
        <li><a href="#">OFERTAS</a></li>
        <li><a href="#">CONTACTO</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
