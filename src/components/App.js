import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BarraMenu from './BarraMenu';

const App = () => {
    return (
        <BrowserRouter>
            <BarraMenu />
            <Route path="/inicio"></Route>
        </BrowserRouter>
    )
}

export default App