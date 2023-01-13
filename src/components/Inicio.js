import React from 'react'
import '../w3.css';
import '../font.css';
import {Helmet} from "react-helmet";

const Inicio = () => {
  return (
   <div>
     <Helmet htmlAttributes>
    <script src="https://www.w3schools.com/lib/w3.js"></script>
    
          </Helmet>

    <div
    
    style="height:800px;background-image:url('src/image/274819503_5285176481519680_7804967844727730042_n.jpg');background-size:cover" class="w3-display-container w3-grayscale-min">
<div class="w3-display-bottomleft">
<span class="w3-tag w3-xlarge">Open from 10am to 12pm</span>
</div>
<div class="w3-display-middle w3-center">
<span class="w3-text-white" style="font-size:100px">thin<br/>CRUST PIZZA</span>
<p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
</div>
    </div>
   </div>
  )
}

export default Inicio