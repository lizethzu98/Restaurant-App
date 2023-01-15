import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Menu from './components/Menu';
import Reservacion from './components/Reservacion';
import Inicio from './components/Inicio';
import Direccion from './components/Direccion';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";
import { Row,Container,Col } from 'react-bootstrap';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/Direccion" element={<Direccion />}></Route>
            <Route path="/Reservacion" element={<Reservacion />}></Route>
        </Route>


    )
);

ReactDOM.createRoot(document.getElementById("root")).render(

    <div>
        <main className="main">
            <Helmet htmlAttributes>
                <script src="https://www.w3schools.com/lib/w3.js"></script>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <script src="https://www.w3schools.com/lib/w3.js"></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
                <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'></link>
            </Helmet>
                <aside className="sidebar">
                    <nav className="nav">
                        <ul>
                            <li className="active"><a href="/Inicio">Inicio</a></li>
                            <li><a href='/menu'>Menú</a></li>
                            <li><a href='direccion'>Dirección y Horarios</a></li>
                            <li><a href='reservacion'>Reservación</a></li>
                        </ul>
                    </nav>
                </aside>
                <section className="twitter">
                    <div className="container">
                        <RouterProvider router={router} />
                    </div>

                </section>

        </main>
    </div>

);
