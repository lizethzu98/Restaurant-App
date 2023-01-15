import React from 'react'
import Footer from './Footer'
const Direccion = () => {
  return (
    <div>

    <img id="contact" src={require('../image/cafeteria.jpeg')} className="w3-image w3-greyscale" alt="Map" style={{width:"100%"}}/>

      <div className='w3-container w3-red w3-grayscale w3-xlarge'>
        <h1><b>APERTURA!</b></h1>
        <h4><b>Nos ubicamos en calle Aldama S/N Tlalpan Ciudad de México</b></h4>

        <div className="w3-row">
          <div className="w3-half">
            <p>Abrimos &amp; Cerramos</p>
            <p>Miercoles 10.00 - 24.00</p>
            <p>Jueves 10:00 - 24:00</p>
          </div>
          <div className="w3-half">
            <p>Viernes 10:00 - 12:00</p>
            <p>Sábado 10:00 - 23:00</p>
            <p>Domingo Cerramos</p>
          </div>

        </div >

        <Footer />
      </div>

    </div>

  )
}

export default Direccion