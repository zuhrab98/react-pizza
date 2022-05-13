import classNames from 'classnames'
import React, { useState } from 'react'
import PropTypes from 'prop-types'


export function PizzaBloсk({ imageUrl, types, sizes, name, price, category }) {

    // types -> [0,1], показывает какой тип доступен 'тонкое' или 'традиционное'
    const aveilableTypes = ['тонкое', 'традиционное']
    const aveilableSizes = [26, 30, 40]

    const [activeTypes, setActiveTypes] = useState(types[0])
    const [activeSizes, setActiveSizes] = useState(sizes[0])


    const onSelectType = (index) => {
        // добавили в state индекс элемента по которому кликнули
        setActiveTypes(index)
    }

    const onSelectSize = (index) => {
        // добавили в state индекс элемента по которому кликнули
        setActiveSizes(index)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {aveilableTypes.map((type, index) => (
                        <li
                            onClick={() => onSelectType(index)}
                            key={type}
                            className={classNames({
                                // класс active применится в том случае если прачая часть будет true
                                active: activeTypes === index,
                                // если в types нету индекса т.е ['тонкое', 'традиционное'] то делаем disabled
                                disabled: !types.includes(index)
                            })}>
                            {type}
                        </li>)
                    )}
                </ul>
                <ul>
                    {aveilableSizes.map((size, index) => (
                        <li
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={classNames({
                                'active': activeSizes === size,
                                'disabled': !sizes.includes(size)
                            })} >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} р</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>{category}</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

PizzaBloсk.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number,
    category: PropTypes.number,
}

PizzaBloсk.defaultProps = {
    types: [],
    size: []
}