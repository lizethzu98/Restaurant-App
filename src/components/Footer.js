import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">Something</h1>

                <h2>Contactanos</h2>

                <address>
                Nos ubicamos en calle Aldama S/N Tlalpan Ciudad de México<br />

                    <a className="footer__btn" href="mailto:example@gmail.com">Mandar Email</a>
                </address>
            </div>

            <ul className="footer__nav">

                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="/">Politicas de Privacidad</a>
                        </li>

                        <li>
                            <a href="/">Terminos y Condiciones</a>
                        </li>

                        <li>
                            <a href="/">Mapa de sitio</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="legal">
             

                <div className="legal__links">
                    <span>2023 React UCamp Todos los derechos reservados</span>
                </div>
            </div>
        </div>
    )
}

export default Footer