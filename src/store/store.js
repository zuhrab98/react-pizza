// это сам магазин redux который хронит данные глобально
import { configureStore } from "@reduxjs/toolkit";
import filterSlice, { setSortBy } from "../features/filters"
import pizzasSlice, { setPizzas } from '../features/pizzas'

// комбинируев наши редьюсеры в однин редьюсер
export const store = configureStore({
    reducer: {
        filters: filterSlice,
        pizzas: pizzasSlice
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = {
    store: store,
    setSortBy: setSortBy,
    setPizzas: setPizzas
}