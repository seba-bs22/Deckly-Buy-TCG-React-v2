import { useLocation } from "react-router-dom";
import allCards from "../data/AllCards";
import Card from "../components/Card";

function Search() {
  const location = useLocation();
  const query = location.state?.query || "";

  const results = allCards.filter(card =>
    card.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <h2>Resultados para: "{query}"</h2>

      {results.length === 0 && <p>No se encontraron cartas.</p>}

      <div className="cartas">
        {results.map((card, i) => (
          <Card
            key={i}
            img={card.img}
            tipo={card.tipo}
            nombre={card.nombre}
            descripcion={card.descripcion}
          />
        ))}
      </div>
    </main>
  );
}

export default Search;
