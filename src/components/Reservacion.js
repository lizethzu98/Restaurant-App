import React from 'react'
import '../w3.css';
import '../font.css';




const Reservacion = () => {
  return (

  <div>

      <img id="contact" src={require('../image/Como-organizar-las-reservas-en-un-restaurante.jpg')} className="w3-image w3-greyscale" alt="Map" style={{width:"100%"}}/>

        <div className="w3-container w3-blue-grey w3-grayscale-min w3-xlarge w3-padding-top-32">

          <h1 className="w3-center w3-jumbo">Contact</h1>

          <p>Find us at some [address] or call us at 05050515-122330</p>
          <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>

          <p className="w3-xxlarge"><b>Reserve</b> a table, ask for today's special or just send us a message:</p>

          <form action="/action_page.php" target="_blank">

            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00" /></p>

            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>

            <p><button className="w3-button w3-light-grey w3-block" type="submit">SEND MESSAGE</button></p>

          </form>

        </div>

  </div>


        )
}

        export default Reservacion