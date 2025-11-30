import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CategorySection({ titulo, cartas = [], onBack }) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1); // página inicia en 1
  const [loading, setLoading] = useState(false);

  const totalPages = 3; // solo 3 páginas
  const esPokemon = titulo.toLowerCase().includes("pokémon");

  // Inicializar cartas locales (para categorías normales)
  useEffect(() => {
    if (!esPokemon) {
      setCards(cartas || []);
    }
  }, [cartas, esPokemon]);

  // Cargar cartas Pokémon según página
  useEffect(() => {
    if (!esPokemon) return;

    const loadPokemon = async () => {
      setLoading(true);

      try {
        const url = `http://localhost:8080/api/cards/pokemon?page=${page}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Respuesta inválida Pokémon:", data);
          setCards([]);
          setLoading(false);
          return;
        }

        // Pre-cargar imágenes
        const preload = data.map(card =>
          new Promise(resolve => {
            const img = new Image();
            img.src = card.img;
            img.onload = resolve;
            img.onerror = resolve;
          })
        );

        await Promise.all(preload);

        const formatted = data.map(c => ({
          img: c.img,
          nombre: c.nombre,
          tipo: "POKÉMON",
          descripcion: ""
        }));

        setCards(formatted);
      } catch (error) {
        console.error("Error carga Pokémon:", error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [esPokemon, page]);

  return (
    <section className="categoria-contenedor">
      <button className="btn-volver" onClick={onBack}>← VOLVER</button>
      <h2>{titulo}</h2>

      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      <div className="cartas">
        {!loading &&
          (cards || []).map((card, i) => (
            <Card
              key={i}
              img={card.img}
              nombre={card.nombre}
              tipo={card.tipo}
              descripcion={card.descripcion}
            />
          ))
        }
      </div>

      {esPokemon && (
        <div className="paginacion-container">
          <button
            className="paginacion-btn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </button>

          <span>Página {page} de {totalPages}</span>

          <button
            className="paginacion-btn"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        </div>
      )}

    </section>
  );
}
