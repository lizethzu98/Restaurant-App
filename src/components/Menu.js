import React from 'react'

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
        </div>

        <h1 id="pasta" className="w3-center w3-jumbo w3-padding-32">PASTA</h1>
        <div className="w3-container w3-white w3-padding-32">

          <h1><b>Lasagna</b> <span className="w3-tag w3-grey w3-round">Popular</span>
            <span className="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
          <p className="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
          <hr />

          <h1><b>Ravioli</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
          <p className="w3-text-grey">Ravioli filled with cheese</p>
          <hr />

          <h1><b>Spaghetti Classica</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
          <p className="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
        </div>

        <h1 id="starters" className="w3-center w3-jumbo w3-padding-32">STARTERS</h1>
        <div className="w3-container w3-white w3-padding-32">

          <h1><b>Today's Soup</b> <span className="w3-tag w3-grey w3-round">Seasonal</span>
            <span className="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
          <p className="w3-text-grey">Ask the waiter</p>
          <hr />

          <h1><b>Bruschetta</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
          <p className="w3-text-grey">Bread with pesto, tomatoes, onion, garlic</p>
          <hr />

          <h1><b>Garlic bread</b> <span className="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
          <p className="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
        </div>
      </div>
    </div>
  )
}

export default Menu