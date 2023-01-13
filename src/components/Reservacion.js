import React from 'react'
import '../w3.css';
import '../font.css';
import {Helmet} from "react-helmet";
const Reservacion = () => {
  return (
    
<div>
<Helmet htmlAttributes>
<script src="https://www.w3schools.com/lib/w3.js"></script>

      </Helmet>
      <h1>
        Contactanos 
      </h1>
      <p><input className='w3-input w3-padding-16 w3-border' type='text' placeholder='Nombre' required name='Nombre'/></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="¿Cuántas personas?" required name="Personas"/></p>

<p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Dia y Hora" required name="date" value="2020-11-16T20:00"/></p>

<p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Mensaje \ Requerimientos Especiales" required name="Message"/></p>

<p><button class="w3-button w3-light-grey w3-block" type="submit">Enviar Reservacion</button></p>


    </div >

  )
}

export default Reservacion