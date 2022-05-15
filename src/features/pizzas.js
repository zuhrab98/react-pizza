import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    isLoaded: false
}

// т.е мы здесь соеденили action и reducer вместе
const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        // При вызове dispatch(отправить) мы передаем в него аргументы 
        // нашу функцию редьюсер setSortBy() а внутри него передаем action, а тип действия
        // создается автоматически вот так => { type: 'pizzas/setPizzas', payload: [1,2,3] }
        setPizzas: (state, action)=> {
            //return {
            //    ...state,
            //    items: [...action.payload],
            //    isLoaded: true
            //}
            state.items = [...action.payload]
            state.isLoaded = true

            //state.items.push(...action.payload)
        }
    }

})

export const { setPizzas } = pizzasSlice.actions
export default pizzasSlice.reducer







//const initialState = {
//    items: [],
//    isLoaded: false
//}

//export function pizzas(state = initialState, action) {
//    switch (action.type) {
//        case "SET_PIZZAS":
//            return {
//                ...state,
//                items: state.payload,
//                isLoaded: true
//            }
//        default:
//            return state
//    }
//}