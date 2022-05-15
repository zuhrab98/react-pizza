import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from "./pages";
import { setPizzas } from './features/pizzas'

function App() {

    const dispatch = useDispatch()
    //const [pizzas, setPizzas] = useState([])
    
    // при первом рендере
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [dispatch])

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


//class App extends React.Component {

//    componentDidMount() {
//        axios.get('http://localhost:3000/db.json').then(({ data }) => {
//            //console.log(pizzasSlice(setPizzas(data.pizzas))
//            //store.dispatch( pizzasSlice( setPizzas(data.pizzas) ) )
//        })
//    }

//    render() {
//        return (
//            <div>
//                <div className="wrapper">
//                    <Header />
//                    <div className="content">
//                        <Routes>
//                            <Route path="/" element={
//                                <Home items={[]} />
//                            }>
//                            </Route>
//                            <Route exact path="/cart" element={
//                                <Cart />
//                            }>
//                            </Route>
//                        </Routes>
//                    </div>
//                </div>
//            </div >
//        )
//    }
//}
export default App;
