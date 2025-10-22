import React from 'react';
import Card from '../components/Card';

const cartas = [
  {
    img: '/img/reshiram.jpg',
    tipo: 'POKÉMON',
    nombre: 'Reshiram',
    descripcion: '(113/114) [Black & White: Base Set]'
  },
  {
    img: '/img/charizard-ex.jpg',
    tipo: 'POKÉMON',
    nombre: 'Charizard EX',
    descripcion: '(065/165) [Scarlet & Violet 151]'
  },
  {
    img: '/img/zoro.jpg',
    tipo: 'ONE PIECE',
    nombre: 'Roronoa Zoro',
    descripcion: '(OP01-025) [Parallel]'
  },
  {
    img: '/img/blue-eyes.jpg',
    tipo: 'YU-GI-OH',
    nombre: 'Blue-Eyes White Dragon',
    descripcion: '(SDK-001) Ultra Rare'
  },
  {
    img: '/img/delirium.jpg',
    tipo: 'FOUR SOULS',
    nombre: 'Delirium',
    descripcion: 'Base Game'
  },
  {
    img: '/img/charizard.jpg',
    tipo: 'POKÉMON',
    nombre: 'Charizard',
    descripcion: '(4/102) [Base Set]'
  }
];

const Home = () => (
  <main>
    <section className="bloque-promos">
      <div className="bloque-carta">
        <div className="carta-img">
          <img src="/img/promo1.jpg" alt="Imagen promocional 1" />
        </div>
        <div className="info-carta">
          <h2>Últimas novedades</h2>
        </div>
      </div>
      <div className="bloque-carta">
        <div className="carta-img">
          <img src="/img/promo2.jpg" alt="Imagen promocional 2" />
        </div>
        <div className="info-carta">
          <h2>Compra y vende de forma segura</h2>
        </div>
      </div>
    </section>

    <section className="cartas-recientes">
      <h2>Publicadas recientemente</h2>
      <div className="cartas">
        {cartas.map((carta, index) => (
          <Card key={index} {...carta} />
        ))}
      </div>
    </section>
  </main>
);

export default Home;
