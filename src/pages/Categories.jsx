import React, { useState } from 'react';
import CategorySection from '../components/CategorySection';

const categoriesData = {
  pokemon: {
    titulo: 'Mostrando cartas de Pokémon',
    cartas: [
      { img: '/img/reshiram.jpg', tipo: 'POKÉMON', nombre: 'Reshiram', descripcion: '(113/114) [Black & White: Base Set]' },
      { img: '/img/charizard.jpg', tipo: 'POKÉMON', nombre: 'Charizard', descripcion: '(4/102) [Base Set]' },
      { img: '/img/gardevoir.jpg', tipo: 'POKÉMON', nombre: 'Gardevoir EX', descripcion: '(93/100) [Sandstorm]' },
      { img: '/img/lucario.jpg', tipo: 'POKÉMON', nombre: 'Lucario', descripcion: '(20/130) [Great Encounters]' },
      { img: '/img/mewtwo.jpg', tipo: 'POKÉMON', nombre: 'Mewtwo', descripcion: '(10/102) [Base Set]' },
      { img: '/img/rayquaza.jpg', tipo: 'POKÉMON', nombre: 'Rayquaza EX', descripcion: '(97/107)' }
    ]
  },
  magic: {
    titulo: 'Mostrando cartas de Magic: The Gathering',
    cartas: [
      { img: '/img/blacklotus.jpg', tipo: 'MAGIC', nombre: 'Black Lotus', descripcion: '(Alpha Set)' },
      { img: '/img/jace.jpg', tipo: 'MAGIC', nombre: 'Jace, the Mind Sculptor', descripcion: '(Worldwake)' },
      { img: '/img/liliana.jpg', tipo: 'MAGIC', nombre: 'Liliana of the Veil', descripcion: '(Innistrad)' },
      { img: '/img/tarmogoyf.jpg', tipo: 'MAGIC', nombre: 'Tarmogoyf', descripcion: '(Future Sight)' },
      { img: '/img/serraangel.jpg', tipo: 'MAGIC', nombre: 'Serra Angel', descripcion: '(Revised Edition)' },
      { img: '/img/snapcaster.jpg', tipo: 'MAGIC', nombre: 'Snapcaster Mage', descripcion: '(Innistrad)' }
    ]
  },
  yugioh: {
    titulo: 'Mostrando cartas de Yu-Gi-Oh!',
    cartas: [
      { img: '/img/blueeyes2.jpg', tipo: 'YU-GI-OH!', nombre: 'Blue-Eyes White Dragon', descripcion: '(LOB-001)' },
      { img: '/img/darkmagician.jpg', tipo: 'YU-GI-OH!', nombre: 'Dark Magician', descripcion: '(SDY-006)' },
      { img: '/img/redeyes.jpg', tipo: 'YU-GI-OH!', nombre: 'Red-Eyes Black Dragon', descripcion: '(SDJ-001)' },
      { img: '/img/exodia.jpg', tipo: 'YU-GI-OH!', nombre: 'Exodia the Forbidden One', descripcion: '(LOB-124)' },
      { img: '/img/jinzo.jpg', tipo: 'YU-GI-OH!', nombre: 'Jinzo', descripcion: '(PSV-000)' },
      { img: '/img/mirrorforce.jpg', tipo: 'YU-GI-OH!', nombre: 'Mirror Force', descripcion: '(MRD-138)' }
    ]
  },
  mitos: {
    titulo: 'Mostrando cartas de Mitos y Leyendas',
    cartas: [
      { img: '/img/odin.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Odín', descripcion: '(El Reto)' },
      { img: '/img/hadas.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Hadas', descripcion: '(El Reto)' },
      { img: '/img/walkirias.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Walkirias', descripcion: '(El Reto)' },
      { img: '/img/frutosagrado.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Fruto Sagrado', descripcion: '(El Reto)' },
      { img: '/img/thor.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Thor', descripcion: '(El Reto)' },
      { img: '/img/loki.jpg', tipo: 'MITOS Y LEYENDAS', nombre: 'Loki', descripcion: '(Helheim)' }
    ]
  }
};

const Categories = () => {
  const [selected, setSelected] = useState(null);
  const handleBack = () => setSelected(null);

  return (
    <main>
      {!selected && (
        <>
          <section className="programada">
            <h2>Elige tu juego favorito</h2>
          </section>
          <section className="bloque-promos">
            {Object.keys(categoriesData).map((key) => (
              <div key={key} className="bloque-carta bloque-carta-categorias">
                <div className="carta-img">
                  <img src={`/img/${key}-logo.png`} alt={`Logo ${key}`} className="logo-juego" />
                </div>
                <div className="info-carta">
                  <button onClick={() => setSelected(key)}>VER CARTAS</button>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
      {selected && (
        <CategorySection
          id={`seccion-${selected}`}
          titulo={categoriesData[selected].titulo}
          cartas={categoriesData[selected].cartas}
          onBack={handleBack}
        />
      )}
    </main>
  );
};

export default Categories;
