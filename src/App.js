import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from "./pages";

function App() {

    const [pizzas, SetPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            SetPizzas(data.pizzas)
        })
    }, [])

    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <Home items={pizzas} />
                        }>
                        </Route>
                        <Route exact path="/cart" element={
                            <Cart />
                        }>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
