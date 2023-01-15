import React from 'react'
import '../w3.css';
import '../font.css';
import { Helmet } from "react-helmet";
import '../scss/BarraMenu.scss';


const Inicio = () => {
  return (
    <div>

      <div className="w3-display-container w3-grayscale-min imagenInicio">
        <div className="w3-display-bottomleft">
          <span className="w3-tag w3-xlarge">Open from 10am to 12pm</span>
        </div>
        <div className="w3-display-middle w3-center">
          <span className="w3-text-white">thin<br />CRUST PIZZA</span>
          <p><a href="#menu" className="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
        </div>
      </div>
    </div>
  )
}

export default Inicio