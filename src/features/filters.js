
// Это та часть которая отвечает за инициализацию state в наш store 
// и за все фун. которые связаны с этим state
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: 0,
    sortBy: 'popular'
}


const filterSlice = createSlice({
    // мы даем имя нашему редусеру
    name: 'filter',
    initialState,
    // это объект редьюсеров т.е функ-й который будет упровлять нашим состоянием 
    reducers: {
        // При вызове dispatch(отправить) мы передаем в него аргументы 
        // нашу функцию редьюсер setSortBy() а внутри него передаем action, а тип действия
        // создается автоматически вот так => { type: 'pizzas/setPizzas', payload: [1,2,3] }
        setSortBy(state, action) {
            state.sortBy = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        }
    }
})

export const { setSortBy } = filterSlice.actions
// этот редьюсер передаем в store
export default filterSlice.reducer









//const initialState = {
//    category: 0,
//    sortBy: "popular"
//}

//export function filters(state = initialState, action) {
//    switch (action.type) {
//        case "SET_SORT_BY":
//            return {
//                ...state,
//                sortBy: action.payload
//            }
//        default:
//            return state
//    }
//}