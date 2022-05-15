//import { createSlice } from "@reduxjs/toolkit"

//// т.е мы здесь соеденили action и reducer вместе
//const pizzasSlice = createSlice({
//    name: 'pizzas',
//    initialState: {
//        items: [],
//        isLoaded: false
//    },
//    reducers: {
//        setPizzas(state, action) {
//            return {
//                ...state,
//                items: action.payload,
//                isLoaded: true
//            }
//        }
//    }

//})

//export const { setPizzas } = pizzasSlice.actions
//export default pizzasSlice.reducer







////const initialState = {
////    items: [],
////    isLoaded: false
////}

////export function pizzas(state = initialState, action) {
////    switch (action.type) {
////        case "SET_PIZZAS":
////            return {
////                ...state,
////                items: state.payload,
////                isLoaded: true
////            }
////        default:
////            return state
////    }
////}