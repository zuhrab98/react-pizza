import React from "react";
import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from "./pages";

function App() {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <Home />
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
