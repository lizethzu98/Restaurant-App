import React from 'react'
import '../w3.css';
import '../font.css';
import Footer from './Footer';

const Inicio = () => {
  return (
    
      <div className="w3-display-container w3-grayscale-min imagenInicio">
        <div className="w3-display-bottomleft">
          <span className="w3-tag w3-xlarge">Abrimos de 10am a 12pm</span>
        </div>
        <div className="w3-display-middle w3-center">
          <span className="w3-tag w3-xlarge" style={{fontSize:'200px'}}>MI<br />CAFÉ</span>
          <p><a href="/menu" className="w3-button w3-xxlarge w3-black" style={{fontSize:'400px'}}>Ir al Menú</a></p>
        </div>

        
      </div>
    
  )
}

export default Inicio