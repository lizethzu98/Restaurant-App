import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import BarraMenu from './components/BarraMenu';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    <main className="main">
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

);


