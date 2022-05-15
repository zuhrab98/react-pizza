//// Это та часть которая отвечает за инициализацию state в наш store 
//// и за все фун. которые связаны с этим state
//import { createSlice } from "@reduxjs/toolkit"

//const initialState = {
//    category: 0,
//    sortBy: 'popular'
//}


//const filterSlice = createSlice({
//    // мы даем имя нашему редусеру
//    name: 'filter',
//    initialState,
//    // это объект функций который будет упровлять нашим состоянием 
//    reducers: {
//        // здесь у нас два action, все создатели действий и типы действий генерируются автоматически
//        setSortBy: (state, action) => {
//            state.sortBy = action.payload
//        },
//        setCategory: (state, action) => {

//        }
//    }
//})

//export const { setSortBy } = filterSlice.actions

//// этот редьюсер передаем в store
//export default filterSlice.reducer




////const initialState = {
////    category: 0,
////    sortBy: "popular"
////}

////export function filters(state = initialState, action) {
////    switch (action.type) {
////        case "SET_SORT_BY":
////            return {
////                ...state,
////                sortBy: action.payload
////            }
////        default:
////            return state
////    }
////}