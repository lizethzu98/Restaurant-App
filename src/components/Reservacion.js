import React from 'react'
import '../w3.css';
import '../font.css';
import Footer from './Footer';

const Reservacion = () => {
  return (

  <div>

      <img id="contact" src={require('../image/Como-organizar-las-reservas-en-un-restaurante.jpg')} className="w3-image w3-greyscale" alt="Map" style={{width:"100%"}}/>

        <div className="w3-container w3-blue-grey w3-grayscale-min w3-xlarge w3-padding-top-32">

          <h1 className="w3-center w3-jumbo">Contactanos</h1>

          <p className="w3-xxlarge"><b>Reserva</b> Pregunta por ofertas especiales o mandanos mensaje:</p>

          <form action="/action_page.php" target="_blank">

            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Nombre" required name="Nombre" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="¿Cuántas personas?" required name="Personas" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Dia y Hora" required name="dia" value="2020-11-16T20:00" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Mensaje/Requerimientos" required name="Mensaje" /></p>

            <p><button className="w3-button w3-light-grey w3-block" type="submit">Enviar Mensaje</button></p>

          </form>


          <Footer />
        </div>

  </div>


        )
}

        export default Reservacion