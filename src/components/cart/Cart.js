import React from 'react'
import classes from './cart.module.css'
import Modal from '../UI/Modal'

const items = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }, { id: 'c2', name: 'Sushi-1', amount: 3, price: 14.99 }]

const Cart = (props) => {
  // console.log('cart>', props)
  const cartItems = <ul className={classes['cart-items']} >
    {items.map((item) => {
      return <li>{item.name}</li>
    })}
  </ul>
  return (
    <Modal onHideCart={props.onHideCart} >
      {cartItems}
      <div className={classes.total} >
        <span>
          Total Amount:
        </span>
        <span>
          35.62
        </span>
      </div>
      <div className={classes.actions} >
        <button onClick={props.onHideCart} > Close</button>
        <button> Order</button>
      </div>
    </Modal>
  )
}

export default Cart
