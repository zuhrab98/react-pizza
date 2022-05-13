import React from 'react'

import { Categories, SortPopup, PizzaBloсk } from '../components'


export function Home({ items }) {
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                    <SortPopup items={['популярности', 'цене', 'алфавиту']} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className='content__items'>
                    {items.map(obj => {
                        return <PizzaBloсk key={obj.id} {...obj} />
                    })}
                </ div>
            </div>
        </div>
    )
}