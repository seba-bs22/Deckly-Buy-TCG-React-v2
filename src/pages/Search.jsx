import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function Search() {
  const location = useLocation();
  const query = location.state?.query || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    setLoading(true);
    setResults([]); // limpiar resultados previos

    fetch(`http://localhost:8080/api/cards/search?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar cartas que tengan imagen
        const validCards = data.filter((card) => card.img);

        // Pre-cargar imágenes
        const preloadPromises = validCards.map(
          (card) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = card.img;
              img.onload = () => resolve(card);
              img.onerror = () => resolve(null);
            })
        );

        // Espera de 2 seg / Carga simultanea de img
        Promise.all(preloadPromises).then((loadedCards) => {
          setTimeout(() => {
            setResults(loadedCards.filter(Boolean));
            setLoading(false);
          }, 2000);
        });
      })
      .catch((err) => {
        console.error("Error fetching cards:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <main>
      <h2>Resultados para: "{query}"</h2>

      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {!loading && results.length === 0 && <p className="cargando">No se encontraron cartas.</p>}

      <div className="cartas">
        {results.map((card, i) => (
          <Card
            key={i}
            img={card.img}
            nombre={card.nombre}
            tipo="POKÉMON" // fijo por ahora
            descripcion="" // vacio por ahora
          />
        ))}
      </div>
    </main>
  );
}
