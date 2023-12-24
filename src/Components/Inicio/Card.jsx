// src/components/Inicio/Card.jsx
import React from 'react';
import './Index.css';

const Card = () => {
  const cardData = [
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=1', title: 'Título de la tarjeta 1', content: 'Contenido de la tarjeta 1' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=2', title: 'Título de la tarjeta 2', content: 'Contenido de la tarjeta 2' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=3', title: 'Título de la tarjeta 3', content: 'Contenido de la tarjeta 3' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=4', title: 'Título de la tarjeta 4', content: 'Contenido de la tarjeta 4' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=5', title: 'Título de la tarjeta 5', content: 'Contenido de la tarjeta 5' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=6', title: 'Título de la tarjeta 6', content: 'Contenido de la tarjeta 6' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=7', title: 'Título de la tarjeta 7', content: 'Contenido de la tarjeta 7' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=8', title: 'Título de la tarjeta 8', content: 'Contenido de la tarjeta 8' },
    { imageUrl: 'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=9', title: 'Título de la tarjeta 9', content: 'Contenido de la tarjeta 9' },
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.imageUrl} alt={`Descripción de la imagen`} />
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
