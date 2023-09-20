import React from 'react'
// import classes from './cartitem.module.css'
import './cartitem.css'
const CartItems = (props) => {
    return (
        < li className = "cart-item" >
            {/* <div className='flex justify-between items-center border-b-2 border-b-red-500 '> */}
            <div>
                <h1 className=''>{props.name}</h1>
                <div className="summary">
                    <span className="price">${props.price}</span>
                    <span className="amount"> x {props.amount}</span>
                </div>
            </div>
            <div className="actions">
                <button >−</button>
                <button >+</button>
            </div>

        </li>
    )
}

export default CartItems
