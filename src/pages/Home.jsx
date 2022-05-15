import React from 'react'
import { useSelector } from 'react-redux'

import { Categories, SortPopup, PizzaBloсk } from '../components'


export function Home() {

    // получаем актуальный стате
    const pizzas = useSelector(state => state.pizzas.items)
    console.log("Home => pizzas", pizzas)
    
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                    <SortPopup items={['популярности', 'цене', 'алфавиту']} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className='content__items'>
                    {pizzas.map(obj => {
                        return <PizzaBloсk key={obj.id} {...obj} />
                    })}
                </ div>
            </div>
        </div>
    )
}