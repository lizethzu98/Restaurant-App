
import React from 'react';
import direccion from './Direccion';
import inicio from './Inicio';
import menu from './Menu';
import reservacion from './Reservacion';


const BarraMenu = () => {
  return (
    
    <main className="main">
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li className="active"><a href="/home">Inicio</a></li>
          <li><a href='/menu'>Menú</a></li>
          <li><a href='direccion'>Dirección y Horarios</a></li>
          <li><a href='reservacion'>Reservación</a></li>
        </ul>
      </nav>
    </aside>
    <div></div>
    <section className="twitter">
    <div className="container">
      
    </div>
  </section>
  
</main>
  )
}

export default BarraMenu