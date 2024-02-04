import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import MyNavbar from './Navbar'; // Importar el componente renombrado
import './Main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyNavbar /> {/* Renderizar el Navbar primero */}
  </React.StrictMode>,
);

