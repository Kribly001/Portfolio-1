// Presentacion.jsx
import React from 'react';
import './Presentacion.css';

const Presentation = (props) => {
  const imageUrl = 'https://media.licdn.com/dms/image/C4E03AQE9GKGNwlL1bw/profile-displayphoto-shrink_800_800/0/1638134096076?e=2147483647&v=beta&t=qWo-WG4RPZknoOH9Zn4Srk4DqsoLXaZtsf3-X06lfK4'; // Reemplaza con tu enlace de imagen

  return (
    <div className="presentation-container">
      <div className="text-container">
        <strong>Bienvenido a mi Portfolio</strong>
        <p>¡Hola! Soy Maxi Centeno, un apasionado desarrollador web.</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Mi Foto" />
      </div>
    </div>
  );
};

export default Presentation;


