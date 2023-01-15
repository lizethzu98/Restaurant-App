import React from 'react'
import Footer from './Footer'

const Menu = () => {
  return (
    <div>
      <div id="menu" className="w3-container w3-black w3-xxlarge w3-padding-64">
        <h1 class="w3-center w3-jumbo w3-padding-32">MENÚ</h1>
        <div id="pizza" className="w3-container w3-white w3-padding-32">
          <h1><b>Té Café</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$80.00</span></h1>
          <p className="w3-text-grey">Té con un dulce sabor</p>
          <hr />

          <h1><b>Cappuccino</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$100</span></h1>
          <p class="w3-text-grey">Espresso, leche al vapor, espuma</p>
          <hr />

          <h1><b>Espresso</b> <span class="w3-tag w3-red w3-round">Hot!</span>
            <span className="w3-right w3-tag w3-dark-grey w3-round">$100.00</span></h1>
          <p className="w3-text-grey">Tostado Arabica 100%</p>

          <h1><b>Café Mocha</b> <span class="w3-tag w3-red w3-round"></span>
            <span className="w3-right w3-tag w3-dark-grey w3-round">$100.00</span></h1>
          <p className="w3-text-grey">Espresso, crema, leche, espuma</p>

          <h1><b>Café Chai</b> <span class="w3-tag w3-red w3-round"></span>
            <span className="w3-right w3-tag w3-dark-grey w3-round">$80.00</span></h1>
          <p className="w3-text-grey">Té de nuez y especias</p>
        </div>
      </div>
    </div>
  )
}

export default Menu