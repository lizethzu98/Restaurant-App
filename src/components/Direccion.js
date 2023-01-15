import React from 'react'
import Footer from './Footer'
const Direccion = () => {
  return (
    <div>

    <img id="contact" src={require('../image/cafeteria.jpeg')} className="w3-image w3-greyscale" alt="Map" style={{width:"100%"}}/>

      <div className='w3-container w3-red w3-grayscale w3-xlarge'>
        <h1><b>Opening Hours</b></h1>

        <div className="w3-row">
          <div className="w3-half">
            <p>Mon &amp; Tue CLOSED</p>
            <p>Wednesday 10.00 - 24.00</p>
            <p>Thursday 10:00 - 24:00</p>
          </div>
          <div className="w3-half">
            <p>Friday 10:00 - 12:00</p>
            <p>Saturday 10:00 - 23:00</p>
            <p>Sunday Closed</p>
          </div>

        </div >

        <Footer />
      </div>

    </div>

  )
}

export default Direccion