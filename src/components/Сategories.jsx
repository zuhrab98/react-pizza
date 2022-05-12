import React from 'react'


//export class Categories extends React.Component {

//    state = {
//        activeItem: 3
//    }

//    onSelectItem = (index) => {
//        this.setState({
//            activeItem: index
//        })
//    }

//    render() {
//        const { items } = this.props
//        return (
//            <div className="categories">
//                <ul>
//                    <li >Все</li>
//                    {items.map((name, index) => {
//                        return <li
//                            className={this.state.activeItem === index ? "active" : ''}
//                            onClick={() => this.onSelectItem(index)}
//                            key={`${name}_${index}`}>{name}
//                        </li>
//                    })}
//                </ul>
//            </div>
//        )
//    }
//}


export function Categories({ items }) {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => setActiveItem(index)

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ''}
                    onClick={() => setActiveItem(null)} >Все</li>
                {items && items.map((name, index) => {
                    return <li
                        className={activeItem === index ? "active" : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>{name}
                    </li>
                })}
            </ul>
        </div>
    )
}

