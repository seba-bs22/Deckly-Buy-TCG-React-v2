import React from 'react';
import Card from './Card';

const CategorySection = ({ id, titulo, cartas, onBack }) => (
  <section id={id} className="categoria-seccion">
    <h2 className="titulo-categoria">{titulo}</h2>
    <div className="cartas">
      {cartas.map((carta, index) => (
        <Card key={index} {...carta} />
      ))}
    </div>
    <button className="btn-volver" onClick={onBack}>← VOLVER</button>
  </section>
);

export default CategorySection;
